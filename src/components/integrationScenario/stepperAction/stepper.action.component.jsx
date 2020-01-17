import React from "react";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

import {
    goNext,
    goBack
} from "../../../redux/IntegrationScenario/stepper.actions";

const styles = makeStyles(theme => ({
    parent: {
        // border: "black solid",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px"
    },
    button1: {
        marginRight: theme.spacing(1),
        width: "150px"

        // backgroundColor: "white"
    },
    button2: {
        marginRight: theme.spacing(1),
        width: "150px"
        // backgroundColor: "blue"
    }
}));

const StepperAction = ({
                           isValid,
                           fnToExecute,
                           btnDesc,
                           currentStep,
                           next,
                           prev,
                           spinner
                       }) => {
    const classes = styles();

    const handleNext = () => {
        fnToExecute();

        if (btnDesc !== "Finish") {
            next();
        } else {
            console.log("end of steps");
        }
    };

    const handleBack = () => {
        prev();
    };

    return (
        <div className={classes.parent}>
            <Button
                className={classes.button2}
                variant="contained"
                color="secondary"
                onClick={handleBack}
                disabled={currentStep === 0 ? true : false}
            >
                go back
            </Button>
            <Button
                className={classes.button1}
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={!isValid ? true : false}
            >
                {btnDesc}
            </Button>
        </div>
    );
};

const mapStatesToProps = state => ({
    currentStep: state.stepper.activeStep
});

const mapDispatchToProps = dispatch => ({
    next: () => dispatch(goNext()),
    prev: () => dispatch(goBack())
});

export default connect(mapStatesToProps, mapDispatchToProps)(StepperAction);
