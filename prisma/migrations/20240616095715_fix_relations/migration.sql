/*
  Warnings:

  - You are about to drop the `car` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `issue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `repair` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `visit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "car";

-- DropTable
DROP TABLE "issue";

-- DropTable
DROP TABLE "repair";

-- DropTable
DROP TABLE "transaction";

-- DropTable
DROP TABLE "visit";

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "product_year" TIMESTAMP(3) NOT NULL,
    "color" TEXT NOT NULL,
    "number" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visit" (
    "id" SERIAL NOT NULL,
    "entranceDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentKilometers" INTEGER NOT NULL,
    "nextVisitKilometers" INTEGER NOT NULL,
    "reseon" TEXT NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repair" (
    "id" SERIAL NOT NULL,
    "cost" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3) NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Repair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Issue" (
    "id" SERIAL NOT NULL,
    "findDate" TIMESTAMP(3) NOT NULL,
    "fixDate" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "carId" INTEGER NOT NULL,
    "repairId" INTEGER NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "isIncome" BOOLEAN NOT NULL,
    "cost" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_number_key" ON "Car"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Visit_carId_key" ON "Visit"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "Repair_carId_key" ON "Repair"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "Issue_carId_key" ON "Issue"("carId");

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_repairId_fkey" FOREIGN KEY ("repairId") REFERENCES "Repair"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
