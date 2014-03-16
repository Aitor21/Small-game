(function()
{
  'use strict';
  function Menu()
  {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype =
  {
    create: function ()
    {
      var x = this.game.width / 2, y = this.game.height / 2;
      this.background = this.game.add.tileSprite(0, 0, 1080, 1000, 'background');
      this.titleTxt = this.add.bitmapText(x, 100, 'Small Game', {font: '72px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);
      this.startButton = this.add.button(this.world.centerX, 300, 'abc', function(){this.game.state.start('game');}, this, 1, 0);
      this.startButton.anchor.setTo(0.5, 0.5);

      this.input.onDown.add(this.onDown, this);
    },

    update: function ()
    {
      this.background.tilePosition.y -= 1;
    },

    onDown: function ()
    {
      this.game.state.start('game');
    }
  };

  window['juego-1'] = window['juego-1'] || {};
  window['juego-1'].Menu = Menu;

}());
