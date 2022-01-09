Introduction:
* SignalR will add realtime functionality to your app.
* learning goals:

1. User and setup SignalR in the API and the client.
2. implement online presence (user could know if other user are online or not)
3. implement live chat between users (they could see their messages live by connecting our SignalR hub)

what is SignalR?
* open source library for realtime communication.

* what SignalR good for?
    1. dashboard anf monitoring apps for displaying realtime data
    2. Collaborative app (like multiple users editing a document/spreadsheet/whiteboard)
    3. apps require notification
    4. chat apps

Features:
1. handling connection and disconnection management automatically
    * when a client connect to a hub SignalR handle that connection for us
    * part of this handling is client reconnecting if something caused a disconnection (network/server temperate issue)
    * SignalR can to send all connected clients a message simultaneously/ specifically to a client or group of clients (we'll be using groups)
    * this communication happens in 3 ways:
        1. WebSockets: a protocol (like http is a protocol) that give us two way communication  
        2. Server Sent Events: (this uses http), the browser will try to subscribe to an http stream (https://www.pubnub.com/learn/glossary/what-is-http-streaming/), where the server will send these events
        3. Long Polling: last resort... the client will try to get updated data every second or two, if the server doesn't respond in time, the client will try again 
    * SignalR will select the best way that the client supports, (this will be WebSockets, but it will fall back to other methods if the client doesn't support them)
    * SignalR offer client side npm package

scenario:
say Lisa and Todd are connected to the SignalR hub:
1. Bob connects to the signalR hub
2. the Hub notifies all connected users that Bob has connected (the hub knows who is connected, this is not REST)
3. Presence updated on all connected browsers








