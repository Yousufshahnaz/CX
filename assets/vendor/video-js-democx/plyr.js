document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player = new Plyr('#player');
  
  // Expose
  window.player = player;

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play', 'click', () => { 
    player.play();
  });

  // Pause
  on('.js-pause', 'click', () => { 
    player.pause();
  });

  // Stop
  on('.js-stop', 'click', () => { 
    player.stop();
  });

  // Rewind
  on('.js-rewind', 'click', () => { 
    player.rewind();
  });

  // Forward
  on('.js-forward', 'click', () => { 
    player.forward();
  });
});


document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player1 = new Plyr('#player1');
  
  // Expose
  window.player1 = player1;

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play1', 'click', () => { 
    player1.play();
  });

  // Pause
  on('.js-pause1', 'click', () => { 
    player1.pause();
  });

  // Stop
  on('.js-stop1', 'click', () => { 
    player1.stop();
  });

  // Rewind
  on('.js-rewind1', 'click', () => { 
    player1.rewind();
  });

  // Forward
  on('.js-forward1', 'click', () => { 
    player1.forward();
  });
});

document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player3 = new Plyr('#player3');
  
  // Expose
  window.player3 = player3;

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play3', 'click', () => { 
    player3.play();
  });

  // Pause
  on('.js-pause3', 'click', () => { 
    player3.pause();
  });

  // Stop
  on('.js-stop3', 'click', () => { 
    player3.stop();
  });

  // Rewind
  on('.js-rewind3', 'click', () => { 
    player3.rewind();
  });

  // Forward
  on('.js-forward3', 'click', () => { 
    player3.forward();
  });
});

document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player4 = new Plyr('#player4');
  
  // Expose
  window.player5 = player5;

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play4', 'click', () => { 
    player4.play();
  });

  // Pause
  on('.js-pause4', 'click', () => { 
    player4.pause();
  });

  // Stop
  on('.js-stop4', 'click', () => { 
    player4.stop();
  });

  // Rewind
  on('.js-rewind4', 'click', () => { 
    player4.rewind();
  });

  // Forward
  on('.js-forward4', 'click', () => { 
    player4.forward();
  });
});

document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player5 = new Plyr('#player5');
  
  // Expose
  window.player5 = player5;

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play5', 'click', () => { 
    player5.play();
  });

  // Pause
  on('.js-pause5', 'click', () => { 
    player5.pause();
  });

  // Stop
  on('.js-stop5', 'click', () => { 
    player5.stop();
  });

  // Rewind
  on('.js-rewind5', 'click', () => { 
    player5.rewind();
  });

  // Forward
  on('.js-forward5', 'click', () => { 
    player5.forward();
  });
});