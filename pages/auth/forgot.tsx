import React, {useState} from "react";
import fb from "../../util/firebase-config";
import {useRouter} from "next/router";
import {MuiThemeProvider, TextField, Button} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";

const Forgot = () => {
    const router = useRouter()
    const [loading, toggleLoading] = useState(false)
    const [error, setError] = useState("")

    function sendResetEmail(event) {
        event.preventDefault()

        const email = event.target.email.value
        toggleLoading(true)

        fb.auth().sendPasswordResetEmail(email)
            .then(() => router.push('/auth/signin?status=reset_successful'))
            .catch((error) => {
                setError(error.message)
                toggleLoading(false)
            });

    }

    return <div className="flex justify-center items-center h-screen">
        <MuiThemeProvider theme={Theme}>
            <div className="w-96 text-center rounded-lg border border-gray-200 p-8">
                <form onSubmit={sendResetEmail} className="space-y-4">
                    <h1 className="text-4xl font-bold">Reset password</h1>
                    <TextField className="w-full" variant="outlined" label="Email" id="email" required error={error.length > 0}
                               helperText={error}
                               disabled={loading}/>
                    <div className="text-right pt-4 space-x-2">
                        <Button onClick={() => router.push('/auth/signin')}
                                className="mr-2">Log in</Button>
                        <Button disableElevation color="primary" variant="contained" type="submit" >Continue</Button>
                    </div>
                </form>
            </div>
        </MuiThemeProvider>
    </div>

}

export default Forgot