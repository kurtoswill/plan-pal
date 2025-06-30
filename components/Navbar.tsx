import React from 'react';
import { Home, Wallet, Clock } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="fixed bottom-[20px] left-0 right-0 flex justify-center bg-white">
            <div className="text-black py-3 m-2 border rounded-[12px] w-[300px]">
                <ul className="flex justify-between items-center px-3">
                    <li className="cursor-pointer">
                        <a href='/home'
                            className=''
                        >

                        </a>
                        <Home />
                    </li>
                    <li className="cursor-pointer">
                        <Wallet />
                    </li>
                    <li className="cursor-pointer">
                        <Clock />
                    </li>
                    <li className="cursor-pointer">
                        <button className="bg-[#5C33F6] px-3 py-2 text-white rounded-[12px]">
                            Add Vault +
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;