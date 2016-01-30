// <reference path="../../../tsDefinitions/phaser.d.ts" />
module PhaserSkeleton.States {

    export class Intro extends Phaser.State {

        tweenChain: Array<Phaser.Tween> = [];

        protected createText(text: string, x: number, y: number, style: any) {
            var _text = this.game.add.text(
                x, y, text, style
            );
            _text.anchor.set(0.5);
            _text.alpha = 0;

            return _text;
        }

        create() {

            var music = this.game.add.audio('intro');
            music.play();

            var textStyle1: any = {font: '18px Arial', fill: '#fff', align: 'center'};
            var textStyle2: any = {font: '20px Arial', fill: '#fff', align: 'center'};
            var textGroup: string[] = [
                // Style 1
                '\"Papai! Mamãe!? O que aconteceu?\"',
                '\"Calma, filho. Vai ficar tudo bem...\"',
                '\"Existem possibilidades, seu filho pode ter uma vida normal.\"',
                '\"Tudo vai dar certo. Nós somos uma família!\"',
                // Style 2
                'As vezes é preciso entender que as coisas mudam...',
                'Nossas vidas e nossa rotina.',
                'Mesmo que em alguns momentos\nnão seja possível compreender...',
                'Aquilo que nos torna único ficará sempre guardado...',
                'Em nosso coração.',
                'É preciso encarar cada desafio... \nCada novo obstáculo...',
                'E criar um novo ritual...',
                'Diário e constante',
                'Que nos ajude a superar os momentos de dificuldade...',
                'Sempre em busca da felicidade...',
                'Além da superação.'
            ];

            for (var i = 0; i < textGroup.length; i++) {
                var text = this.createText(
                    textGroup[i],
                    this.game.world.centerX,
                    this.game.world.centerY,
                    (i <= 3) ? textStyle1 : textStyle2
                );

                var tween = this.game.add.tween(text)
                                        .to({alpha: 1}, 2000, Phaser.Easing.Linear.None, false)
                                        .to({alpha: 0}, (i == 3 ? 4000 : 3000), Phaser.Easing.Linear.None, false);
                if (i > 0) {
                    this.tweenChain[i - 1].chain(tween);
                }
                this.tweenChain.push(tween);
            }

            this.game.time.events.add(2000, this.start, this);
        }

        start() {
            this.tweenChain[this.tweenChain.length-1].onComplete.add(function() {
                var logo = this.game.add.sprite(
                    this.game.world.centerX,
                    200,
                    'logo'
                );
                logo.alpha = 0;
                logo.anchor.set(0.5);

                var tween = this.game.add.tween(logo).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true);
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
                    this.startGame();
                }
            }, this);
            this.tweenChain[0].start();
        }

        startGame() {
            this.game.state.start('level');
        }

    }

}