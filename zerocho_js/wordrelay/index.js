const btn = doument.querySelector('#button')
// btn: 객체 word, input: 문자열
btn.addEventListener('click'), () => {
	const word = document.querySelector('#word').textContent
	const input = document.querySelector('#input').value
	//documnet의 query를 선택한다(input) 그 후 값(textContent)//
	const lastIndex = word.length - 1
	//'가나다'.length: 3 length에선 1이 첫번째임
	word[lastIndex]
	input[0]
}
