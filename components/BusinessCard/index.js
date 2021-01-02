import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    MuiThemeProvider,
    Typography
} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";
import {makeStyles} from "@material-ui/styles";
import MuiTheme from "../../styles/MuiTheme";

export default function BusinessCard({title, desc}) {
    return (
        <MuiThemeProvider theme={Theme}>
            <Card className="w-1/4">
                <CardActionArea>
                    <div>
                        <img src="https://images.pexels.com/photos/4401638/pexels-photo-4401638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </MuiThemeProvider>
    );
}