import { NavBar } from "./_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <NavBar />
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    );
}

export default MarketingLayout;