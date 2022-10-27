import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const SocialMediaIcon = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid
          className={classes.root}
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: 10,
          }}
        >
          <h4>
            <FacebookIcon />
          </h4>
          <h4>
            <LinkedInIcon />
          </h4>

          <h4>
            <TwitterIcon />
          </h4>

          <h4>
            <GitHubIcon />
          </h4>
        </Grid>
        
      </Grid>
      <p style={{textAlign: 'center'}} >
        Copyright ©2022 All rights reserved 
        </p>
    </div>
  );
};

export default SocialMediaIcon;
