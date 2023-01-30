-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_fk";

-- AlterTable
ALTER TABLE "ratings" ALTER COLUMN "rating" SET DATA TYPE DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
