// Todo: Klikom na dugme ucitati slike i dodati ih u DOM sa istom sitilizacijom kao postojece slike
(function(global) {
'use strict';
var btn = document.querySelector('.gallery').lastElementChild,
	gallery = document.querySelector('.gallery'),
    html= "",
	div = document.createElement('div'),
	innerDiv,
    imgs = [
	{src: "img/shooting_range-300.jpg",
	 alt: "Porba"},
	{src: "img/shooting_range-300.jpg",
	 alt: "Proba"},
	{src: "img/shooting_range-300.jpg",
	 alt: "Proba"},
	 {src: "img/shooting_range-300.jpg",
	 alt: "Porba"},
	{src: "img/shooting_range-300.jpg",
	 alt: "Proba"},
	{src: "img/shooting_range-300.jpg",
	 alt: "Proba"}
	];

function getImg () {

	imgs.forEach( function(img, i) {
		innerDiv = document.createElement('div');
		innerDiv.classList.add("small-12", "large-4", "columns");
		html+= "<img src=";
		html+= "'" + img.src + "' ";
		html+= "alt='" + img.alt + "'";
		html+= ">";
		innerDiv.insertAdjacentHTML('afterbegin', html);
		html="";	
		div.appendChild(innerDiv);
	});
	
		div.classList.add("row");
		gallery.appendChild(div);
}

btn.onclick = function() {
	gallery.removeChild(btn);
	getImg();

};
})(window);	



