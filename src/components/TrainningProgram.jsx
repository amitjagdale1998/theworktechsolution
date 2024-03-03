import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { button, CardActionArea, CardActions } from "@mui/material";
import mern from "./images/mernstack.png";
import java from "./images/java.jpeg";
import uiux from "./images/uiux.png";
import dotnet from "./images/dotnet.png";
import cybersecurity from "./images/cybersecurity.jpg";
import pythonfullstack from "./images/pythonfullstack.png";
import datascience from "./images/datascience.jpg";
import digitalmarketing from "./images/digitalmarketing.webp";
import android from "./images/android.jpg";
import businessanalyst from "./images/businessanalyst.jpg";
import cloud from "./images/cloudcomputing.jpg";
import ccpp from "./images/ccpp.jpg";
import ai from "./images/ai.jpg";
import PHP from "./images/PHP.png";
import graphic from "./images/graphic.jpg";
import blockchain from "./images/blockchain.jpg";
import database from "./images/database.webp";
import devops from "./images/devops.jpg";
import networking from "./images/networking.jpg";
import sap from "./images/sap.jpeg";

import Modal from "./Modal";

const TrainningProgram = () => {
  return (
    <div id="courses" className="trainingProgramme-page">
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
              <Typography gutterBottom variant="h5" component="div">
                MERN stack
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
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
              <Typography gutterBottom variant="h5" component="div">
                JAVA/Full stack
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
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
              <Typography gutterBottom variant="h5" component="div">
                Asp.Net/C#.Net/Full stack
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn web application development using .Net core and web API
                Front end design with Angular Top companies are hiring
                fullstack. Net developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
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
              <Typography gutterBottom variant="h5" component="div">
                QA/Testing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get in-depth knowledge of SDLC and STLC processes Learn testing
                tools such as, QC, UFT, JIRA, mantis, Bugzilla etc. Learn manual
                & automation testing using selenium web driver QA/Test Engineers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={cybersecurity}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CyberSecurity
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={networking}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Networking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={pythonfullstack}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Python/Full stack
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={datascience}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Data Science
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={PHP}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PHP Fullstack development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={digitalmarketing}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Digital Marketing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={android}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Android Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={businessanalyst}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Business Analyst
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={cloud}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cloud Computing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ccpp}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                C and C++
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ai}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Airtificial Intelligence
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={graphic}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Graphic Designer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={database}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                SQL/NonSQL database
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={blockchain}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BlockChain Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={devops}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Devops Engineere
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={sap}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sap Trainning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn Enterprise application development using Java Learn
                fullstack web Development using Spring Boot Front end design
                with React Top companies are hiring fullstack java developers
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://static-assets.business.amazon.com/assets/in/13th-oct-2022/BPO_2880_960_1210.jpg.transform/1536x512/image.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Training BPO
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Training Business Process Outsourcing, also referred to as
                Training BPO or Learning BPO, is a business strategy, and a
                component of the broader outsourcing industry, where a company
                utilizes an external supplier for the management of training
                processes and/or activities.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Modal />
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default TrainningProgram;
