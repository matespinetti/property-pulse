import "@/assets/styles/global.css"

export const metadata = {
    title: "Property Pulse",
    description: "Find your next home with Property Pulse",
}

 const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
}
    

export default MainLayout;