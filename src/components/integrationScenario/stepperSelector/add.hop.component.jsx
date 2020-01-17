import React, {useState} from "react";
import {Hops} from '../hops'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MyTable from "./table.component";

const AddHop = ({open, cancel, selectedHop}) => {

    const handleCancel = () => {
        cancel()
    }

    return (
        <div>
            <Dialog
                disableBackdropClick
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Select Hop"}</DialogTitle>
                <form>
                    <DialogContent>
                        <MyTable collection={Hops} selectedHop={selectedHop} close={handleCancel}/>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleCancel} color="primary" autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>

                </form>
            </Dialog>
        </div>
    )
}

export default AddHop;