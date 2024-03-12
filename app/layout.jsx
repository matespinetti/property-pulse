import "@/assets/styles/global.css"
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Property Pulse",
    description: "Find your next home with Property Pulse",
}

 const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Navbar/>
                <main>{children}</main>
            </body>
        </html>
    )
}
    

export default MainLayout;