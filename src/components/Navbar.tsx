'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Download', href: '/download' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 px-8 py-4 rounded-b-3xl mx-8 mt-4 backdrop-blur-xl shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Drivve™
        </Link>
        <ul className="hidden md:flex justify-between items-center gap-8">
          {navItems.map(item => (
            <li key={item.name}><Link href={item.href} className={`hover:text-indigo-400 transition-colors py-2 ${pathname === item.href ? 'text-indigo-600 font-semibold' : ''}`}>{item.name}</Link></li>
          ))}
        </ul>
        {/*<Button className="glass ml-4 mr-4">Download</Button>*/}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <ul className="md:hidden flex justify-between items-center flex-col gap-4 mt-4 bg-white/10 backdrop-blur-xl rounded-lg p-4">
          {navItems.map(item => (
            <li key={item.name}><Link href={item.href} className={`hover:text-indigo-400 transition-colors py-2 block ${pathname === item.href ? 'text-indigo-600 font-semibold' : ''}`} onClick={() => setOpen(false)}>{item.name}</Link></li>
          ))}
        </ul>
      )}
    </nav>
  )
}
