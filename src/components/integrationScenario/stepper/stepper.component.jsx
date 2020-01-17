import React from "react";
import {connect} from "react-redux";

import {makeStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// import Button from '@material-ui/core/Button';
import {Steps} from "./steps";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    button: {
        marginRight: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

const MyStepper = ({currentStep}) => {
    const classes = useStyles();

    const getComponent = () => {
        const SelectedStep = Steps[currentStep].component;
        return <SelectedStep btnDesc={Steps[currentStep].btnDesc}/>;
    };

    //   console.log("temp", temp);
    return (
        <div>
            <span>my stepper {currentStep}</span>
            <div className={classes.root}>
                <Stepper activeStep={currentStep}>
                    {Steps.map((obj, index) => {
                        // const stepProps = {};
                        // const labelProps = {};

                        return (
                            <Step key={obj.stepDesc}>
                                <StepLabel>{obj.stepDesc}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                <div>{getComponent()}</div>
            </div>
        </div>
    );
};

const mapStatesToProps = state => ({
    currentStep: state.stepper.activeStep
});

export default connect(mapStatesToProps)(MyStepper);
