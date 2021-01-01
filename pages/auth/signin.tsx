import TextInput from "../../components/forms/TextInput";
import React, {useState} from "react";
import fb from "../../util/firebase-config";
import {useRouter} from "next/router";
import {MuiThemeProvider, TextField, Button} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";

const SignIn = () => {
    const router = useRouter()

    const {status} = router.query
    const [loading, toggleLoading] = useState(false)
    const [error, setError] = useState("")

    function signIn(event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        toggleLoading(true)

        fb.auth().signInWithEmailAndPassword(email, password)
            .then(() => router.push('/dashboard'))
            .catch((error) => {
                setError(error.message)
                toggleLoading(false)
            });

    }

    return <div className="flex justify-center items-center h-screen">
        <MuiThemeProvider theme={Theme}>
            <div className="w-96 text-center rounded-lg border border-gray-200 p-8">
                <form onSubmit={signIn} className="space-y-4">
                    <h1 className="text-4xl font-bold">Log in</h1>
                    <div className="space-y-2">
                        <TextField className="w-full" variant="outlined" label="Email" id="email" required error={error.length > 0} disabled={loading}/>
                        <TextField className="w-full" variant="outlined" label="Password" type="password" id="password" required error={error.length > 0}
                                   disabled={loading}
                                   helperText={error}/>
                        <p className="text-md text-left font-semibold text-green-500">{status && "Check your email for a link to reset your password."}</p>
                    </div>

                    <div className="text-right pt-4 space-x-2">
                        <Button disableElevation onClick={() => router.push('/auth/forgot')}
                                className="mr-2">Forgot password</Button>
                        <Button disableElevation color="primary" variant="contained" type="submit">Log in</Button>
                    </div>
                </form>
            </div>
        </MuiThemeProvider>
    </div>

}

export default SignIn