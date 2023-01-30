-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alreadyseen" BOOLEAN NOT NULL,
    "comment" TEXT,
    "streaming" TEXT NOT NULL,
    "genre" TEXT NOT NULL,

    CONSTRAINT "movies_pk" PRIMARY KEY ("id")
);
