// <reference path="../../../tsDefinitions/phaser.d.ts" />
module PhaserSkeleton.States {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;
        background: Phaser.TileSprite;

        preload() {
            this.background = this.add.tileSprite(0, 0, 800, 600, 'preloadBg');
            this.preloadBar = this.add.sprite(250, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            this.loadGameAssets();
        }

        loadGameAssets() {
            this.load.image('bolt', 'assets/sprites/bolt.png');
            this.load.image('greenSnail', 'assets/sprites/green-snail.png');
            this.load.image('player', 'assets/sprites/player.png');
            this.load.image('redSnail', 'assets/sprites/red-snail.png');
            this.load.image('logo', 'assets/ui/logo.png');

            // @todo convert audios to ogg
            this.load.audio('intro', ['assets/musics/intro.mp3']);
        }

        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        startMainMenu() {
            this.game.state.start('Menu', true, false);
        }

    }

}