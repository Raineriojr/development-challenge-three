import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../lib/prisma";

interface BodyParams {
  name: string,
  measurement: string,
  number_of_units: number
}

export default {
  async index(req: FastifyRequest, res: FastifyReply) {
    try {
      const ingredient = await prisma.ingredient.findMany({
        orderBy: {
          name: 'asc'
        }
      });

      return {
        ingredient
      }
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        res.status(Number(e.code)).send('Falha ao listar ingredientes.')
      }
    }
  },

  async create(req: FastifyRequest, res: FastifyReply) {
    const { name, measurement, number_of_units } = <BodyParams>req.body;

    try {
      const ingredient = await prisma.ingredient.create({
        data: {
          name,
          measurement,
          number_of_units,
          created_at: new Date(),
        }
      });

      return {
        ingredient
      }

    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        res.status(Number(e.code)).send('Falha ao cadastrar ingrediente.')
      }
    }
  },

  async update(req: FastifyRequest, res: FastifyReply) {
    const { id } = <{ id: string }>req.params;
    const { name, measurement, number_of_units } = <BodyParams>req.body;

    const _id = Number(id);

    try {
      await prisma.ingredient.update({
        where: {
          id: _id
        },
        data: {
          id: _id,
          name,
          measurement,
          number_of_units,
        }
      })

      res.send('Ingrediente atualizado com sucesso!')
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        res.status(Number(e.code)).send('Falha ao atualizar ingrediente.')
      }
    }
  },

  async resetStock(req: FastifyRequest, res: FastifyReply) {
    const { id } = <{ id: string }>req.params;

    const _id = Number(id);

    try {
      await prisma.ingredient.update({
        where: {
          id: _id
        },
        data: {
          number_of_units: 0
        }
      })

    res.status
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        res.status(Number(e.code)).send('Falha ao zerar estoque')
      }
    }
  },

  async delete(req: FastifyRequest, res: FastifyReply) {
    const { id } = <{ id: string }>req.params;

    const _id = Number(id);

    try {
      await prisma.ingredient.delete({
        where: {
          id: _id
        }
      })
      res.send('Ingrediente removido com sucesso!')

    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        res.status(Number(e.code)).send('Falha ao remover ingrediente.')
      }
    }
  }
}