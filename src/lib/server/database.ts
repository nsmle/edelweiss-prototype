import { PrismaClient } from '@prisma/client';

const database = new PrismaClient();

export const getNewsletterEmail = async (email: string) => {
    const emailExists = await database.newsletter.findFirst({
        where: { email: { equals: email, mode: 'insensitive' } }
    });

    return emailExists;
};

export const getAvatarApiApikey = async (): Promise<{
    username: string;
    password: string;
    id: number;
    credits: number;
}> => {
    const avatarapikey = await database.avatarapiApikey.findFirst({
        orderBy: {
            credits: 'desc'
        }
    });
    return {
        username: avatarapikey?.username || '',
        password: avatarapikey?.password || '',
        id: avatarapikey?.id || 0,
        credits: avatarapikey?.credits || 0
    };
};

export const updateAvatarApiApikeyCredits = async (id: number, credits: number): Promise<void> => {
    await database.avatarapiApikey.update({
        where: { id },
        data: { credits }
    });
};

export const db = { connection: database, getNewsletterEmail, getAvatarApiApikey, updateAvatarApiApikeyCredits };
export default db;
