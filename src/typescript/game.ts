// <reference path="../../tsDefinitions/phaser.d.ts" />
// <reference path="states/bootstrap.ts" />
// <reference path="states/preloader.ts" />
module PhaserSkeleton {

    export class Game extends Phaser.Game {

        constructor() {
            super(
                800,
                600,
                Phaser.AUTO,
                'game'
            );

            this.state.add('Bootstrap', States.Bootstrap, false);
            this.state.add('Preloader', States.Preloader, false);
            this.state.add('Menu', States.Menu, false);

            this.state.start('Bootstrap');
        }

    }

}