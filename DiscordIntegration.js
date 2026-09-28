// const socket = new WebSocket("wss://api.lanyard.rest/socket");

// socket.onopen = () => {
//   socket.send(JSON.stringify({
//     op: 2,
//     d: {
//       subscribe_to_id: "311600502062448643"
//     }
//   }));
// };

// socket.onmessage = (event) => {
//   const data = JSON.parse(event.data);
  
//   // Opcode 0 is an event dispatch (initial state or presence update)
//   if (data.op === 0) {
//     console.log("Presence data:", data.d);
//   }
// };