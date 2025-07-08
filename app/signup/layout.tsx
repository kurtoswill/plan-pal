import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "../globals.css"; // ✅ Correct path

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Signup | PlanPal",
    description: "Signup for PlanPal",
};

export default function SignupLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${outfit.variable} ${geistMono.variable} antialiased m-6 mb-[100px] lg:mx-[500px]`}
        >
        {/* ✅ No Navbar here */}
        {children}
        </body>
        </html>
    );
}
