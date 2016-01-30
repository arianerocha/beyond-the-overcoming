// <reference path="../../../tsDefinitions/phaser.d.ts" />
module PhaserSkeleton.States {

    export class Intro extends Phaser.State {

        tweenChain: Array<Phaser.Tween> = [];
        textStyle1: any = { font: '18px Arial', fill: '#fff', align: 'center' };
        textStyle2: any = { font: '20px Arial', fill: '#fff', align: 'center' };
        music: Phaser.Sound;

        protected createText(text: string, x: number, y: number, style: any) {
            var _text = this.game.add.text(
                x, y, text, style
            );
            _text.anchor.set(0.5);
            _text.alpha = 0;

            return _text;
        }

        create() {
            this.music = this.game.add.audio('intro');
            this.music.play();

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
                'É preciso encarar cada novo desafio... \nCada novo obstáculo...',
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
                    (i <= 3) ? this.textStyle1 : this.textStyle2
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
            var textSkipIntro = " Press ENTER to skip the introduction. ";
            var text = this.game.add.text(200, 560, textSkipIntro, this.textStyle1);
            text.anchor.set(0.5);

        }
        update() {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
                this.tweenChain = [];
                this.music.stop();
                this.game.state.start('LevelInitial');
            }
        }
    }

}