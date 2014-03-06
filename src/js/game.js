(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.bg;
    this.map;
    this.layer;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.player = this.add.sprite(x - 400, y - 900, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      this.input.onDown.add(this.onInputDown, this);

/////////////////////
      if (this.input.keyboard.isDown(Phaser.Keyboard.A) && this.player.x>10)
      {
      this.player.x -=9,2;
      }
      else if (this.input.keyboard.isDown(Phaser.Keyboard.D) &&this.player.x<1000)
      {
      this.player.x +=9,2;       
      }
      this.player.y >10;
      this.player.y <200;

    this.stage.backgroundColor = '#000000';

      this.physics.gravity.y = 10;
      this.physics.setBoundsToWorld();
      this.player.body.bounce.y = 0.2;
      //this.player.body.minVelocity.y += 5;
      this.player.body.collideWorldBounds = true;
      this.player.body.setRectangle(16, 32, 8, 16);

    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;
      var LEFTKey;
      var RIGHTKey;
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['juego-1'] = window['juego-1'] || {};
  window['juego-1'].Game = Game;

}());