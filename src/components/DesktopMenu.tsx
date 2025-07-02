'use client'

import Link from "next/link"

export default function DesktopMenu() {
    return (
        <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Início</Link>
            <Link href="#books" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Livros</Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sobre</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contato</Link>
            <Link
                href={"/shop"}
                className="
                    bg-gradient-to-r
                    from-blue-600 
                    to-purple-600 
                    text-white px-6 py-2 rounded-full
                    w-fit 
                "
            >
                Catálogo Online
            </Link>
        </nav>
    )
}