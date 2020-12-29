import React, {useContext} from "react";
import SessionContext from "../util/SessionContext";
import PageLayout from "../components/PageLayout";

export default function Dashboard() {
    const {userProfile} = useContext(SessionContext)

    return(
        <PageLayout title="Dashboard">
            <div className="h-screen flex justify-center items-center px-12 bg-gray-50">
                <div className="text-center">
                    <h1>Dashboard</h1>
                </div>
            </div>
        </PageLayout>

    )
}