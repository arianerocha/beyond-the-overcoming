// <reference path="../../../tsDefinitions/phaser.d.ts" />
module PhaserSkeleton.States {

    export class Level extends Phaser.State {

		background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Players.Player

		create() {
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
		}
		initLevels() { 
			//initializes the level data.
		}
		showLevel(level) { 
			// prints the level data on the screen.
		}
		updateCounter() { }
		managePause() { }
		manageAudio() { }
		update() { }
		moveActor() { }
		monsterCollision() {
		}
		handleOrientation(e) { }
		finishLevel() { }

    }

}