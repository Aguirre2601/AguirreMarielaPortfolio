
import type { Metadata } from 'next';
import Header from "@/components/layout/Header";
import './globals.css'
import localFont from 'next/font/local';

const satoshi = localFont({
    src: './fonts/Satoshi-Regular.woff2',
    variable: '--font-satoshi',
    display: 'swap', // Esto ayuda al SEO evitando que el texto sea invisible mientras carga
})

const tanker = localFont({
    src: './fonts/Tanker-Regular.woff2',
    variable: '--font-tanker',
    display: 'swap',
})

const ArraySemiBold = localFont({
    src: './fonts/Array-SemiBold.woff2',
    variable: '--font-ArraySemiBold',
    display: 'swap', 
})

const bebasNeue = localFont({
    src: './fonts/BebasNeue-Regular.woff2',
    variable: '--font-bebas-neue',
    display: 'swap',
})
const outfit = localFont({
    src: './fonts/Outfit-Regular.woff2',
    variable: '--font-outfit',
    display: 'swap',
})


export const metadata: Metadata = {
    title: 'Mariela Aguirre — Portfolio',
    description: 'Portfolio personal',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="es"className={`${satoshi.variable} ${tanker.variable} ${ArraySemiBold.variable} ${bebasNeue.variable} ${outfit.variable}`}>
            <body className="bg-main-bg text-main-text">
                <Header/>
                {children}
            </body>
        </html>
    )
}