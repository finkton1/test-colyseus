import Phaser from "phaser";
import * as Colyseus from "colyseus.js";

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super("hello-world");
  }

  preload() {
    this.load.image("colyseus", "images/colyseus.png");
  }

  create() {
    let img = this.add.image(0, 0, "colyseus");
    img.setOrigin(0, 0);
    let client = new Colyseus.Client("ws://10.0.2.2:2567");
    client
      .joinOrCreate("my_room", {
        /* options */
      })
      .then((room) => {
        console.log("joined successful", room);
      })
      .catch((e) => {
        console.error("join error", e);
      });
  }
}
