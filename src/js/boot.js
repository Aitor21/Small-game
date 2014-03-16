(function ()
{
  'use strict';
  function Boot()
  {

  }
  Boot.prototype =
  {
    preload: function ()
    {
      this.load.image('preloader', 'assets/preloader.gif');
    },

    create: function ()
    {
      this.game.input.maxPointers = 1;
      if (this.game.device.desktop)
      {
        this.game.stage.scale.pageAlignHorizontally = true;
      } 
      else
      {
        this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
        this.game.stage.scale.minWidth =  1000;
        this.game.stage.scale.minHeight = 1080;
        this.game.stage.scale.maxWidth = 1000;
        this.game.stage.scale.maxHeight = 1080;
        this.game.stage.scale.forceLandscape = true;
        this.game.stage.scale.pageAlignHorizontally = true;
        this.game.stage.scale.setScreenSize(true);
      }
      this.game.state.start('preloader');
    }
  };

  window['juego-1'] = window['juego-1'] || {};
  window['juego-1'].Boot = Boot;

}());

