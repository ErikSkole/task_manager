import prisma from '@/app/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: 'Method Not Allowed' });
    } try {
        const search:any = req.nextUrl.searchParams.get('id');
        const id = parseInt(search)
        const tasks = await prisma.task.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json(tasks)
    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
