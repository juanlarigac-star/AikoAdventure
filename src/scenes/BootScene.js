

export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // 1. Mostramos un texto en pantalla mientras "carga"
        this.add.text(20, 20, 'Cargando assets placeholder...', { font: '16px Courier', fill: '#ffffff' });

        // 2. Generamos los placeholders usando Canvas gráfico

        // Aiko (Cuadrado azul - 32x48)
        const aikoGfx = this.make.graphics({ x: 0, y: 0, add: false });
        aikoGfx.fillStyle(0x3366ff, 1); // Azul
        aikoGfx.fillRect(0, 0, 32, 48);
        aikoGfx.generateTexture('aiko_placeholder', 32, 48);
        aikoGfx.destroy();

        // Suelo (Cuadrado gris - 800x40)
        const floorGfx = this.make.graphics({ x: 0, y: 0, add: false });
        floorGfx.fillStyle(0x666666, 1); // Gris
        floorGfx.fillRect(0, 0, 800, 40);
        floorGfx.generateTexture('floor_placeholder', 800, 40);
        floorGfx.destroy();

        // Cofre (Cuadrado amarillo - 32x32) -> ¡Lo necesitarás muy pronto!
        const chestGfx = this.make.graphics({ x: 0, y: 0, add: false });
        chestGfx.fillStyle(0xffcc00, 1); // Amarillo
        chestGfx.fillRect(0, 0, 32, 32);
        chestGfx.generateTexture('chest_placeholder', 32, 32);
        chestGfx.destroy();
    }

    create() {
        // Una vez que todos los placeholders están generados en memoria,
        // arrancamos la escena principal del juego.
        this.scene.start('GameScene');
    }
}