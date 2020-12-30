import React, {useContext, useEffect, useState} from "react";
import SessionContext from "../util/SessionContext";
import PageLayout from "../components/PageLayout";
import fb from "../util/firebase-config";

export default function Dashboard() {
    const {userProfile} = useContext(SessionContext)
    const [data, setData] = useState({
        firstName: ''
    })

    useEffect(() => {

        fb.firestore().collection("users-customers").doc(userProfile.uid).get()
            .then(function(doc) {
                if (doc.exists) {
                    const data = doc.data()
                    setData({
                        firstName: data.firstName
                    })
                } else {
                    setData({
                        firstName: "NO FIRST NAME"
                    })
                }
            })
    }, [])

    return(
        <PageLayout title="Dashboard">
            <div className="h-screen flex justify-center items-center px-12 bg-gray-50">
                <div className="text-center">
                    <h1>Hello {data.firstName}</h1>
                    <h1>{userProfile.uid}</h1>
                </div>
            </div>
        </PageLayout>

    )
}