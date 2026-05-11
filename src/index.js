import Phaser from 'phaser';
import SandboxScene from './scenes/SandboxScene.js'; // <-- Importa tu escena

const config = {
    type: Phaser.AUTO,
    width: 800, // O el ancho que tenga tu proyecto
    height: 600, // O el alto que tenga tu proyecto
    backgroundColor: '#1a1a2e', // Un fondo oscuro para que resalte el azul
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 }, // Gravedad del mundo
            debug: false // Cambia a true si quieres ver las hitboxes
        }
    },
    scene: [SandboxScene] // <-- Carga tu escena aquí
};

const game = new Phaser.Game(config);