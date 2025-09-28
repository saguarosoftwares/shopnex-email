import dynamic from "next/dynamic";

const PageComponent = dynamic(
    () => import("@/clients/EmailEditor").then((lib) => lib.default) as any,
    { ssr: false }
);

const Index = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageComponent />
        </div>
    );
};

export default Index;
