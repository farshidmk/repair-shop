/*
  Warnings:

  - You are about to drop the column `owner` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `product_year` on the `Car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "owner",
DROP COLUMN "product_year",
ADD COLUMN     "ownerId" INTEGER,
ADD COLUMN     "productYear" TEXT;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
