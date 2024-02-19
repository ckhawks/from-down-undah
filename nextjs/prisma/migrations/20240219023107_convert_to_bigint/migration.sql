/*
  Warnings:

  - You are about to alter the column `discordId` on the `DiscordUser` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DiscordUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "discordId" BIGINT NOT NULL,
    "username" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT 'CCCCCC',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_DiscordUser" ("color", "createdAt", "discordId", "id", "username") SELECT "color", "createdAt", "discordId", "id", "username" FROM "DiscordUser";
DROP TABLE "DiscordUser";
ALTER TABLE "new_DiscordUser" RENAME TO "DiscordUser";
CREATE UNIQUE INDEX "DiscordUser_discordId_key" ON "DiscordUser"("discordId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
