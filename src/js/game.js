(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.enemy;
    this.bg;
    this.map;
    this.layer;
    this.wall;
    this.aceleracion;
  }

  Game.prototype = {

    create: function ()
    {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.background = this.game.add.tileSprite(0, 0, 1080, 1000, 'background');

      this.player = this.add.sprite(x + 480, y + 250, 'player');
      this.player.anchor.setTo(0.5, 0.
      this.input.onDown.add(this.onInputDown, this);
      this.stage.backgroundColor = '#000000';
      //this.physics.gravity.y = 200;
      //this.player.body.bounce.setTo (0.25,-0.5);
      this.player.body.collideWorldBounds = true;
      this.player.body.linearDamping = 0.2;
      this.wall = this.add.sprite('enemy'); // aqui creo que es donde da el error de load la inagen. 
      this.wall = this.add.group();
      this.wall.createMultiple(13, 'enemy');
      this.wall.setAll('outOfBoundsKill', true);

    },

    render: function ()
    {
      if (this.player.debug)
      {
        this.debug.renderPhysicsBody(this.player.body);
        this.debug.renderBodyInfo(this.player, 80, 78);
      }
    },

    update: function ()
    {
      var LEFTKey;
      var RIGHTKey;
      this.physics.collide(this.player, this.wall);
      this.aceleracion -= 0.05 * this.time.elapsed;

    if (this.input.keyboard.isDown(Phaser.Keyboard.A))
    {
      this.player.body.velocity.x -= 2.4 * this.time.elapsed;
      //this.player.body.x -=8,2;
      //this.player.body.acceleracion.x = -2000
    };
    if (this.input.keyboard.isDown(Phaser.Keyboard.D))
    {
      this.player.body.velocity.x += 2.4 * this.time.elapsed;
      //this.player.body.x +=8,2;
      //this.player.body.acceleracion.x = +20;
    }
    this.player.body.velocity.y += 0.45 * this.time.elapsed;

    this.wallCheck = this.wall.getFirstExists(false);
    if (this.wallCheck)
    {
      this.wallCheck.reset(Math.random()*1020, 1250);
      this.wallCheck.body.velocity.y = ((0.5 + Math.random())*-620);
    }

    this.physics.collide(this.player, this.wall);
    this.physics.overlap(this.player, this.wall, function(player,wall) { wall.kill(), this.player.body.velocity.y -= 20  *this.time.elapsed;}, null, this);
    this.physics.overlap(this.wall, this.wall, function(wall) { wall.kill();}, null, this);

    this.background.tilePosition.y -= 3;
    },

    onInputDown: function ()
    {
      this.game.state.start('menu');
    }
  };

  window['juego-1'] = window['juego-1'] || {};
  window['juego-1'].Game = Game;

}());