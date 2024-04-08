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
            setTask(data)
        }
        fetchTask()
    }, [])

    console.log(task)

    return (
        <main className='taskPageMain flex justify-center bg-background-800'>
            <div className='taskPageBoxSide basis-4/12 mt-32 m-8 rounded-md'></div>
            <div className='taskPageBoxMid flex flex-col mt-32 bg-background-700 p-4 rounded-md p-16'>
                <h1 className='text-3xl mb-8'>
                    {task.title}
                </h1>
                <p className='text-md'>
                    {task.description}
                </p>
            </div>
            <div className='taskPageBoxSide bg-background-700 basis-4/12 mt-32 m-8 rounded-md'>
                <h1 className='text-2xl ml-8 mt-16 mb-8'>
                    User responisble:
                </h1>
                
            </div>
        </main>
    )
}