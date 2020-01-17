import React, {useState} from "react";
import SockJsClient from "react-stomp";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./chat.styles.scss";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "155px",
            height: "36px"
        }
    },
    form: {
        "& > *": {
            margin: theme.spacing(1),
            display: "flex",
            width: "500px"
        }
    }
}));

const WebSocket = () => {
    const classes = useStyles();

    const [msg, setMsg] = useState({from: "", text: ""});
    const [receivedmsg, setReceivedMsg] = useState([]);

    let clientRef;

    const sendMsg = () => {
        clientRef.sendMessage(
            "/app/chat",
            JSON.stringify({from: msg.from, text: msg.text})
        );
    };

    const changeHandler = event => {
        setMsg({...msg, [event.target.name]: event.target.value});
    };

    const clearContent = () => {
        setReceivedMsg([]);
    };

    return (
        <Container>
            <SockJsClient
                url="http://localhost:8080/ws"
                topics={["/topic/messages"]}
                onMessage={msg => {
                    console.log(msg);

                    setReceivedMsg([...receivedmsg, msg]);
                }}
                ref={client => {
                    clientRef = client;
                }}
            />
            <div className="chatboxparent">
                <div className="chatbox">
                    {receivedmsg.map((msg, index) => {
                        return (
                            <Typography
                                key={index}
                            >{`from: ${msg.from}, text: ${msg.text}, time: ${msg.time}`}</Typography>
                        );
                    })}
                </div>
            </div>
            <div className="myForm">
                <form className={classes.form}>
                    <TextField
                        id="outlined-textarea"
                        label="User"
                        placeholder="User"
                        multiline
                        name="from"
                        variant="outlined"
                        onChange={event => changeHandler(event)}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        variant="outlined"
                        label="Message to send"
                        name="text"
                        multiline
                        rows="4"
                        onChange={event => changeHandler(event)}
                    />
                </form>

                <div className={classes.root}>
                    <Button variant="contained" color="primary" onClick={() => sendMsg()}>
                        send
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => clearContent()}
                    >
                        clear
                    </Button>
                </div>
            </div>
        </Container>
  );
};

export default WebSocket;
