import prisma from "./prisma";

export const getMessages = async () => {
  const messages = await prisma.message.findMany({
    include: {
      discordUser: true,
    },
  });

  return messages;
};

export const deleteMessage = async(messageId: number) => {
  await prisma.message.delete({ where: { id: messageId}})
}
