import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export async function create() {
    await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            posts: {
                create: { title: 'Hello World' },
            },
            profile: {
                create: { bio: 'I like turtles' },
            },
        },
    })

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    })
    console.dir(allUsers, { depth: null })
}
export async function find(){
    const allUsers = await prisma.user.findMany()
     console.log(allUsers)
}