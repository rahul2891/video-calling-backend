This project is a peer-to-peer video calling app using WebRTC for media transmission and Socket.IO for signaling (user connection/disconnection, room creation, etc.).

🧰 Tech Stack:
Frontend: React (with Context API, React Router)

Backend: Node.js + Express + Socket.IO

Signaling: Socket.IO

Media: WebRTC (user.call(peerId, stream) indicates PeerJS or similar is used)

Routing: react-router-dom

Room Management: Custom logic in backend (roomHandler.ts)

I built a video call app using WebRTC for real-time peer-to-peer media transmission and Socket.IO for signaling. When a user joins a room, the backend (Node + Express + Socket.IO) manages the room membership. On the frontend, I use React with Context API to manage socket state. When a user joins, the server emits the list of participants and notifies others. WebRTC calls are then established between peers, and video streams are shown using the <video> element. The app supports dynamic joining and leaving of users in real-time.
