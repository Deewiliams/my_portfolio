import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import data from "../Component/data.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Project = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map((project) => (
          <Grid item sm={3} md={3}>
            <Paper className={classes.paper}>
              <p style={{ fontSize: 15, color: "black" }}>
                {project.project_name}
              </p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Project;
