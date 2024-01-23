import Link from "next/link"
export default function Home() {
  return (
    <header className='flex items-center justify-between '>
      <Link className="text-red-500 font font-semibold text-2xl" href="">NF PIZZA</Link>
      <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''} className="bg-primary text-white rounded-full px-6 py-2">Login</Link>
      </nav>
    </header>
  )
}