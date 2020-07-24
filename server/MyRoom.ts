import { Room, Client } from "colyseus";

export class MyRoom extends Room {
  onCreate(options: any) {
    this.onMessage("type", (client, message) => {
      // handle "type" message
    });
  }

  onJoin(client: Client, options: any) {
    console.log("client joined the room - ", client.sessionId);
  }

  async onLeave(client: Client, consented: boolean) {
    console.log("Client has left - ", client.sessionId);
    // flag client as inactive for other users
    this.state.players[client.sessionId].connected = false;

    try {
      if (consented) {
        throw new Error("consented leave");
      }

      // allow disconnected client to reconnect into this room until 20 seconds
      await this.allowReconnection(client, 20);
      console.log("Client has rejoined - ", client.sessionId);
      // client returned! let's re-activate it.
      this.state.players[client.sessionId].connected = true;
    } catch (e) {
      // 20 seconds expired. let's remove the client.
      delete this.state.players[client.sessionId];
    }
  }

  onDispose() {}
}
