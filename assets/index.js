function wrapRegisteredSymbolWithSup() {
	// Ambil semua elemen teks di halaman
	const elements = document.body.getElementsByTagName("*");

	// Loop melalui semua elemen
	for (let element of elements) {
		// Hanya proses elemen yang berisi teks dan bukan elemen dengan children (seperti gambar atau form)
		if (element.children.length === 0 && element.textContent.includes("®")) {
			// Ganti karakter ® dengan <sup>®</sup>
			element.innerHTML = element.innerHTML.replace(/®/g, "<sup>®</sup>");
		}
	}
}

// Panggil fungsi saat halaman dimuat
window.addEventListener("DOMContentLoaded", wrapRegisteredSymbolWithSup);
