import { PrismaClient } from '@prisma/client';

import { ingredientList, recipesList } from '../src/utils/recipes';

const prisma = new PrismaClient();

async function seedRun() {
  await prisma.ingredient.deleteMany();
  await prisma.recipes.deleteMany();

  for (const ingredient of ingredientList) {
    await prisma.ingredient.create({
      data: {
        name: ingredient.name.toLocaleLowerCase(),
        number_of_units: ingredient.number_of_units,
        measurement: ingredient.measurement,
        created_at: new Date()
      }
    })
  }

  for (const recipe of recipesList) {
    await prisma.recipes.create({
      data: {
        title: recipe.title,
        ingredients: recipe.ingredients.toString(),
        description: recipe.description.toString(),
        duration: recipe.duration,
        image_url: recipe.image_url,
        created_at: new Date()
      }
    })
  }
}

seedRun()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('Error:', e)
    await prisma.$disconnect()
    process.exit(1)
  })