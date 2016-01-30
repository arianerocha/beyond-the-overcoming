// <reference path="../../../tsDefinitions/phaser.d.ts" />
module PhaserSkeleton {

    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'littleDude', 0);
            this.anchor.setTo(0.5, 0);
            // this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            game.add.existing(this);
        }
        update() {
            this.body.velocity.x = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {

                this.body.velocity.x = -150;
                this.animations.play('walk');

                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {

                this.body.velocity.x = 150;
                this.animations.play('walk');

                if (this.scale.x == -1) {
                    this.scale.x = 1;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) || this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
				this.body.velocity.y = 50;
                this.body.velocity.x = 0;
                this.animations.play('walk');

                if (this.scale.y == -1) {
                    this.scale.y = 1;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || this.game.input.keyboard.isDown(Phaser.Keyboard.X)) {
                this.body.velocity.y = 50;
				this.body.velocity.x = 0;
                this.animations.play('walk');

                if (this.scale.y == -1) {
                    this.scale.y = 0;
                }
            }
            else {
                this.animations.frame = 0;
            }
		}

	}
}