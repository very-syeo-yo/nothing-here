const r = document.querySelector('#result')
    
document.querySelector('#click').addEventListener('click', () => {
    const a = document.querySelector('#first').value
    const b = document.querySelector('#second').value

    if (a) {
        if (b) {
            const c = a * b
            a * b
            r.textContent = c
        } else {
            r.textContent = '2nd 값 입력'
        }
    } else {
        r.textContent = '1st 값 입력'
    }
});


/* const a, b가 왜 click 안에 있어야 하는 이유:
 * click 하기 전에 input 안에 값이 없기 때문에 
 * 실행을 눌렀을 때 a b를 선언해야 함.
 */
