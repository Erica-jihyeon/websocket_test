import './App.css';
import { useEffect, useState } from 'react';
import io from "socket.io-client";


function App() {
  const [socket, setSocket] = useState("");
  const [name, setName] = useState("");
  const [notify, setNotify] = useState();
  const [status, setStatus] = useState({});
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [to, setTo] = useState("");

  const clear = function () {
    setMessages([]);
  };

  // This app makes a websocket connection immediately
  useEffect(() => {
    // Connect to server
    const socket = io("http://localhost:8080");
    setSocket(socket);
    
    socket.on('message', msg => {
      setText(prev => [`${msg.text}`, ...prev]);
    });

    

    return () => socket.disconnect();
  }, []);

  const onTextChange = function(event) {
    setText(event.target.value);
  };

  const send = () => {
    socket && text && socket.emit('message', text );
  }
  console.log(text);


  return (
    <div className="App">
      <h1>Web Sockets React</h1>
      <ul id="messages"></ul>
      <form action="">
        <input onChange={onTextChange} id="m" />
        <button onClick={send}>Send</button>
      </form>

    </div >
  );
}

export default App;
