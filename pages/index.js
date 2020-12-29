import PageLayout from "../components/PageLayout";

export default function Home() {
    return (
        <PageLayout title="Welcome to Hollar">
            <div className="h-screen flex justify-center items-center px-12 bg-gray-50">
                <div className="text-center">
                    <h1>Welcome to Hollar</h1>
                </div>
            </div>
        </PageLayout>
    )
}
