import React, {useEffect, useState} from "react";
import StepperAction from "../../integrationScenario/stepperAction/stepper.action.component";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import AddHop from "./add.hop.component";
import Hop from "./hop.component";
import Tooltip from '@material-ui/core/Tooltip';

const styles = makeStyles(theme => ({
    parent: {
        // border: "black solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // width: "500px",
        flexDirection: "column"
    },
    button1: {
        marginRight: theme.spacing(1),
        width: "150px"
    },
    fab: {
        width: 35,
        height: 35
    },
    hopContainer: {
        border: "green solid",
        display: "flex",
        width: "90%",
        flexWrap: "wrap",
        justifyContent: "center",

    },
    hop: {
        border: "blue solid",
        display: "flex",
        alignItems: "center",
        margin: "5px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "100%"
    }
}));


const RouteBuilder = ({currentStep, btnDesc}) => {
    const [openHopSelector, setOpenHopSelector] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hops, setHops] = useState([]);
    const classes = styles();

    const febOnClick = (event, index) => {
        setOpenHopSelector(true);
        setCurrentIndex(index)
    };

    const closeHopSelector = () => {
        setOpenHopSelector(false)
    };

    const addAfter = (array, index, newItem) => {
        // console.log("index", index);
        // console.log("old array", array);
        const copy = [...array];
        copy.splice(index + 1, 0, newItem);
        // console.log("new array", copy);
        return (copy)
    };

    const setSelectedHop = (obj) => {
        setHops(oldArray =>
            (currentIndex === 0 && hops.length === 0) ? [...oldArray, obj] : addAfter(oldArray, currentIndex, obj))
    };

    const updateHopService = (obj) => {
        const newHops = [...hops];
        const index = newHops.findIndex(hop => hop.hopName === obj.hopName && hop.hopType === obj.hopType);
        newHops[index] = obj;
        setHops(newHops)
    };

    const configService = () => {

    }


    const dummyFn = () => {
        console.log("Done dummy2 Function");
    };

    const deleteHop = (index) => {
        // console.log("delete index", index);
        let temp = [...hops];
        temp.splice(index, 1);
        // console.log("delete temp", temp);
        setHops([...temp])
    };

    const showHops =
        hops.map((obj, index) => (
                <div className={classes.hop} key={index}>
                    {/*HOP Component*/}
                    <Hop hop={obj} deleteHop={() => deleteHop(index)} updateHopService={updateHopService}
                         configService={configService}/>

                    <Tooltip title="Add Hop" arrow>
                        <Fab className={classes.fab} color="primary" aria-label="add"
                             onClick={(event) => febOnClick(event, index)}>
                            <AddIcon/>
                        </Fab>
                    </Tooltip>

                </div>
            )
        );

        return (
            <div className={classes.parent}>
                <p> Dummy2</p>
                {openHopSelector ?
                    <AddHop open={openHopSelector} cancel={closeHopSelector} selectedHop={setSelectedHop}
                            currentHops={hops}/> : null}

                {hops.length === 0 ? (
                    <Tooltip title="Add Hop" arrow>
                        <Fab className={classes.fab} color="primary" aria-label="add"
                             onClick={(event) => febOnClick(event, 0)}>
                            <AddIcon/>
                        </Fab>
                    </Tooltip>

                ) : <div className={classes.hopContainer}>{showHops}</div>
                }

                <StepperAction
                    isValid={true}
                    fnToExecute={dummyFn}
                    btnDesc={btnDesc}
                />
            </div>
        );
    }
;
const mapStatesToProps = state => ({
    currentStep: state.stepper.activeStep
});
export default connect(mapStatesToProps)(RouteBuilder);
