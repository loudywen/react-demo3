import React, { useState } from "react";
import SockJsClient from "react-stomp";

const WebSocket = () => {
  const [msg, setMsg] = useState({ from: "", text: "" });
  const [receivedmsg, setReceivedMsg] = useState([]);

  let clientRef;

  const sendMsg = () => {
    clientRef.sendMessage(
      "/app/chat",
      JSON.stringify({ from: msg.from, text: msg.text })
    );
  };

  const changeHandler = event => {
    setMsg({ ...msg, [event.target.name]: event.target.value });
  };
  
  const clearContent = () => {
    setReceivedMsg([])
  }
  return (
    <div>
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
      <br />
      <input
        type="text"
        name="from"
        placeholder="from"
        onChange={event => changeHandler(event)}
      />
      <br />
      <input
        type="text"
        name="text"
        placeholder="text"
        onChange={event => changeHandler(event)}
      />

      <br />
      <button onClick={() => sendMsg()}>click me to send</button>
      <button onClick={() => clearContent()}>clear content</button>
      <br />
      <div>
        {receivedmsg.map((msg, index) => {
          return (
            <p
              key={index}
            >{`from: ${msg.from}, text: ${msg.text}, time: ${msg.time}`}</p>
          );
        })}
      </div>
    </div>
  );
};

export default WebSocket;
