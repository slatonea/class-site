// 02
window.addEventListener('mousemove', nutterbutter);

var _el = document.getElementById('question-hover-2');

_el.addEventListener('dblclick', function(){
	window.addEventListener('mousemove', nutterbutter);
	_el.addEventListener('dblclick', removeNutter);
});

function removeNutter(){
	window.removeEventListener('mousemove', nutterbutter);
	_el.removeEventListener('dblclick', removeNutter);
}
function nutterbutter(){
	_el.style.top = event.clientY + "px";
	_el.style.left = event.clientX + "px";
}
