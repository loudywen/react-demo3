import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const ConfigService = ({open, cancel, hop, configService, pos}) => {


    const handleCancel = () => {
        cancel()
    };
    console.log(pos)

    console.log(hop.serviceContracts[pos])
    return (
        <div>
            <Dialog
                disableBackdropClick
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
                // PaperProps={{
                //     style: {
                //         width: '750px',
                //     }
                // }}
            >
                <DialogTitle id="alert-dialog-title">{"Select Hop"}</DialogTitle>
                <form>
                    <DialogContent>
                        Config serivce
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

export default ConfigService