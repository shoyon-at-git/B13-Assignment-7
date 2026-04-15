"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { RiHome2Line } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { CiClock2 } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const navigation = [
    { id: "home", label: "Home", path: "/", icon: RiHome2Line },
    { id: "timeline", label: "Timeline", path: "/timeline", icon: CiClock2 },
    { id: "stats", label: "Stats", path: "/stats", icon: ImStatsDots },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative px-4 py-4 md:px-10 lg:px-20">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-3xl font-extrabold text-[#244d3f]">
                    <span className="text-[#1f2a38]">Keen</span>Keeper
                </Link>

                <div onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl cursor-pointer">
                    {isOpen ? <HiX /> : <HiMenu />}
                </div>

                <div className="hidden md:flex gap-3">
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;

                        return (
                            <Link
                                key={item.id}
                                href={item.path}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                                    isActive ? "bg-[#244D3F] text-white" : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div
                className={`absolute mt-3 w-48 bg-amber-200 shadow-lg rounded-lg flex flex-col gap-1 p-2 md:hidden transition-all duration-300 right-[3%] ${
                    isOpen ? "top-[50%]" : "-top-40"
                }`}
            >
                {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.path;

                    return (
                        <Link
                            key={item.id}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                                isActive ? "bg-[#244D3F] text-white" : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <Icon size={18} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}