import data from '@/data/vaults.json';
import {ChevronLeft} from "lucide-react";
import OrgSettingsCard from "@/components/OrgSettingsCard";

const Page = () => {
    return (
       <div>
        <header className="relative flex items-center">
            <a
                href="/dashboard"
                className="absolute left-0"
            >
                <ChevronLeft />
            </a>
            <p className="mx-auto text-[20px]">Settings</p>
        </header>

        <div className="flex flex-col justify-center rounded-full mt-[40px] items-center gap-[20px]">
                {data.vaultcreated.length > 0 && (
                    <img 
                        src={data.vaultcreated[0].avatar} 
                        alt="Org Avatar" 
                        className="rounded-full"
                        width={120} height={120}
                    />
                )}
                <p className='text-center font-semibold text-[20px]'>
                    {data.vaultcreated.length > 0 ? data.vaultcreated[0].name : "No profile"}
                </p>
        </div>
        <OrgSettingsCard />
       </div>
    );
};

export default Page;