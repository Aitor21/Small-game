(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.titleTxt = this.add.bitmapText(x, 100, 'Small Game', {font: '72px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);
      this.startButton = this.add.button(this.world.centerX, 300, 'startButton', function(){this.game.state.start('game');}, this, 2, 1, 0);
      this.startButton.anchor.setTo(0.5, 0.5);


      /*this.titleTxt = this.add.bitmapText(x, y, 'Example Game', {font: '16px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'START', {font: '12px minecraftia', align: 'center'});
      this.startTxt.anchor.setTo(0.5, 0.5);*/

      this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['juego-1'] = window['juego-1'] || {};
  window['juego-1'].Menu = Menu;

}());
