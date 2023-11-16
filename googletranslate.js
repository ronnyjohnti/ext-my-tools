const removerImagemGoogleTranslate = evt => {
	evt = evt || window.event;
	let key = evt.key;
	if (key === '\\' || key === 'c') {
		const cl = document.querySelector('button[aria-label="Remover imagem"]');
		console.log(cl)

		if(cl) {
			cl.click();
		}
	}

	console.log(key)
}

document.onkeyup = removerImagemGoogleTranslate

document.onkeydown = removerImagemGoogleTranslate