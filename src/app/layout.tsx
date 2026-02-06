import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/contexts/ReactQuertContext";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "Codeleap Network",
    description: "Tech challenge for Codeleap",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt" className="overflow-x-hidden md:overflow-x-visible">
            <body className={`${roboto.variable} antialiased`}>
                <ReactQueryProvider>
                    {children}
                    <Toaster />
                </ReactQueryProvider>
            </body>
        </html>
    );
}
