import React from 'react';

const OrgSettingsCard = () => {
    return (
        <div className='mt-[20px]'>
            <ul className='flex flex-col gap-[10px]'>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Edit Logo
                </li>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Edit Name
                </li>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Roles
                </li>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Customize Voting
                </li>
                <li className='font-semibold border-1 rounded-[12px] px-2 py-[6px] border-black/5 shadow'>
                    Subscription
                </li>
            </ul>
        </div>
    );
};

export default OrgSettingsCard;