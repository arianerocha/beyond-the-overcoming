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
                '\"Papai! Papai!? O que aconteceu?\"',
                '\"Calma, filho. Vai ficar tudo bem...\"',
                '\"Existem possibilidades, seu filho pode ter uma vida normal.\"',
                '\"Respire fundo, filho. Tudo vai dar certo, nós somos uma família!\"',
                // Style 2
                'As vezes é preciso entender que as coisas mudam...',
                'Nossas vidas e nossa rotina.',
                'Porém aquilo que realmente importa, isto permanece...',
                'Mesmo que em alguns momentos',
                'Não seja possível compreender...',
                'Aquilo que nos torna único ficará sempre guardado...',
                'Em nosso coração.',
                'É preciso encarar cada novo desafio...',
                'Cada novo obstáculo...',
                'E criar um novo ritual...',
                'Diário',
                'Constante',
                'Em busca da felicidade...',
                'Através da superação.'
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
                if (i == textGroup.length) {
                    tween.onComplete.add(function() {
                        console.log('Load level');
                    }, this);
                }
                if (i > 0) {
                    this.tweenChain[i - 1].chain(tween);
                }
                this.tweenChain.push(tween);
            }

            this.game.time.events.add(2000, this.start, this);
        }

        start() {
            this.tweenChain[0].start();
        }

    }

}