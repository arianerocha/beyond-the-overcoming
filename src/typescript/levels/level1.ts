// <reference path="../../../tsDefinitions/phaser.d.ts" />
module PhaserSkeleton.States {

    export class LevelInitial extends Phaser.State {

		background: Phaser.Sprite;
		// map: Phaser.Tilemap;
        // music: Phaser.Sound;
        player: Player

        create() {
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(0, 0, 'level1');
			// this.music = this.add.audio('musicLevel1', 1, false);
            // this.music.play();
			console.log('Player');
			
            this.player = new Player(this.game, 32, 32);
            this.game.physics.arcade.enable(this.player);

            console.log(this.player);
        }

    }

}