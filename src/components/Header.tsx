'use client'

import { useState } from "react";
import { Menu, X } from "lucide-react"

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between"> {/*View começa aqui*/}
                    <div className="flex items-center space-x-3">
                        <Logo color="black" size="big"/>

                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Livraria Moraes
                            </h1>
                            <p className="text-sm text-gray-600">A sua livraria</p>
                        </div>
                    </div>

                    <DesktopMenu />

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <MobileMenu />
                )}
            </div>
        </header>
    );
}