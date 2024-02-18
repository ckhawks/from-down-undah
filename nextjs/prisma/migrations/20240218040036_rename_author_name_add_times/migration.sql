/*
  Warnings:

  - You are about to drop the column `author` on the `Message` table. All the data in the column will be lost.

*/
-- RedefineTables

PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorName" TEXT NOT NULL DEFAULT 'unnamed',
    "authorDiscordId" INTEGER NOT NULL DEFAULT 0,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "messageTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Message" ("authorDiscordId", "id", "message", "authorName") SELECT "authorDiscordId", "id", "message", "author" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
