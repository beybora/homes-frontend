import "../styles/globals.css";
import { Poppins, Aboreto } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
});

const aboreto = Aboreto({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-aboreto",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable} ${aboreto.variable}`}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My App</title>
            </head>
            <body className={`${poppins.className} ${aboreto.className}`}>
                {children}
            </body>
        </html>
    )
}