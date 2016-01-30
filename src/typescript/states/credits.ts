// <reference path="../../../tsDefinitions/phaser.d.ts" />
module PhaserSkeleton.States {

    export class Credits extends Phaser.State {

        create() {
            console.log('Credits');

            var text = this.game.add.text(
                this.game.world.centerX,
                this.game.world.centerY,
                " Press ESC key to return to Menu.",
                {
                    font: "18px Arial",
                    fill: "#fff",
                    align: "center"
                });
            text.anchor.set(0.5);
        }

        update() {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {
                this.showMenu();
            }
        }

        showMenu() {
            this.game.state.start('Menu');
        }

    }

}