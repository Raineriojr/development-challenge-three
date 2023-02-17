import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { FastifyRequest, FastifyReply } from "fastify";
import '../lib/path';

import { prisma } from "../lib/prisma";

export default {
  async listAll(req: FastifyRequest, res: FastifyReply) {
    try {
      const recipes = await prisma.recipes.findMany();

      return {
        recipes
      }
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        res.status(Number(e.code)).send('Falha ao listar receitas.')
      }
    }
  },

  async listOfPossibleRecipes(req: FastifyRequest, res: FastifyReply) {
    try {
      const possibleRecipes = await prisma.$queryRaw`
        SELECT R.*, COUNT(*) AS cnt
        FROM recipes R, ingredients I
        WHERE R.ingredients ILIKE CONCAT('%', I.name, '%')
        AND I.number_of_units > 0
        GROUP BY R.title, R.id
        Order By cnt desc;
      `
      return {
        possibleRecipes
      }

    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        res.status(Number(e.code)).send('Falha ao buscar receita.')
      }
    }
  },

  async search(req: FastifyRequest, res: FastifyReply) {
    const { name } = <{ name: string }>req.query;

    try {
      const filteredRecipes = await prisma.$queryRaw`
        SELECT * FROM recipes R
        WHERE R.title ILIKE CONCAT ('%', ${name}, '%') 
      `
      return {
        recipes: filteredRecipes
      }

    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        res.status(Number(e.code)).send('Falha ao buscar receita.')
      }
    }
  },
}