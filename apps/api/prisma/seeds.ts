import { PrismaClient } from '@prisma/client';
import type { Streamer } from '@prisma/client';

const prisma = new PrismaClient();

const streamers_data = [
  {
    name: 'Ibai',
    platform: 'twitch',
    description: 'Lorem ipsum dolot sit amet...',
    image:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png',
  },
  {
    name: 'Fextralife',
    platform: 'tiktok',
    description: 'Lorem ipsum dolot sit amet...',
    image:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png',
  },
  {
    name: 'kingsleague',
    platform: 'youtube',
    description: 'Lorem ipsum dolot sit amet...',
    image:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png',
  },
] satisfies Omit<Streamer, 'id'>[];

async function main() {
  streamers_data.forEach(async (streamer_data) => {
    await prisma.streamer.create({
      data: streamer_data,
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
