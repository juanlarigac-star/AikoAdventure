// src/scenes/SandboxScene.js

export default class SandboxScene extends Phaser.Scene {
    constructor() {
        super({ key: 'SandboxScene' });
    }

    preload() {
        //Generamos un sprite cuadrado azul desde código para no depender de assets externos aún
        //Ancho: 32px, Alto: 48px (medidas típicas para un personaje)
        const graphics = this.make.graphics({ x: 0, y: 0, add: false });
        graphics.fillStyle(0x0000ff, 1); // Color azul
        graphics.fillRect(0, 0, 32, 48);
        graphics.generateTexture('aiko_placeholder', 32, 48);
        graphics.destroy();
    }

    create() {
        // 1. Añadimos el suelo para que Aiko no caiga al vacío
        // Creamos un cuadrado verde para el suelo
        const floorGraphics = this.make.graphics({ x: 0, y: 0, add: false });
        floorGraphics.fillStyle(0x444444, 1); // Color gris
        floorGraphics.fillRect(0, 0, this.scale.width, 40);
        floorGraphics.generateTexture('floor_placeholder', this.scale.width, 40);
        floorGraphics.destroy();

        // Colocamos el suelo en la parte inferior y le damos físicas estáticas (no se mueve)
        this.floor = this.physics.add.staticImage(this.scale.width / 2, this.scale.height - 20, 'floor_placeholder');


        // 2. Creamos a Aiko (El cuadrado azul) como un sprite con físicas
        // Lo colocamos en el centro superior de la pantalla
        this.player = this.physics.add.sprite(this.scale.width / 2, 100, 'aiko_placeholder');

        // Configuramos las físicas del jugador
        this.player.setCollideWorldBounds(true); // No puede salir de los bordes de la pantalla
        this.player.setBounce(0.1);              // Un pequeño rebote al caer

        // 3. Colisión entre Aiko y el suelo
        this.physics.add.collider(this.player, this.floor);

        // 4. Configurar los controles (teclado)
        this.cursors = this.input.keyboard.createCursorKeys();
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(time, delta) {
        // Si el jugador no existe todavía, salimos del update
        if (!this.player) return;

        // Movimiento Horizontal
        const speed = 200; // Velocidad de movimiento

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
        } else {
            // Si no presionamos nada, frena
            this.player.setVelocityX(0);
        }

        // Movimiento Vertical (Salto)
        // Solo puede saltar si está tocando el suelo (touching.down)
        if (Phaser.Input.Keyboard.JustDown(this.spaceKey) && this.player.body.touching.down) {
            this.player.setVelocityY(-350); // Fuerza del salto
        }
    }
}




