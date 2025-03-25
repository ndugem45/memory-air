function wrapRegisteredSymbolWithSup() {
	const elements = document.body.getElementsByTagName("*");

	for (const element of elements) {
		if (element.children.length === 0) {
			element.innerHTML = element.innerHTML.replace(/®/g, "<sup>®</sup>");
		}
	}
}

window.onload = wrapRegisteredSymbolWithSup;
