window.onload = function () {
  'use strict';

  var game
    , ns = window['juego-1'];

  game = new Phaser.Game(1080, 1000, Phaser.AUTO, 'juego-1-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);

  game.state.start('boot');
};
