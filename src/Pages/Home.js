import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Desire from "../Image/Desire.jpg";
import Avatar from "@material-ui/core/Avatar";
import Project from "./Project";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
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
          <p style={{ textAlign: "justify" }}>
            I enjoy working on challenges that help me fulfill the goals of the
            organisation. I am very passionate about learning new technologies
            and working with a bigger team to learn new things and share my
            knowledge with others. I have good communication skills that enable
            me to develop a good rapport with people around me. I am constantly
            looking for opportunities to help me grow my technical skills.
          </p>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "green" }}
          >
            Download Resume
          </Button>
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
      <h4>Projects</h4>
      <Project />
    </div>
  );
};

export default Home;
