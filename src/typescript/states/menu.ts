// <reference path="../../../tsDefinitions/phaser.d.ts" />
module PhaserSkeleton.States {

    export class Menu extends Phaser.State {

        create() {
            console.log('Menu');

            var text = this.game.add.text(
                this.game.world.centerX,
                this.game.world.centerY,
                " Press S key to start the game or C to credits.",
                {
                    font: "18px Arial",
                    fill: "#fff",
                    align: "center"
                });
            text.anchor.set(0.5);
        }

        update() {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                this.startGame();
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.C)) {
                this.showCredits();
            }
        }

        startGame() {
            this.game.state.start('Intro')
        }

        showCredits() {
            this.game.state.start('Credits');
        }

    }

}