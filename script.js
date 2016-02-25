(function() {
  'use strict';
  var body = document.getElementsByTagName('body')[0];
  var easel = document.createElement('div');
  var tray = document.createElement('div');
  var palette = [];
  var canvas = [];
  var cellCount = 4800;
  var cellWidth = 10;
  var cellHeight = 10;
  var paletteCount = 200;
  var pickWidth = 20;
  var pickHeight = 20;
  var i;
  var chosenColor = 'black';
  var prevColor;
  var hoverColor;
  var mouseDown = false;
  var createEasel;
  var createCanvas;
  var createTray;
  var createPalette;

  var randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  createEasel = function(width) {
    easel.setAttribute('id', 'easel');
    easel.style.width = width + 'px';
    easel.style.margin = '0px auto';
    body.appendChild(easel);
  };
  createEasel(800);

  createCanvas = function() {
    for (i = 0; i < cellCount; i++) {
      canvas[i] = document.createElement('div');
      canvas[i].setAttribute('id', 'canvas' + i.toString());
      canvas[i].className = 'canvas';
      canvas[i].style.boxSizing = 'border-box';
      canvas[i].style.float = 'left';
      canvas[i].style.border = '1px dotted grey';
      canvas[i].style.borderRadius = '3px';
      canvas[i].style.cursor = 'none';
      canvas[i].style.width = cellWidth.toString() + 'px';
      canvas[i].style.height = cellHeight.toString() + 'px';
      easel.appendChild(canvas[i]);
    }
  };
  createCanvas();

  createTray = function() {
    tray.setAttribute('id', 'tray');
    tray.style.boxSizing = 'border-box';
    tray.style.width = '800px';
    tray.style.margin = '0px auto';
    body.appendChild(tray);
  };
  createTray();

  createPalette = function() {
    for (i = 0; i < paletteCount; i++) {
      palette[i] = document.createElement('div');
      palette[i].setAttribute('id', 'palette' + i.toString());
      palette[i].className = 'palette';
      palette[i].style.boxSizing = 'border-box';
      palette[i].style.float = 'left';
      palette[i].style.width = pickWidth.toString() + 'px';
      palette[i].style.height = pickHeight.toString() + 'px';
      palette[i].style.backgroundColor = 'red';
      palette[i].style.border = '1px solid black';
      palette[i].style.cursor = 'pointer';
      palette[i].style.backgroundColor = 'rgb(' + randomInt(0, 255) + ',' + randomInt(0, 255) + ',' + randomInt(0, 255) + ')';
      tray.appendChild(palette[i]);
      }
    };
  createPalette();

  tray.addEventListener('click', function(e) {
    chosenColor = e.target.style.backgroundColor;
  });

  easel.addEventListener('mousedown', function(e) {
    mouseDown = true;
  });

  easel.addEventListener('mouseup', function(e) {
    mouseDown = false;
  });

  easel.addEventListener('mouseover', function(e) {
    if(mouseDown === true){
      e.target.style.backgroundColor = chosenColor;
    }
  });

  easel.addEventListener('mouseover', function(e) {
    if(mouseDown === false){
      prevColor = e.target.style.backgroundColor;
      e.target.style.backgroundColor = chosenColor;
    }
  });

  easel.addEventListener('mouseout', function(e) {
    if(mouseDown === false){
      e.target.style.backgroundColor = prevColor;
    }
  });

})();
