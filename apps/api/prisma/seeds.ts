import { PrismaClient } from '@prisma/client';
import type { Streamer } from '@prisma/client';

const prisma = new PrismaClient();

const streamers_data = [
  {
    name: 'Ibai',
    platform: 'twitch',
    image: null,
    description: 'Lorem ipsum dolot sit amet...',
  },
  {
    name: 'Fextralife',
    platform: 'tiktok',
    image: null,
    description: 'Lorem ipsum dolot sit amet...',
  },
  {
    name: 'kingsleague',
    platform: 'youtube',
    image: null,
    description: 'Lorem ipsum dolot sit amet...',
  },
] satisfies Omit<Streamer, 'id'>[];

async function main() {
  await prisma.streamer.deleteMany({});

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
