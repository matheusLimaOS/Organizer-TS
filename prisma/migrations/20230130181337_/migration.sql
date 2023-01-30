/*
  Warnings:

  - You are about to drop the column `alreadyseen` on the `movies` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `movies` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "alreadyseen",
DROP COLUMN "comment",
ADD COLUMN     "createdAt" DATE NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ratings" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "comment" TEXT,
    "movieId" SERIAL NOT NULL,
    "userId" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" VARCHAR,

    CONSTRAINT "ratings_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATE NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk_1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
