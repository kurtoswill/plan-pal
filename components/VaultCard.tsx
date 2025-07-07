import React from 'react'
import data from '@/data/vaults.json'
import Image from 'next/image'

interface Vault {
    id: string
    name: string
    year: string
    role: string
    contributors: number
    avatar: string
}

const CreatedVaultCard = () => {
    return (
        <div className="space-y-4">
            {data.vault.map((vault: Vault) => (
                <div
                    key={vault.id}
                    className="font-semibold border border-black/5 rounded-[12px] p-4 shadow"
                >
                    <div className="mb-4">
                        <h1 className="text-headline">{vault.name}</h1>
                        <p className="font-normal text-[14px]">{vault.year}</p>
                        <p className="font-normal text-[14px]">Role: {vault.role}</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="font-normal text-[14px]">
                            Contributors: {vault.contributors}
                        </p>
                        <Image
                            src={vault.avatar}
                            alt="Avatar"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CreatedVaultCard