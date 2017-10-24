let canvas = document.getElementById("canvas");
let c = canvas.getContext('2d');
let particles = [];


export function initRain(isMobile){

  let rain = [];
  let maxRain;
  let ys, xs;

  if (isMobile){
    maxRain = 50;
    ys = Math.random() * 10 + 10
    xs = Math.random() * 12 - 15

  }else{
    maxRain = 120;
    ys = Math.random() * 40 + 40
    xs = Math.random() * 24 - 30
  }

  for(let a = 0; a < maxRain; a++) {
    rain.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      l: Math.random() * .25,
      w: Math.random() * 4,
      xs:xs,
      ys:ys
    })
  }

  particles = [];

  for(let b = 0; b < maxRain; b++) {
    particles[b] = rain[b];
  }

}


export function drawRain(){
  c.strokeStyle = 'rgba(174,194,224,0.5)';
  for(let i = 0; i < particles.length; i++) {
    let p = particles[i];
    c.lineWidth = p.w;
    c.beginPath();
    c.moveTo(p.x, p.y);
    c.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
    c.stroke();
  }
}



export function moveRain() {
  for(let b = 0; b < particles.length; b++) {
    let p = particles[b];
    p.x += p.xs;
    p.y += p.ys;
    if(p.x > window.innerWidth * 1.5 || p.y > window.innerHeight) {
      p.x = Math.random() * window.innerWidth * 1.65;
      p.y = -50;
    }
  }
}
