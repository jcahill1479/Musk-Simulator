var CONTROLS = {
  running : false,
  student : {
    jumping : false
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case " ":
      ROCKET1.thrusting = true;
      break;
      case "a":
      if (ROCKET1.y < GAME.canvas.height-ROCKET1.height/4 ){
        ROCKET1.rotating = true;
        ROCKET1.rotspeed = Math.abs(ROCKET1.rotspeed);
      }
        break;
        case "d":
        if (ROCKET1.y < GAME.canvas.height-ROCKET1.height/4 ){
          ROCKET1.rotating = true;
          ROCKET1.rotspeed = -Math.abs(ROCKET1.rotspeed);
        }
          break;
          case "r":
            if (!GAME.started){
              initializeRockets();
              EXPLOSION.currentFrame = 0;
              GAME.started = true;
            }
            break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case " ":
      ROCKET1.thrusting = false;
      break;
      case "a":
        ROCKET1.rotating = false;
        break;
        case "d":
          ROCKET1.rotating = false;
          break;
    default:
      break;
  }
});
