import { ChevronLeft, Share2, Settings, QrCode } from "lucide-react";
import OrganizationNavbar from "@/components/OrganizationNavbar";
import data from "@/data/vaults.json";
import roles from "@/data/roles.json";

const Page = () => {
    return (
        <div>
            <header className="relative flex items-center justify-between align-center">
                <a
                    href="/dashboard"
                    className="flex items-center"
                >
                    <ChevronLeft width={30} height={30} />
                </a>

                <div className="flex items-center gap-4 opacity-50">
                    <a>
                        <Share2 width={30} height={30} />
                    </a>
                    <a>
                        <Settings width={30} height={30} />
                    </a>
                </div>
            </header>

            {data.vaultcreated.map((vault: any) => (
                <div key={vault.id}>
                    <div className="font-semibold border border-black/5 rounded-[12px] p-4 shadow bg-[#5C33F6] text-white h-full mt-[30px]">
                        <div className="flex flex-col justify-between h-full">
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <h1 className="text-headline text-[20px]">{vault.name}</h1>
                                <a>
                                    <QrCode
                                        className="opacity-50"
                                    />
                                </a>
                            </div>

                            <div className="font-normal text-[12px] opacity-75 -mt-[15px] mb-[20px]">
                                <p>Vault ID: {vault.id}</p>
                                <p>{vault.year}</p>
                            </div>

                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <p className="font-normal text-[14px]">Current Balance:</p>
                                    <p className="font-normal text-[18px]">
                                        ₱ {Number(vault.balance).toLocaleString()}
                                    </p>
                                </div>
                                <img
                                    src={vault.avatar}
                                    alt="Avatar"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <OrganizationNavbar />

            <div className="mt-4">
                <p className="text-[18px]">Head</p>
                <div className="mt-2 font-normal border border-black/5 rounded-[12px] p-2 shadow">
                    {roles.head.map((head, index) => (
                        <p key={index} className="text-[16px]">{head.name}</p>
                    ))}
                </div>

                <p className="text-[18px] mt-6">Moderators ({roles.moderators[0].name.length})</p>
                <div className="mt-2">
                    {roles.moderators[0].name.map((moderator: string, index: number) => (
                        <p key={index} className="text-[16px] font-normal border border-black/5 rounded-[12px] p-2 my-1 shadow">{moderator}</p>
                    ))}
                </div>

                <p className="text-[18px] mt-6">Members ({roles.members[0].name.length})</p>
                <div className="mt-2">
                    {roles.members[0].name.map((member: string, index: number) => (
                        <p key={index} className="text-[16px] font-normal border border-black/5 rounded-[12px] p-2 my-1 shadow">{member}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;