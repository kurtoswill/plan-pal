import React from 'react'
import data from '@/data/transactions.json'
import Image from 'next/image'

interface Transaction {
    id: string
    amount: string
    transfer: string
    name: string
    mop: string
    time: string
}

const TransactionCard = () => {
    return (
        <div className="space-y-4">
            {data.transaction.map((transaction: Transaction) => (
                <div
                    key={transaction.id}
                    className="font-semibold border border-black/5 rounded-[12px] p-4 shadow"
                >
                    <div className='flex flex-col gap-2'>
                        <p

                        >
                            ₱ {transaction.amount} is {transaction.transfer} by {transaction.name} via {transaction.mop}
                        </p>
                        <p className='text-[14px] font-normal'>
                            {transaction.time}m ago
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TransactionCard