
import { NextResponse } from 'next/server';
import prisma from '../lib/prisma';
 
// GET get all messages
export async function GET(request: Request) {

  let messages = await prisma.message.findMany();

  return NextResponse.json(messages); 
}

// POST create a message
export async function POST(request: Request) {
  console.log(request);

  // Extract the `messages` from the body of the request
  const { messageData } = await request.json();
  console.log(messageData)

  if (messageData.author && messageData.message){
    let newMessage = await prisma.message.create({ data: { author: messageData?.author, message: messageData?.message, authorDiscordId: messageData?.authorDiscordId }  });

    return NextResponse.json({ newMessage })
  } else {
    return NextResponse.json({ status: "missing data"})
  }
}