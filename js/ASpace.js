function aSpace(e) {
	function o(e) {
		return u.test(e) || f.test(e)
	}
	function d(e) {
		return e.replace(f, "$1 $2").replace(u, "$1 $2")
	}
	function t(e) {
		for (var u = 0; u < e.childNodes.length; u++) 3 === e.childNodes[u].nodeType && e.childNodes[u].nodeValue && o(e.childNodes[u].nodeValue) ? e.childNodes[u].nodeValue = d(e.childNodes[u].nodeValue) : 1 !== e.childNodes[u].nodeType || e.childNodes[u].classList.contains(n) || -1 !== c.indexOf(e.childNodes[u].nodeName.toLowerCase()) || t(e.childNodes[u])
	}
	var u = /([a-zA-Z0-9\,\:\?\!\+\*])([\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\+\*])/g,
		f = /([\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\,\:\?\!\+\*])([a-zA-Z0-9\+\*])/g,
		c = ["script", "title", "meta", "style"],
		n = "no-space",
		l = Object.prototype.toString.call(e);
	if ("[object String]" === l) return d(e);
	if ("[object HTMLDivElement]" === l) t(e);
	else if ("[object HTMLCollection]" === l) for (var a = 0; a < e.length; a++) t(e[a])
}