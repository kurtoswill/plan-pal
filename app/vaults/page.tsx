import React from 'react';
import data from '@/data/vaults.json';
import CreatedVaultCard from "@/components/CreatedVaultCard";
import VaultCard from "@/components/VaultCard";

const Page = () => {
    return (
        <main>
            <h1 className='flex justify-center text-[40px] mb-[40px]'>Vaults</h1>

            <h3 className='text-[20px] mb-4'>My Vaults</h3>
            <CreatedVaultCard />

            <h3 className='text-[20px] mb-4 mt-[40px]'>Recent Vaults</h3>
            <VaultCard />
        </main>
    );
};

export default Page;