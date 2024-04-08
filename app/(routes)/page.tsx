import Link from "next/link"
import prisma from "../db"

// Components
import TaskCard from "../__components/task/taskCard";



export default async function Home() {
  
  const tasks = await prisma.task.findMany({
  })
  
  return (
    <main className="flex p-8 bg-background-800">
      <div className="taskColContainer openCol">
        <div className="taskCol">
          {tasks
            .filter(task => task.status === "open" && task.done === false)
            .sort()
            .map(task => {
              return (
                <Link 
                  key={task.id} 
                  href={{ 
                    pathname: '/taskPage', 
                    query: { id: task.id }
                  }} 
                  >
                  <TaskCard props={{ title: task.title, description: task.description, createdAt: task.createdAt}}/>
                </Link>
              )
          })}
        </div>
      </div>
      <div className="taskColContainer wipCol">
        <div className="taskCol">
          {tasks
            .filter(task => task.status === "in_progress" && task.done === false)
            .sort()
            .map(task => {
              return (
                <Link 
                  key={task.id} 
                  href={{ 
                    pathname: '/taskPage', 
                    query: { id: task.id }
                  }} 
                  >
                  <TaskCard props={{ title: task.title, description: task.description, createdAt: task.createdAt}}/>
                </Link>
              )
          })}
        </div>
      </div>
      <div className="taskColContainer doneCol">
        <div className="taskCol">
          {tasks
            .filter(task => task.done === true)
            .sort()
            .map(task => {
              return (
                <Link 
                  key={task.id} 
                  href={{ 
                    pathname: '/taskPage', 
                    query: { id: task.id }
                  }} 
                  >
                  <TaskCard props={{ title: task.title, description: task.description, createdAt: task.createdAt}}/>
                </Link>
              )
          })}
        </div>
      </div>
    </main>
  );
}
