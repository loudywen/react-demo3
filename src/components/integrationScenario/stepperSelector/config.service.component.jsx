import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const ConfigService = ({open, cancel, hop, configService, pos}) => {


    const handleCancel = () => {
        cancel()
    };
    console.log(pos);

    console.log(hop.serviceContracts[pos]);

    const serviceSchema = hop.serviceContracts[pos].serviceSchema;
    const properties = serviceSchema["properties"];
    console.log("properties", properties);

    const extract = properties => {
        let kv = [];
        let keys = Object.keys(properties);
        let values = Object.values(properties);
        for (let i = 0; i < keys.length; i++) {
            kv.push({[keys[i]]: values[i]})
        }
        return kv;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // call configService
    };

    const changeHandler = () => {

    };

    return (
        <div>
            <Dialog
                disableBackdropClick
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
            >
                <DialogTitle
                    id="alert-dialog-title">Configure {hop.serviceContracts[pos].serviceMetaData.serviceName}</DialogTitle>

                <DialogContent style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            {extract(properties).map((obj, index) => {
                                let keys = Object.keys(obj);
                                let values = Object.values(obj);

                                return (
                                    <TextField
                                        style={{
                                            minWidth: "300px"
                                        }}
                                        key={index}
                                        label={keys[0]}
                                        type={values[0].type === "integer" ? "number" : values[0].type === "string" ? "text" : "boolean"}
                                        name={keys[0]}
                                        required={values[0].required}
                                        onChange={changeHandler}/>
                                )
                            })}

                        </FormControl>


                        <DialogActions>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                            <Button onClick={handleCancel} color="primary" autoFocus>
                                Cancel
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </div>
    )
};

export default ConfigService