import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import data from "../Component/data.json";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: "pointer",
  },
  rootCard: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 500,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  rootButton: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Project = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Card className={classes.rootCard}>
              <CardMedia
                className={classes.cover}
                image={project.image}
                title="Live from space album cover"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {project.project_name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {project.about}
                  </Typography>
                </CardContent>
              </div>
            </Card>
            <br />
            <div className={classes.rootButton}>
              <a href={project.code_view} style={{textDecoration: 'none'}} >
                <Button variant="contained" color="primary">
                  view code
                </Button>
              </a>
              <a href={project.project_link} style={{textDecoration: 'none'}}>
                <Button variant="contained" color="primary">
                  Live view
                </Button>
              </a>
            </div>
            <hr />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Project;
