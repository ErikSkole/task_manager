import prisma from '@/app/db'

export async function getTask() {
    try {
        return await prisma.task.findUnique({
            where: {
                id: 1
            }
        })
    } catch (error) {
        console.log(error)
        throw new Error("Error getting task")
    }
}