"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { Home, Wallet, Clock } from 'lucide-react';
import Link from 'next/link';
import { p } from 'framer-motion/client';

const Navbar = () => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    // Hide Navbar on onboarding page
    if (pathname === '/onboarding' || pathname === '/signup' || pathname === '/addsubvaults') return null;
    return (
        <div className="fixed bottom-[20px] left-0 right-0 flex justify-center bg-white">
            <div className="text-black py-3 m-2 border rounded-[12px] w-[300px]">
                <ul className="flex justify-between items-center px-3">
                    <li className="cursor-pointer">
                        <Link
                            href='/dashboard'
                        >
                            <Home />
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link
                            href='/vaults'
                        >
                            <Wallet />
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link
                            href='/activities'
                        >
                            <Clock />
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <button className="bg-[#5C33F6] px-3 py-2 text-white rounded-[12px]">
                            Add Vault +
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
