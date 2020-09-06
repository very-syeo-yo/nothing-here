const btn = document.querySelector('#button')
// btn: 객체 word, input: 문자열
btn.addEventListener('click', () => {
	const wordTag = document.querySelector('#word')
	const word = wordTag.textContent
	const inputTag = document.querySelector('#input')
	const input = inputTag.value
	//document의 query를 선택한다(input) 그 후 값(textContent)//
	const lastIndex = word.length - 1
	//'가나다'.length: 3 length에선 1이 첫번째임
	const errorTag = document.querySelector('#error')
	const w = word[lastIndex]
	const i = input[0]
	if (w === i) {
		wordTag.textContent = input
		// word칸의 textContent로 input을 넣어준다//
		errorTag.textContent = ''
		inputTag.value = ''
		inputTag.focus()
	} else {
		errorTag.textContent = '땡~~'
		inputTag.value = ''
		inputTag.focus()
	}	
})