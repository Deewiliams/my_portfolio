import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Desire from "../Image/Desire.jpg";
import Avatar from "@material-ui/core/Avatar";
import Project from "./Project";
import SocialMediaIcon from "./SocialMediaIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  h3: {
    fontSize: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  imageCicle: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={6} md={6}>
          <h3 className={classes.h3}>
            Hi, I am Desire,
            <br />
            Software Developer
          </h3>
          <p style={{ textAlign: "justify", fontSize: 20 }}>
            I enjoy working on challenges that help me fulfill the goals of the
            organisation. I am very passionate about learning new technologies
            and working with a bigger team to learn new things and share my
            knowledge with others.
          </p>
          <a style={{textDecoration: 'none'}} href="https://docs.google.com/document/d/1Xg-5nHgIu-5Bx261H7gzi-bb2sgZ6gO_yfdjQ13jAME/edit">
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "green" }}
            >
              My Resume
            </Button>
          </a>
        </Grid>
        <Grid item sm={6} md={6}>
          <div className={classes.imageCicle}>
            <Avatar
              alt="Profile picture"
              src={Desire}
              className={classes.large}
            />
          </div>
        </Grid>
      </Grid>
      <h1>Projects</h1>
      <Project />
      <SocialMediaIcon />
    </div>
  );
};

export default Home;
