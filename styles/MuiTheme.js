import React from "react";
import {createMuiTheme} from "@material-ui/core/styles";

const Theme = createMuiTheme({
    palette: {
        primary: {
            500: '#8B5CF6',

        }
    },
    typography: {
        button: {
            textTransform: 'none',
            flex: 'none'
        }
    }
})

export default Theme;