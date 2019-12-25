import React from "react";
import { Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./TestLayout.styles.scss";
import { Switch, Route } from "react-router-dom";
import FormInputContainer from "../form/form.component";
import Parallax from "../parallax/parallax.component";
import PhotoContainer from "../photoContainer/photoContainer.component";
import { withRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: "10px",
    textAlign: "center"

    //color: theme.palette.text.secondary
  },
  paperSide: {
    padding: "10px",
    textAlign: "center",
    height: "100%",
    background: "rgb(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
    //color: theme.palette.text.secondary
  },
  side: {
    //     position: "absolute",
    //    bottom: "0",
    border: "5px solid pink;"
  }
}));

const TestLayout = () => {
  const classes = useStyles();

  return (

    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Nav</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paperSide}>
            <div className={classes.side}> sidebar</div>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <div className="contentRoot">
              content <br></br>
              <Switch>
                <Route  key="dd" exact path="/testlayout/form" component={FormInputContainer} />

                <Route  path="/testlayout/cards" component={PhotoContainer} />
                <Route  path="/testlayout/parallax" component={Parallax} />
              </Switch>
              <PhotoContainer />
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>footer</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withRouter(TestLayout);
