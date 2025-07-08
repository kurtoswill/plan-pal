'use client';

import React from 'react';
import { ChevronLeft } from "lucide-react";
import AddSubVault from "@/components/AddSubVault";

const Page = () => {
    return (
        <div>
            <header className="relative flex items-center mb-[40px]">
                <a
                    href="/dashboard"
                    className="absolute left-0"
                >
                    <ChevronLeft />
                </a>
                <p className="mx-auto text-[20px]">Add sub-vault</p>
            </header>

            <AddSubVault />


        </div>
    );
};

export default Page;