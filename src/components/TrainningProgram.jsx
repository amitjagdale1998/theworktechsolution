import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import mern from "./images/mernstack.png";
import java from "./images/java.jpeg";
import uiux from "./images/uiux.png";
import dotnet from "./images/dotnet.png";

const TrainningProgram = () => {
    return (
        <div className="trainingProgramme-page">
            <div className=" text-center">
                <h2 className="heading">TRAINING PROGRAMME</h2>
            </div>
            <div
                className="program-page"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                <Card sx={{ maxWidth: 345, margin: "10px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={mern}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                MERN stack
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Learn Enterprise application development using
                                Java Learn fullstack web Development using
                                Spring Boot Front end design with React Top
                                companies are hiring fullstack java developers
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, margin: "10px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={java}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                JAVA/Full stack
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Learn Enterprise application development using
                                Java Learn fullstack web Development using
                                Spring Boot Front end design with React Top
                                companies are hiring fullstack java developers
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, margin: "10px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={dotnet}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Asp.Net/C#.Net/Full stack
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Learn web application development using .Net
                                core and web API Front end design with Angular
                                Top companies are hiring fullstack. Net
                                developers
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, margin: "10px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={uiux}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                QA/Testing
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Get in-depth knowledge of SDLC and STLC
                                processes Learn testing tools such as, QC, UFT,
                                JIRA, mantis, Bugzilla etc. Learn manual &
                                automation testing using selenium web driver
                                QA/Test Engineers
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default TrainningProgram;
