import React from "react";
import "./testdialog.styles.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    //color: "yellow",
    backgroundColor: "rgb(10,0,0,0.5)"
  },
  dialogContent: {
    textAlign: "center"
  },
  text: {
    minWidth: "300px"
  },
  title: {
    textAlign: "center"
  }
};

const TestDialog = props => {
  const { onUpdate, open, selectedValue, classes } = props;

  console.log(selectedValue);
  // const classes = styles;
  const handleSubmit = event => {
    event.preventDefault();
    console.log("handlesubmit triggered");
    onUpdate();
  };

  return (
    <div>
      <Dialog
        disableBackdropClick
        open={open}
        aria-labelledby="form-dialog-title"
        maxWidth="lg"
        PaperProps={{
          style: {
            minWidth: "450px"
          }
        }}
        BackdropProps={{
          classes: {
            root: classes.root
          }
        }}
      >
        <DialogTitle classes={{ root: classes.title }} id="form-dialog-title">
          Update Country Code
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onUpdate} color="primary">
            Cancel
          </Button>
          <Button onClick={onUpdate} color="primary">
            Update
          </Button>
        </DialogActions> */}
        <DialogContent
          classes={{
            root: classes.dialogContent
          }}
        >
          <FormControl onSubmit={handleSubmit}>
            <TextField
              disabled
              classes={{
                root: classes.text
              }}
              label="CountryCode"
              type="text"
              margin="dense"
              // variant="filled"
              defaultValue={selectedValue ? selectedValue.countryCode : ""}
            />

            <TextField
              // className="form-input"
              label="CountryCode Description"
              type="text"
              margin="dense"
              classes={{
                root: classes.text
              }}
              defaultValue={selectedValue ? selectedValue.countryCodeDesc : ""}
            />
            {/* <DialogActions>
              <Button onClick={onUpdate} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Update
              </Button>
            </DialogActions> */}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onUpdate} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(TestDialog);
