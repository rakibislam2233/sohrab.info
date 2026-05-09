-- CreateTable
CREATE TABLE "PersonalInfo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "bio" TEXT,
    "avatar" TEXT,
    "socials" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);
