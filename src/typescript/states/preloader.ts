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
			// Load your game loadGameAssets
			// this.load.image('', '');
		}

		create() {
			var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
			tween.onComplete.add(this.startMainMenu, this);
		}

		startMainMenu() {
			this.game.state.start('MainMenu', true, false);
		}

	}

}