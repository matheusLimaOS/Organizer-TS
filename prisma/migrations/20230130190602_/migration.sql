-- AlterTable
ALTER TABLE "ratings" ALTER COLUMN "movieId" DROP DEFAULT,
ALTER COLUMN "userId" DROP DEFAULT;
DROP SEQUENCE "ratings_movieId_seq";
DROP SEQUENCE "ratings_userId_seq";
