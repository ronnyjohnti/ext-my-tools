const bt = document.querySelector('#button')
const btIggGames = document.querySelector('#download-igg')

const deleteFundy = () => {
	let fundy = document.querySelector('.fundy')

	fundy.parentNode.removeChild(fundy)
}

const downloadMegaUpFromIGG = () => {
	let links = document.querySelectorAll('p:has(b.uk-heading-bullet)')
	let linkMegaUp = ''

	links.forEach(e => {
		if(e.childNodes[0].textContent.match(/MegaUp.*/)) {
			linkMegaUp = e?.childNodes[3].href
		}
	})

	window.location.href = linkMegaUp
}

bt.addEventListener('click', async e => {
	e.preventDefault()

	const [tab] = await chrome.tabs.query({active: true, currentWindow: true})



	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: deleteFundy
	})
})

btIggGames.addEventListener('click', async e => {
	e.preventDefault()

	const [tab] = await chrome.tabs.query({active: true, currentWindow: true})

	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: downloadMegaUpFromIGG
	})
})