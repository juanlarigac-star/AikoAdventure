// src/scenes/GameScene.js

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Añadimos el suelo usando el placeholder que cargó BootScene
        this.floor = this.physics.add.staticImage(400, 580, 'floor_placeholder');

        // Añadimos a Aiko
        this.player = this.physics.add.sprite(400, 300, 'aiko_placeholder');
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.1);

        // Colisión entre Aiko y el suelo
        this.physics.add.collider(this.player, this.floor);

        // Configurar los controles
        this.cursors = this.input.keyboard.createCursorKeys();
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (!this.player) return;

        const speed = 200;

        // Movimiento Horizontal
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
        } else {
            this.player.setVelocityX(0);
        }

        // Movimiento Vertical (Salto con JustDown para evitar bunny hop)
        if (Phaser.Input.Keyboard.JustDown(this.spaceKey) && this.player.body.touching.down) {
            this.player.setVelocityY(-350);
        }
    }
}