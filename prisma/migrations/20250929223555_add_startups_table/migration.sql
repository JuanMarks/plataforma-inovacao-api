-- CreateEnum
CREATE TYPE "public"."StartupStage" AS ENUM ('IDEACAO', 'OPERACAO', 'TRACAO', 'ESCALA');

-- CreateTable
CREATE TABLE "public"."Startup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT,
    "segment" TEXT NOT NULL,
    "problem" TEXT NOT NULL,
    "technology" TEXT NOT NULL,
    "stage" "public"."StartupStage" NOT NULL DEFAULT 'IDEACAO',
    "location" TEXT,
    "founders" TEXT,
    "pitch" TEXT,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Startup_name_key" ON "public"."Startup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_cnpj_key" ON "public"."Startup"("cnpj");
