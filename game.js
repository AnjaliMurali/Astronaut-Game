AFRAME.registerComponent('game-play', {

  init: function () {
    orbsRemaining = 5
    this.el.addEventListener('collide', function (e) {
      e.detail.target.el.remove();
      orbsRemaining -= 1;
      orbsRemainingText = document.getElementById('orbsRemainingText');
      console.log(orbsRemainingText);
      orbsRemainingText.setAttribute('text', { value: String(orbsRemaining) });
      if (orbsRemaining == 0) {
        gameOverText = document.getElementById('gameOverText');
        gameOverText.setAttribute('text', { value: 'You WON!' });

      }
    });
  },

});