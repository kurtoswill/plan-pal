import React from 'react'
import data from '@/data/subvaults.json'
import Image from 'next/image'

interface SubVault {
    id: string
    org: string
    name: string
    balance: string
    target: string
}

const SubVaultCards = () => {
    return (
        <div className="space-y-4">
            {data.subvaults.map((vault: SubVault) => (
                <div
                    key={vault.id}
                    className="font-semibold border border-black/5 rounded-[12px] p-4 shadow"
                >
                    <div className="flex justify-between gap-2">
                        <h1 className="text-headline">{vault.name}</h1>
                        <p
                            className='flex items-center justify-between gap-2 font-normal text-[14px]'
                        >
                            Target: ₱ {vault.target}
                        </p>
                    </div>

                    <div className=" items-center justify-between mt-[40px]">
                        <p className="font-normal text-[14px]">
                            Current Balance:
                        </p>
                        <p className='font-normal text-[14px]'>
                            ₱ {vault.balance}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SubVaultCards
