import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function createAdmin(admin){
    try {
        const newAdmin = await prisma.admin.create({data: admin})
    } catch (e) {
        console.error(e);
    }
}