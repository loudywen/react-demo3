import React, {useState} from "react";
import StepperAction from "../../integrationScenario/stepperAction/stepper.action.component";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {ScenarioType} from "../scenario.type";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import withWidth, {isWidthUp} from "@material-ui/core/withWidth";

const styles = makeStyles(theme => ({
  parent: {
    border: "black solid",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    margin: "10px 10px",
    padding: "10px",
    // width: "500px",
    flexDirection: "column"
  },
  button1: {
    marginRight: theme.spacing(1),
    width: "150px"
  },
  cardContainer: {
    padding: "10px",
    border: "red solid",
    width: "95%",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,

  },
  gridList: {
    border: "black solid",
    width: "90%",
    margin: "10px 10px"

    //height: "auto"
  },
  gridListTile: {
    border: "green solid",
    margin: "10px 10px",

    maxWidth: "400px",
    display: "flex",
    justifyContent: "center"
  },
  card: {
    border: "yellow solid",
    width: "370px",
    //width: "100%",
    height: "194px"
  }
}));

const Dummy1 = ({currentStep, btnDesc, width}) => {
  const classes = styles();

  const getGridListCols = () => {
    console.log(width);
    if (isWidthUp("xl", width)) {
      return 4;
    }

    if (isWidthUp("lg", width)) {
      return 3;
    }

    if (isWidthUp("md", width)) {
      return 2;
    }

    return 1;
  };

  const [spinner, setSpinner] = useState(false);
  const [collection, setCollection] = useState(ScenarioType);

  const dummyFn = () => {
    if (currentStep === 4) {
      setSpinner(true);
    } else {
      console.log("Done dummy1 Function");
    }
  };

  return (
      <div className={classes.parent}>
        <p> Dummy1</p>

        <div className={classes.cardContainer}>
          <GridList
              cellHeight={200}
              className={classes.gridList}
              cols={3}
              spacing={30}
          >
            {/* scenarioTypeName: "Messaging",
    scenarioTypeDesc: "This designates a common messaging pattern", */}

            {collection.map((obj, index) => {
              return (
                  <GridListTile key={index} className={classes.gridListTile} cols={1}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="h2">{obj.scenarioTypeName}</Typography>
                        <Typography variant="body1" noWrap={false}>{obj.scenarioTypeDesc}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          Select
                        </Button>
                      </CardActions>
                    </Card>
                  </GridListTile>
              );
            })}
          </GridList>
        </div>

        <StepperAction
            isValid={true}
            fnToExecute={dummyFn}
            btnDesc={btnDesc}
            spinner={spinner}
        />
      </div>
  );
};
const mapStatesToProps = state => ({
  currentStep: state.stepper.activeStep
});
export default withWidth()(connect(mapStatesToProps)(Dummy1));
