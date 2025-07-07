import Navbar from "@/components/Navbar";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`lg:mx-[500px]`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}