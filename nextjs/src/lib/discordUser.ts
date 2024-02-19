import { generateColorFromNumber } from "./color";
import prisma from "./prisma";

export const getDiscordUser = async (authorDiscordId: number) => {
  const discordUser = await prisma.discordUser.findUnique({
    where: {
      discordId: authorDiscordId
    }
  });

  return discordUser;
};

export const getAllDiscordUsers = async () => {
  const discordUsers = await prisma.discordUser.findMany({})

  return discordUsers;
}

export const createDiscordUser = async (discordUserId: number, discordUserName: string) => {

  const generatedColor = await generateColorFromNumber(discordUserId);
  const discordUser = await prisma.discordUser.create({ data: {discordId: discordUserId, username: discordUserName, color: generatedColor}})

  return discordUser;
}