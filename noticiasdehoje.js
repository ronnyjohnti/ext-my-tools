const playerContainer = document.getElementById('colunas')

playerContainer.style.display = 'block'
setTimeout(() => {
	const closeDialog = document.getElementsByClassName('fc-close')[0]
	closeDialog.click()
}, 3000)