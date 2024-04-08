import Link from "next/link"

export default function Header()  {
    return (
        <header className="headerMainPage flex flex-row items-center justify-between p-4">
            <Link href="/">Home</Link>
            <h1>Task Manager</h1>
            <Link href="#">Temp Link</Link>
        </header>
    )
}