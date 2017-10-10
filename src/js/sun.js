import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import $ from 'jquery';

let canvas, ctx, clouds, c, w, h, welcome, debounce = false, animateInterval, disableAnimate = false,
    twoPI = Math.PI * 2,
    mX, mY,
    resize = true,
    mousemove = true,
    requestId,
    per = { x: 0, y: 0 ,step:0},
    cloudSpeed = 1.25,
    mtn, trackmouse = true, isMobile = false,
    marcClouds = [],
    marcCloud = {x:window.innerWidth,img:null}, marcCloud2 = {x:window.innerWidth,img:null}, marcCloud3 = {x:window.innerWidth,img:null}, marcCloud4 = {x:window.innerWidth,img:null}, marcCloud5 = {x:window.innerWidth,img:null};

window.onload = function(){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
    cloudSpeed = .25;
  }

  if (window.innerWidth < 900) cloudSpeed = .45;



  canvas = document.getElementById("canvas");
  //clouds = document.getElementById("clouds");
  welcome = document.getElementById("welcome-bg");

  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  c = canvas.getContext('2d');

  if (isMobile) trackmouse = false;

  !resize || window.addEventListener('resize', (e)=>{


    if (disableAnimate) animate();

    if (isMobile) return
    mtn = new Mountains(60,"10");
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
   });

   if (isMobile) trackmouse = false;

   window.addEventListener('orientationchange', (e)=>{

     if (disableAnimate) animate();

     mtn = new Mountains(60,"10");
     w = canvas.width = window.innerWidth;
     h = canvas.height = window.innerHeight;
    });

  !mousemove || window.addEventListener('mousemove', (e)=>{

    mX = e.pageX-20; mY = e.pageY-20;
    per = { x: mX, y: mY ,step: per.step};

  });

  mX = w/2;
  mY = w/2;

  per = { x: w/2, y: h/2, step: 1 }
  mtn = new Mountains(60,"10");


  canvas.style.display = 'flex';
  welcome.style.display = 'flex';
  //clouds.style.display = 'block';

  setOnScroll();

  loadImage('/../images/marc-cloud.png').then((image)=>{

    marcCloud.img = image;
    marcClouds.push(marcCloud);

    while (marcCloud.img.width > 64 * 2) {
      marcCloud.img = resizeImg(marcCloud.img);
    }

    marcCloud2.img = image;
    marcClouds.push(marcCloud2);

    while (marcCloud2.img.width > 64 * 3) {
      marcCloud2.img = resizeImg(marcCloud2.img);
    }

    marcCloud3.img = image;
    marcClouds.push(marcCloud3);

    while (marcCloud3.img.width > 64 * 4) {
      marcCloud3.img = resizeImg(marcCloud3.img);
    }

    marcCloud4.img = image;
    marcClouds.push(marcCloud4);

    while (marcCloud4.img.width > 64 * 5) {
      marcCloud4.img = resizeImg(marcCloud4.img);
    }

    loop();
    startReactApp();
    startAnimate();

  })

}



function startReactApp(){
  ReactDOM.render(
    <App />,
    document.getElementById('react-app')
  )
}

function loadImage(url) {
  return new Promise(resolve => { let i = new Image(); i.onload = ()=>{resolve(i)}; i.src=url; });
}

function setOnScroll(){
  $(window).on('scroll', (e)=>{
    if ($(window).scrollTop() > window.innerHeight/5 && !disableAnimate){
      stopAnimate();
      disableAnimate = true;
    }else if ($(window).scrollTop() < window.innerHeight/5 && disableAnimate){
      startAnimate();
      disableAnimate = false;
    }
  })
}


function newGradient(gradient){
  let grad;
  switch(gradient.type){
    case "radial":
      grad = c.createRadialGradient(gradient.x1, gradient.y1, gradient.r1, gradient.x1, gradient.y1, gradient.r2);
      break;
    case "linear":
      grad = c.createLinearGradient(gradient.x1, gradient.y1, gradient.x2, gradient.y2);
      break;
  }

  for(let i = 0; i < gradient.stops.length; i++){
    grad.addColorStop(gradient.stops[i].s, gradient.stops[i].c);
  }

  return grad;
}


