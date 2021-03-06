import React, {useState, useEffect} from "react";
import {Hops} from '../hops'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MyTable from "./table.component";

const AddHop = ({open, cancel, selectedHop, currentHops}) => {


    // const [collection, setCollection] = useState(() => {
    //
    //     if (currentHops.length <= 0) {
    //         return Hops
    //     } else {
    //         return []
    //     }
    // });

    const handleCancel = () => {
        cancel()
    };


    const triggerFiltering = () => {
        let final = [];
        console.log("currentHops", currentHops);
        currentHops.map(currentHop => {
            let temp
            if (final.length <= 0) {
                temp = Hops.filter(hop => hop.hopType !== currentHop.hopType);
                final = [...temp]

            } else {
                temp = final.filter(hop => hop.hopType !== currentHop.hopType);
                final = [...temp]

            }
            return null;
        });
        console.log("final", final);
        return final
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
                // PaperProps={{
                //     style: {
                //         width: '750px',
                //     }
                // }}
            >
                <DialogTitle id="alert-dialog-title">{"Select Hop"}</DialogTitle>
                <form>
                    <DialogContent>
                        <MyTable collection={currentHops.length > 0 ? triggerFiltering() : Hops}
                                 selectedHop={selectedHop}
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

export default AddHop;