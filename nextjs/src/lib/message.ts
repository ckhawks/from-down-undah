import prisma from "./prisma";

export const getMessages = async () => {
  const messages = await prisma.message.findMany({
    // select: {
    //   id: true,
    //   name: true,
    // },
  });

  return messages;
};
