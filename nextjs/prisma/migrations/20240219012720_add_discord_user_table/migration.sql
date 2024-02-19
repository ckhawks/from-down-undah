-- CreateTable
CREATE TABLE "DiscordUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "discordId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordUser_discordId_key" ON "DiscordUser"("discordId");
