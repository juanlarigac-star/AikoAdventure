import Phaser from 'phaser';
import BootScene from './scenes/BootScene';   // <-- Nueva importación
import GameScene from './scenes/GameScene';   // <-- Nueva importación

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1a1a2e',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: true // ¡Déjalo en true! Verás las hitboxes verdes
        }
    },
    // El orden importa: BootScene carga los assets, GameScene los usa
    scene: [BootScene, GameScene] 
};

const game = new Phaser.Game(config);