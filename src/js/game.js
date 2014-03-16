(function()
{
  'use strict';

  function Game()
  {
    this.player = null;
    this.enemy = null;
    this.bg = null;
    this.map = null;
    this.layer = null;
    this.wall = null;
    this.aceleracion = null;
    this.score = 0;
    this.scoreString = '';
    this.scoreText = null;
  }

  Game.prototype =
  {
    create: function ()
    {
      var x = this.game.width / 2, y = this.game.height / 2;
      this.background = this.game.add.tileSprite(0, 0, 1080, 1000, 'background');
      this.player = this.add.sprite(540,100, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      this.stage.backgroundColor = '#000000';
      this.player.body.linearDamping = 0.2;
      this.wall = this.add.sprite('enemy');
      this.wall = this.add.group();
      this.wall.createMultiple(/*0.2 + Math.random()**/12, 'enemy');
      this.wall.setAll('outOfBoundsKill', true);
      this.scoreString = 'Score : ';
      this.scoreText = this.add.text(10, 30, this.scoreString + this.score, { fontSize: '34px', fill: '#fff' });
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
    }
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
      this.wallCheck.reset(Math.random()*1020, 1100);
      this.wallCheck.body.velocity.y = ((0.5 + Math.random())*-620);
    }

    this.physics.collide(this.player, this.wall);
    this.physics.overlap(this.player, this.wall, function(player,wall) { wall.kill(); if(wall.kill()){this.score += 20; this.scoreText.content = this.scoreString + this.score;} this.player.body.velocity.y -= 20  *this.time.elapsed;}, null, this);
    this.physics.overlap(this.wall, this.wall, function(wall) { wall.kill();}, null, this);
    if(this.player.body.x < this.world.x)
    {
      this.player.kill();
      if(this.player.kill())
      {
      this.game.state.start('endgame');
      this.score=0;
      }
    }
    else if(this.player.body.x > 1080)
    {
      this.player.kill();
       if(this.player.kill())
       {
      this.game.state.start('endgame');
      this.score=0;
       }
    }

    if(this.player.body.y > 1000)
    {
      this.player.kill();
       if(this.player.kill())
       {
      this.game.state.start('endgame');
      this.score=0;
       }
    }

    if(this.player.body.y <= 0)
    {
      this.player.kill();
      if(this.player.kill())
      {
      this.game.state.start('endgame');
      this.score =0;
      }
    }

    this.background.tilePosition.y -= 3;
    },
  };

  window['juego-1'] = window['juego-1'] || {};
  window['juego-1'].Game = Game;

}());