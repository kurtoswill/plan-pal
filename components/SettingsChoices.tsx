import React from 'react';

const SettingsChoices = () => {
    return (
        <div className='mt-[20px]'>
            <ul className='flex flex-col gap-[10px]'>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Edit Profile
                </li>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Manage Vaults
                </li>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Dark Mode
                </li>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Language
                </li>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Subscription
                </li>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Terms & Conditions
                </li>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Help
                </li>
            </ul>
        </div>
    );
};

export default SettingsChoices;