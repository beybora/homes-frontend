import { MainMenu } from "components/MainMenu";
import "../styles/globals.css";
import { Poppins, Aboreto } from "next/font/google";
import { getMenu } from "utils/getMenu";

const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
});

const aboreto = Aboreto({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-aboreto",
});

export default async function RootLayout({ children }) {
    const data = await getMenu();

    return (
        <html lang="en" className={`${poppins.variable} ${aboreto.variable}`}>
            <body className="font-body">
                <MainMenu menuItems={data} />
                {children}
            </body>
        </html>
    ) 
}