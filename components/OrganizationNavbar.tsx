'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const OrganizationNavbar = () => {
    const [activeItem, setActiveItem] = useState<string>(''); // Track the active link

    const handleActive = (name: string) => {
        setActiveItem(name); // Set the active item when clicked
    };

    return (
        <div>
            <ul className="flex justify-between items-center text-[18px] mt-[20px]">
                <li
                    className={`cursor-pointer ${activeItem === 'subvaults' ? 'font-bold' : ''}`}
                    onClick={() => handleActive('subvaults')}
                >
                    <Link href="/subvaults">
                        Sub-vaults
                    </Link>
                </li>
                <li
                    className={`cursor-pointer ${activeItem === 'vote' ? 'font-bold' : ''}`}
                    onClick={() => handleActive('vote')}
                >
                    <Link href="/vote">
                        Vote
                    </Link>
                </li>
                <li
                    className={`cursor-pointer ${activeItem === 'transactions' ? 'font-bold' : ''}`}
                    onClick={() => handleActive('transactions')}
                >
                    <Link href="/transactions">
                        Transactions
                    </Link>
                </li>
                <li
                    className={`cursor-pointer ${activeItem === 'roles' ? 'font-bold' : ''}`}
                    onClick={() => handleActive('roles')}
                >
                    <Link href="/roles">
                        Roles
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default OrganizationNavbar;