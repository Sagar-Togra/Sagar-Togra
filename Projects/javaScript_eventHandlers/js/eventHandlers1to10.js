function find () {
	event = this.id;
	eventtgt = "#" + event + "tgt"; 

	function sayHello () {
		var message = "Hello!";
		console.log(eventtgt);
		document.querySelector(eventtgt).textContent = message;
	};
	sayHello();

};

document.querySelector("#onclick").addEventListener("click" , find);
document.querySelector("#onmouseover").addEventListener("mouseover" , find);
document.querySelector("#onmousedown").addEventListener("mousedown" , find);
document.querySelector("#onmouseup").addEventListener("mouseup" , find);
document.querySelector("#onmouseout").addEventListener("mouseout" , find);
document.querySelector("#onmousemove").addEventListener("mousemove" , find);
document.querySelector("#onmouseenter").addEventListener("mouseenter" , find);
document.querySelector("#onmouseleave").addEventListener("mouseleave" , find);
document.querySelector("#onmousewheel").addEventListener("mousewheel" , find);
document.querySelector("#onscroll").addEventListener("scroll" , find);


