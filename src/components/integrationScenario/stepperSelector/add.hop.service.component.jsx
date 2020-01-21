import React, {useState, useEffect} from "react";
import {HopTypes} from "../hop.type";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HopServiceTable from "./add.hop.service.table.component";

const AddHopService = ({open, cancel, hop, updateHopService}) => {


    const handleCancel = () => {
        cancel()
    };


    return (
        <div>
            <Dialog
                disableBackdropClick
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
            >
                <DialogTitle id="alert-dialog-title">Add Hop Services </DialogTitle>
                <form>
                    <DialogContent>
                        <HopServiceTable hop={hop}
                                         hopTypes={HopTypes}
                                         updateHopService={updateHopService}
                                         close={handleCancel}/>
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
};

export default AddHopService;