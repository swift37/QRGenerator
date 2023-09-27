const wrapper = document.querySelector('.wrapper')
const generateBtn = document.querySelector('.form button')
const qrInput = document.querySelector('.form input')
const qrImg = document.querySelector('.qr-container img')

generateBtn.addEventListener('click', () => {
	if (!qrInput.value) return
	generateBtn.textContent = 'QR is generating...'
	qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`
	qrImg.addEventListener('load', () => wrapper.classList.add('active'))
	generateBtn.textContent = 'QR has generated'
	setTimeout(() => (generateBtn.textContent = 'Generate QR'), 1000)
})
