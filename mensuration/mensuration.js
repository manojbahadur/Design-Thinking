function cuboid(){
	var lsa=0, tsa=0, vol=0;
	var length = document.getElementById('length').value;
	var breadth = document.getElementById('breadth').value;
	var height = document.getElementById('height').value;
	length = Math.abs(length);
	breadth = Math.abs(breadth);
	height = Math.abs(height);
	vol = length*breadth*height;
	lsa = 2*height*(length+breadth);
	tsa = 2*((length*breadth) + (breadth*height) + (length*height));
	vol = vol.toFixed(2);
	lsa = lsa.toFixed(2);
	tsa = tsa.toFixed(2);
	document.getElementById('vol').value = vol;
	document.getElementById('tsa').value = tsa;
	document.getElementById('lsa').value = lsa;
}

function cube(){
	var lsa, tsa, vol;
	var length = document.getElementById('length').value;
	length = Math.abs(length);
	vol = Math.pow(length,3);
	lsa = 4*Math.pow(length,2);
	tsa = 6*Math.pow(length,2);
	vol = vol.toFixed(2);
	lsa = lsa.toFixed(2);
	tsa = tsa.toFixed(2);
	document.getElementById('vol').value = vol;
	document.getElementById('tsa').value = tsa;
	document.getElementById('lsa').value = lsa;
}

function circle(){
	var area, cir;
	var radius = document.getElementById('radius').value;
	radius = Math.abs(radius);
	area = 2*Math.PI*Math.pow(radius,2);
	cir = 2*Math.PI*radius;
	area = area.toFixed(2);
	cir = cir.toFixed(2);
	document.getElementById('area').value = area;
	document.getElementById('cir').value = cir;
}

function cone(){
	var lsa, tsa, vol;
	var radius = document.getElementById('radius').value;
	var height = document.getElementById('height').value;
	radius = Math.abs(radius);
	height = Math.abs(height);
	var sl = Math.sqrt((radius*radius) + (height*height));
	vol = (1/3)*(Math.PI*Math.pow(radius,2)*height);
	lsa = Math.PI*radius*sl;
	tsa = Math.PI*radius*(radius+sl);
	vol = vol.toFixed(2);
	lsa = lsa.toFixed(2);
	tsa = tsa.toFixed(2);
	document.getElementById('vol').value = vol;
	document.getElementById('tsa').value = tsa;
	document.getElementById('lsa').value = lsa
}

function cylinder()
{
  var vol, area;
  var radius = document.getElementById('radius').value;
  var height = document.getElementById('height').value;
  radius = Math.abs(radius);
  height = Math.abs(height);
  vol = Math.PI * Math.pow(radius,2) * height;
  area = 2* Math.PI*radius*(radius * height); 
  vol = vol.toFixed(2);
  area = area.toFixed(2);
  document.getElementById('vol').value = vol;
  document.getElementById('area').value = area;
 }

function rectangle(){
	var area, peri;
	var length = document.getElementById('length').value;
	var breadth = document.getElementById('breadth').value;
	length = Math.abs(length);
	breadth = Math.abs(breadth);
	area = length*breadth;
	peri = 2*(length+breadth);
	area = area.toFixed(2);
	peri = peri.toFixed(2);
	document.getElementById('area').value = area;
	document.getElementById('peri').value = peri;
}

function sphere()
{
  	var volume, area;
  	var radius = document.getElementById('radius').value;
	radius = Math.abs(radius);
  	volume = (4/3) * Math.PI * Math.pow(radius, 3);
  	area = 4* Math.PI * Math.pow(radius, 2);
  	volume = volume.toFixed(2);
  	area = area.toFixed(2);
	document.getElementById('volume').value = volume;
	document.getElementById('area').value = area;
} 

function square(){
	var area, peri;
	var length = document.getElementById('length').value;
	length = Math.abs(length);
	area = length*length;
	peri = 2*length;
	area = area.toFixed(2);
	peri = peri.toFixed(2);
	document.getElementById('area').value = area;
	document.getElementById('peri').value = peri;
}