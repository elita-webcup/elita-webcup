import NavBar from "@/components/admin/NavBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex w-screen">
                <NavBar></NavBar>
                <div className="w-full">
                    {children}
                </div>
            </div>


        </>
    );
}