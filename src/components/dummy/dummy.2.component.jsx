import React, {useState} from "react";
import StepperAction from "../integrationScenario/stepperAction/stepper.action.component";
import {Hops} from '../integrationScenario/hops'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Dummy2 = ({btnDesc}) => {

    const [text, setText] = useState("");
    const dummyFn = () => {

        console.log("Done dummy2 Function");

    };

    const mapToFrom = () => {
        let newHops = [];

        for (let x = 0; x < Hops.length; x++) {
            let newHop = {...Hops[x]};
            delete newHop["to"];
            delete newHop["from"];
            delete newHop["links"];
            if (x + 1 < Hops.length) {
                if (Hops[x].to[0].componentType === Hops[x + 1].from[0].componentType) {
                    newHop["from"] = Hops[x].from[0];
                    newHop["to"] = Hops[x].to[0];
                    newHop.to.endpoint = Hops[x + 1].from[0].endpoint;
                    newHops.push(newHop)
                }
            } else {
                newHop["from"] = Hops[x].from[0];
                newHop["to"] = Hops[x].to[0];
                newHops.push(newHop)
            }
        }

        console.log(JSON.stringify(newHops, null, '\t'));
        setText(JSON.stringify(newHops, null, '\t'))
    };

    return (
        <div>
            <button onClick={mapToFrom}>dummy2</button>
            <div>
                <TextareaAutosize style={{width: "900px"}} aria-label="empty textarea" placeholder={text}/>
            </div>
            <StepperAction
                isValid={true}
                fnToExecute={dummyFn}
                btnDesc={btnDesc}
            />
        </div>)
};

export default Dummy2