import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch"

const AddSubVault = () => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="name">Sub-vault name<span className='text-red-600'>*</span></Label>
                    <Input type="text" id="name" placeholder="Name"/>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="assign">Assign<span className='text-red-600'>*</span></Label>
                    <Input type="search" id="assign" placeholder="Assign"/>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="amount">Target Amount</Label>
                    <Input type="number" id="amount" placeholder="Enter Value"/>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="expiration">Expiry</Label>
                    <Input type="date" id="expiration" placeholder="Choose Date"/>
                </div>
                <div className="grid w-full gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea placeholder="Optional" id="description" />
                </div>

               <div className='flex gap-2'>
                   <Label htmlFor="allowVoting">Allow Voting</Label>
                   <Switch />
               </div>
            </div>
        </div>
    );
};

export default AddSubVault;