import React, {useState} from "react";
import StepperAction from "../integrationScenario/stepperAction/stepper.action.component";
import {Hops} from '../integrationScenario/hops'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {IntegrationScenario} from "../integrationScenario/IntegrationScenario";

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


    const generateElement = (key, value) => {
        // console.log(key, value)


        return (
            <div key={key}>
                <p>{key}</p>
                <p>{value}</p>
            </div>
        );
    }

    function generateData(data) {
        const kv = {}
        const newData = Object.keys(data).reduce((result, currentKey) => {
            console.log("result", result, "currentKey", currentKey)

            if (typeof data[currentKey] === 'string' || data[currentKey] === 'number' || data[currentKey] instanceof String || data[currentKey] instanceof Number) {

                const elementToPush = generateElement(currentKey, data[currentKey]);
                // kv[currentKey] = data[currentKey]
                result[[currentKey]] = data[currentKey]
            } else {
                // kv[currentKey] = {}
                const nested = generateData(data[currentKey]);
                console.log("nested", nested, "currentKey", currentKey, "resutl", result)
                // result.push(...nested);
                result[[currentKey]] = {...nested}

            }
            return result;
        }, []);
        // console.log("newData", newData)
        return newData;
    }


    // function generateData(data) {
    //     const kv = {}
    //     const newData = Object.keys(data).reduce((result, currentKey) => {
    //         console.log("result", result,"currentKey", currentKey)
    //
    //         if (typeof data[currentKey] === 'string' || data[currentKey] instanceof String) {
    //
    //             const elementToPush = generateElement(currentKey, data[currentKey]);
    //             // kv[currentKey] = data[currentKey]
    //             result.push({[currentKey]: data[currentKey]});
    //         } else {
    //             // kv[currentKey] = {}
    //             const nested = generateData(data[currentKey]);
    //             console.log("nested",nested , "currentKey", currentKey)
    //             result.push(...nested);
    //         }
    //         return result;
    //     }, []);
    //     // console.log("newData", newData)
    //     return newData;
    // }
    console.log("------------", JSON.stringify(generateData(IntegrationScenario[13].hops[1].services[0].serviceProperties), null, '\t'))
    return (
        <div>
            <button onClick={() => generateData(IntegrationScenario[13].hops[1].services[0].serviceProperties)}>dummy3
            </button>
            <div>
                <TextareaAutosize style={{width: "900px"}} aria-label="empty textarea" placeholder={text}/>
            </div>
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