function animate(){

  if(!trackmouse){
    per.x = mX = w/2 + Math.round(Math.cos(per.step)*w/2);
    per.y = mY = h/2 + Math.round(Math.sin(per.step)*h/2);
    per.step += 0.03;

    if(per.step > twoPI)
      per.step = 0;
  }

  c.save();
  c.globalCompositeOperation = "source-over";
  c.fillStyle = newGradient(
    {
      type: "radial",
      x1: mX,
      y1: mY,
      r1: 0,
      r2: w,
      stops: [
        { s: 0, c: "rgba("+ Math.floor((h-mY)) +","+ Math.floor((h-mY)) +","+ Math.floor((h-mY)) +",.9)" },
        { s: 0.05, c: "rgba("+ Math.floor((h-mY)) +","+ Math.floor((h-mY-128)) +",128,.9)" },
        { s: 1, c: "rgba(0,"+ Math.floor((h-mY-128)) +","+ Math.floor((h-mY)) +",.9)" }

      ]
    }
  );
  c.fillRect(0,0,w,h);
  c.drawImage(marcCloud.img, marcCloud.x, 20);
  c.drawImage(marcCloud2.img, marcCloud2.x, 100);
  c.drawImage(marcCloud3.img, marcCloud3.x, 150);
  c.drawImage(marcCloud4.img, marcCloud4.x, 220);

  updateMarcs();
  mtn.draw();

}

// function loop(){
//   requestAnimationFrame(loop);
//   animate();
// }

function startAnimate() {
    if (!requestId) {
       requestId = window.requestAnimationFrame(animate);
    }
    loop();
}

function stopAnimate() {
    if (requestId) {
       window.cancelAnimationFrame(requestId);
       requestId = undefined;
    }
}

function updateMarcs(){
  marcClouds.forEach(function(marc,index){
    marc.x-= (index * cloudSpeed || 1.7);
    if (marc.x < 0 - marc.img.width * 2) marc.x = window.innerWidth;
  })
}

function resizeImg(i) {
      let cc = document.createElement("canvas");
      cc.width = i.width / 2;
      cc.height = i.height / 2;
      let ctx = cc.getContext("2d");
      ctx.drawImage(i, 0, 0, cc.width, cc.height);
      return cc;
    }


function Mountains(peaks,seed){
  let points = [];
  this.init = function(){
    let step = w / peaks,
        y = 0;

    points.push({x: 0, y: y});
    for(let i = 1; i <= peaks; i++){
      y = y + (Math.random() * 60)-35;
      points.push({x: i * step, y: y});
    }
  };
  this.draw = function(){
    c.save();
    //c.fillStyle = "rgba(20,20,20,1)";
    c.fillStyle = newGradient({type:"linear", x1: 0, y1: 0, x2: 0, y2: h, stops: [{s:1, c:"rgba(50,0,100,1)"},{s:0, c:"rgba(200,80,200,1)"}]});
    c.beginPath();
    c.moveTo(points[0].x, h/2-points[0].y);
    for(let p = 1; p < points.length; p++){
      c.lineTo(points[p].x, h/2 - points[p].y);
    }
    c.lineTo(w,h);
    c.lineTo(0,h);
    c.closePath();
    c.fill();
    c.restore();

    c.globalCompositeOperation = "lighter";
    c.fillStyle = "rgba(50,0,100,0.99)";
    for(let p = 0; p < points.length-1; p++){
      let va1 = Math.atan2(h/2-points[p].y - per.y, points[p].x - per.x),
          va2 = Math.atan2(h/2-points[p+1].y - per.y, points[p+1].x - per.x);

      c.beginPath();
      c.moveTo(points[p  ].x, h/2-points[p].y);
      c.lineTo(points[p+1].x, h/2-points[p+1].y);
      c.lineTo(points[p+1].x + Math.cos(va2)*w, h/2-points[p+1].y + Math.sin(va2)*w);
      c.lineTo(points[p  ].x + Math.cos(va1)*w, h/2-points[p].y + Math.sin(va1)*w);
      c.closePath();
      c.fill();
    }
  };

  this.init();

}

function loop() {
    if (!requestId) return
    requestAnimationFrame( loop );
    animate();
}
