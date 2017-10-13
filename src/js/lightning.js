
// The main canvas and context.
let c, canvas, boltFadeDuration, setLightningSize, boltFlashDuration, bolts, context, flashOpacity, height, lastFrame, launchBolt, recursiveLaunchBolt, scale, drawLightning, totalBoltDuration, width;

// The size and scale of the canvas. The size will get set via setCanvasSize to match the size of
// the window. Change the scale to get a more or less pixel-y effect.
width = 0.0;
height = 0.0;
scale = 1.5;
canvas = document.getElementById("canvas");
c = canvas.getContext('2d');

lastFrame = (new Date).getTime();

// The screen will flash briefly when the flash opacity is set. The opacity will dissipate quickly
// over time.
flashOpacity = 0.0;

// When a bolt appears, it will be drawn at full opacity for the flash duration, and then will fade
// out gradually over the fade duration.
boltFlashDuration = 0.75;

boltFadeDuration = 1.5;

totalBoltDuration = boltFlashDuration + boltFadeDuration;

// The list of bolts. A bolt will get added to this list on creation, and then will be automatically
// removed after it's done fading out.
bolts = [];

// Sets the size of the canvas and each bolt canvas.
export function setLightningSize () {
  var bolt, j, len;
  for (j = 0, len = bolts.length; j < len; j++) {
    bolt = bolts[j];
    bolt.canvas.width = window.innerWidth;
    bolt.canvas.height = window.innerHeight;
  }
  width = Math.ceil(window.innerWidth / scale);
  return height = Math.ceil(window.innerHeight / scale);
};

// Launch a bolt!!!
launchBolt = function(x, y, length, direction) {
  var boltCanvas, boltContext;
  // Set the flash opacity.
  flashOpacity = 0.15 + Math.random() * 0.2;

  // Create the bolt canvas.
  boltCanvas = document.createElement("canvas");
  boltCanvas.width = window.innerWidth;
  boltCanvas.height = window.innerHeight;
  boltContext = boltCanvas.getContext("2d");
  boltContext.scale(scale, scale);

  // Add the bolt to the list.
  bolts.push({
    canvas: boltCanvas,
    duration: 0.0
  });

  // Launch it!!
  return recursiveLaunchBolt(x, y, length, direction, boltContext);
};

// Recursive bolt action.
recursiveLaunchBolt = function(x, y, length, direction, boltContext) {
  var boltInterval, originalDirection;
  originalDirection = direction;

  // We draw the bolt incrementally to get a nice animated effect.
  return boltInterval = setInterval((function() {
    var alpha, i, x1, y1;
    if (length <= 0) {
      clearInterval(boltInterval);
      return;
    }
    i = 0;
    while (i++ < Math.floor(45 / scale) && length > 0) {
      x1 = Math.floor(x);
      y1 = Math.floor(y);
      x += Math.cos(direction);
      y -= Math.sin(direction);
      length--;
      if (x1 !== Math.floor(x) || y1 !== Math.floor(y)) {
        alpha = Math.min(1.0, length / 350.0);
        boltContext.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        boltContext.fillRect(x1, y1, 1.0, 1.0);
        direction = originalDirection + (-Math.PI / 8.0 + Math.random() * (Math.PI / 4.0));
        if (Math.random() > 0.98) {
          recursiveLaunchBolt(x1, y1, length * (0.3 + Math.random() * 0.4), originalDirection + (-Math.PI / 6.0 + Math.random() * (Math.PI / 3.0)), boltContext);
        } else if (Math.random() > 0.95) {
          recursiveLaunchBolt(x1, y1, length, originalDirection + (-Math.PI / 6.0 + Math.random() * (Math.PI / 3.0)), boltContext);
          length = 0;
        }
      }
    }
    return 0;
  }), 10);
};

// This will get fired at a constant framerate.
export function drawLightning() {
  var bolt, elapsed, frame, i, j, len, length, x, y;
  // Keep track of the frame time.
  frame = (new Date).getTime();
  elapsed = (frame - lastFrame) / 1000.0;
  lastFrame = frame;

  // Clear the canvas.
  //c.clearRect(0.0, 0.0, window.innerWidth, window.innerHeight);

  // Fire a bolt every once in a while.
  if (Math.random() > 0.98) {
    let ranCloud = Math.floor(Math.random() * 4);
    x = Math.floor(Math.random() * (window.innerWidth * .8));
    y = Math.floor(Math.random() * (window.innerHeight * .2));
    length = Math.floor(height / 2.0 + Math.random() * (height / 3.0));
    launchBolt(x, y, length, Math.PI * 3.0 / 2.0);
  }

  // Draw the flash.
  if (flashOpacity > 0.0) {
    c.fillStyle = `rgba(255, 255, 255, ${flashOpacity})`;
    c.fillRect(0.0, 0.0, window.innerWidth, window.innerHeight);
    flashOpacity = Math.max(0.0, flashOpacity - 2.0 * elapsed);
  }

  // Draw each bolt.
  for (i = j = 0, len = bolts.length; j < len; i = ++j) {
    bolt = bolts[i];
    bolt.duration += elapsed;
    if (bolt.duration >= totalBoltDuration) {
      bolts.splice(i, 1);
      i--;
      return;
    }
    //c.globalAlpha = Math.max(0.0, Math.min(1.0, (totalBoltDuration - bolt.duration) / boltFadeDuration));
    c.drawImage(bolt.canvas, 0.0, 0.0);
  }
  return 0;
};
