import React from 'react';
import data from '@/data/vaults.json';
import Image from 'next/image';

interface Vault {
    id: string;
    name: string;
    year: string;
    role: string;
    contributors: number;
    avatar: string;
}

const VaultCard = () => {
    return (
        <div className='font-semibold border-1 rounded-[12px] p-3 border-black/5 shadow'>
            {data.vaultcreated.map((vault: Vault) => (
                <div key={vault.id}>
                    <h1>{vault.name}</h1>
                    <p className='font-normal text-[14px]'>{vault.year}</p>
                    <p className='font-normal text-[14px] mb-6'>Role: {vault.role}</p>
                </div>
            ))}
            <div>
                {data.vaultcreated.map((vault: Vault) => (
                    <div key={vault.id}
                        className='flex items-center justify-between'
                    >
                        <p className='font-normal text-[14px]'>Contributors {vault.contributors}</p>
                        <Image src={vault.avatar} alt="Avatar" width={40} height={40} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VaultCard;