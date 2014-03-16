(function()
{
  'use strict';

   function Endgame()
   {
    this.titleTxt = null;
    this.startTxt = null;
   }

  Endgame.prototype =
  {

    create: function ()
    {
      var x = this.game.width / 2, y = this.game.height / 2;
      this.background = this.game.add.tileSprite(0, 0, 1080, 1000, 'background');
      this.titleTxt = this.add.bitmapText(x, 200, 'Game Over', {font: '16px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);
      this.instructionsText = this.add.bitmapText (375, 250, 'Pulsa ENTER para volver a jugar', {font: '16px minecraftia', align: 'center'});
    },

    update: function ()
    {
		if (this.input.keyboard.isDown(Phaser.Keyboard.ENTER))
		{
			this.game.state.start('game');
		}
    this.background.tilePosition.y -= 1;
    },
  };

  window['juego-1'] = window['juego-1'] || {};
  window['juego-1'].Endgame = Endgame;

}());