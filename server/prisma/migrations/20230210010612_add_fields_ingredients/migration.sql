/*
  Warnings:

  - Added the required column `measurement` to the `ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number_of_units` to the `ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ingredients" ADD COLUMN     "measurement" TEXT NOT NULL,
ADD COLUMN     "number_of_units" DOUBLE PRECISION NOT NULL;
