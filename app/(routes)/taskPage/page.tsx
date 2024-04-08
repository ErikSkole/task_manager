'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function TaskPage({
    searchParams, 
}: 
{searchParams: {
    id: number
}
}){
    const [task, setTask] = useState<any[]>([])
    useEffect(() => {
        const id = searchParams.id
        const fetchTask = async () => {
            const res = await fetch(`/api/test?id=${id}`)
            const data = await res.json()
            console.log(data.title)
            setTask(data)
        }
        fetchTask()
    }, [])


    return (
        <main className='flex justify-center bg-background-800'>
            <div className='flex flex-col min-h-64 min-w-64 bg-background-700 p-4'>
                <h1>
                    {task.title}
                </h1>
                <p>{task.description}</p>
            </div>
        </main>
    )
}