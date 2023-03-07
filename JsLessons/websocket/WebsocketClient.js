
const user = 'USR';
const addr = 'ws://localhost:8080/WsChat/chat'

const WebSocket = require('ws');    // Package required for Websocket in Node
const w = new WebSocket(addr);

const mess = {
    from: user,
    message: 'hello'
}

const onOpen = () => {
    console.log('Websocket opened');
    w.send(JSON.stringify(mess));
}

const onMessage = (evt) => {
    console.log(JSON.parse(evt.data));
    w.close();
}

const onClose = () => {
    console.log('Websocket closed');
}

w.onopen = () => onOpen();
w.onclose = () => onClose();
w.onmessage = (evt) => onMessage(evt);



