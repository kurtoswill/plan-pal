import data from '@/data/vaults.json';
import { ChevronLeft } from "lucide-react";

const Page = () => {
    const vault = data.vaultcreated.length > 0 ? data.vaultcreated[0] : null;

    return (
        <div>
            <header className="relative flex items-center">
                <a
                    href="/dashboard"
                    className="absolute left-0"
                >
                    <ChevronLeft />
                </a>
                <p className="mx-auto text-[20px]">Receive</p>
            </header>

            <div className="flex flex-col justify-center items-center mt-[200px]">
                {vault ? (
                    <>
                        <img
                            src={vault.qr}
                            alt={`${vault.name} QR Code`}
                            className="rounded-md"
                            width={200}
                            height={200}
                        />
                        <p className="text-center font-semibold text-[20px]">{vault.name}</p>
                        <p>Vault ID: {vault.id}</p>
                    </>
                ) : (
                    <p className="text-center">No vault information available</p>
                )}
            </div>
        </div>
    );
};

export default Page;