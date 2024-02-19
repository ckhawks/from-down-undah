
import { createDiscordUser, getDiscordUser } from '@/lib/discordUser';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
 
// GET get all messages
export async function GET(request: Request) {

  let messages = await prisma.message.findMany();

  return NextResponse.json(messages); 
}

// POST create a message
export async function POST(request: Request) {
  // console.log("request", request);

  // Extract the `messages` from the body of the request
  const { messageData } = await request.json();
  console.log("messageData", messageData)

  if (messageData.authorName && messageData.message && messageData.authorDiscordId){
    console.log("messageData.authorDiscordId", messageData.authorDiscordId)
    let discordUser = await getDiscordUser(messageData.authorDiscordId)
    console.log("sdfsdfs")
    if (discordUser === null){
      discordUser = await createDiscordUser(messageData.authorDiscordId, messageData.authorName)
    }

    console.log("discordUser", discordUser)

    let newMessage = await prisma.message.create({ data: { message: messageData?.message, discordUserId: discordUser?.id }  });

    return NextResponse.json({ newMessage })
  } else {
    return NextResponse.json({ status: "missing data"})
  }
}