// <reference path="../../../tsDefinitions/phaser.d.ts" />
module PhaserSkeleton.States {

	export class Bootstrap extends Phaser.State {

		preload() {
			this.load.image('preloadBg', 'assets/ui/preloadBg.png');
			this.load.image('preloadBar', 'assets/ui/preloadBar.png');
		}

		create() {
			this.input.maxPointers = 1;
			this.stage.disableVisibilityChange = true;
			if (this.game.device.desktop) {
				// Desktop specific settings
			} else {
				// Mobile specific settings
			}

			this.game.state.start('Preloader', true, false);
		}

	}	

}