(function() {
  'use strict';

  function Game() {
    this.player = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.player = this.add.sprite(x - 400, y - 900, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;
      var LEFTKey;
      var RIGHTKey;

      if (this.input.keyboard.isDown(Phaser.Keyboard.A) && this.player.x>10)
      {
      this.player.x -=9,2;
      }
      else if (this.input.keyboard.isDown(Phaser.Keyboard.D) &&this.player.x<1018)
      {
      this.player.x +=9,2;
      }

      x = this.input.position.x;
      y = this.input.position.y;
      cx = this.world.centerX;
      cy = this.world.centerY;

      angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      this.player.angle = angle;

      dx = x - cx;
      dy = y - cy;
      scale = Math.sqrt(dx * dx + dy * dy) / 100;

      this.player.scale.x = scale * 0.6;
      this.player.scale.y = scale * 0.6;
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['juego-1'] = window['juego-1'] || {};
  window['juego-1'].Game = Game;

}());
