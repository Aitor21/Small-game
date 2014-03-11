(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.bg;
    this.map;
    this.layer;
    this.wall;
  }

  Game.prototype = {

    create: function ()
    {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.player = this.add.sprite(x - 400, y - 500, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      this.input.onDown.add(this.onInputDown, this);
      this.stage.backgroundColor = '#000000';
      this.physics.gravity.y = 700;
      this.player.body.bounce.setTo (0.1,0.98);
      this.player.body.collideWorldBounds = true;

      this.wall = this.add.group();
      this.wall.createMultiple(5, 'wall');
      this.wall.setAll('outOfBoundsKill', true);



    },

    render: function ()
    {
      if (this.player.debug)
      {
        this.debug.renderPhysicsBody(player.body);
        this.debug.renderBodyInfo(player, 16, 24);
      }
    },

    update: function ()
    {
      var LEFTKey;
      var RIGHTKey;
      this.physics.collide(this.player, this.layer, this.wall);

    if (this.input.keyboard.isDown(Phaser.Keyboard.A))
    {
      this.player.x -=12,2 /*this.player.body.accelerate -= 200*/;
    };
    if (this.input.keyboard.isDown(Phaser.Keyboard.D))
    {
      this.player.x +=12,2 /*this.player.body.accelerate -= 200*/;
    }

    this.wallCheck = this.wall.getFirstExists(false);
    if (this.wallCheck)
    {
      this.wallCheck.reset(-0,1100);
      this.wallCheck.body.velocity.y = ((0.2 + Math.random())*-1999);
      //this.wallCheck.body.velocity.y = ((0.2 + Math.random())* 500);
      this.wallCheck.body.velocity.x = ((0.2 +Math.random())* 500);
      //this.wallCheck.body.velocity.x = (0.1);
    }

    },

    onInputDown: function ()
    {
      this.game.state.start('menu');
    }
  };

  window['juego-1'] = window['juego-1'] || {};
  window['juego-1'].Game = Game;

}());