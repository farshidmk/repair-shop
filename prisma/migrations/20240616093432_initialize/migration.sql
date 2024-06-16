-- CreateTable
CREATE TABLE "car" (
    "id" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "product_year" TIMESTAMP(3) NOT NULL,
    "color" TEXT NOT NULL,
    "number" TEXT NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visit" (
    "id" SERIAL NOT NULL,
    "car_id" INTEGER NOT NULL,
    "entrance_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "current_kilometers" INTEGER NOT NULL,
    "next_visit_kilometers" INTEGER NOT NULL,
    "reseon" TEXT NOT NULL,

    CONSTRAINT "visit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "repair" (
    "id" SERIAL NOT NULL,
    "car_id" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "repair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "is_income" BOOLEAN NOT NULL,
    "cost" INTEGER NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issue" (
    "id" SERIAL NOT NULL,
    "car_id" INTEGER NOT NULL,
    "repair_id" INTEGER NOT NULL,
    "find_date" TIMESTAMP(3) NOT NULL,
    "fix_date" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "issue_pkey" PRIMARY KEY ("id")
);
