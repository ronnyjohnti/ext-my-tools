const deleteFundy = () => {
	let fundy = document.querySelector('.fundy')
	let videoURL = document.querySelector('div#player>iframe').src

	if(fundy !== undefined) fundy.parentNode.removeChild(fundy)

	window.location.href = videoURL
}

setTimeout(deleteFundy, 1000)