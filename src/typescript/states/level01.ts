// <reference path="../../../tsDefinitions/phaser.d.ts" />
module PhaserSkeleton.States {

    export class Level01 extends Phaser.State {

        create() {
            console.log('Level 01 loaded.');

            var map = this.game.add.tilemap('level01');
            map.addTilesetImage('grass', 'grass');
            map.addTilesetImage('watergrass', 'watergrass');

            var layer = map.createLayer('Floor');
            layer.debug = true;
            layer.resizeWorld();
        }

    }

}