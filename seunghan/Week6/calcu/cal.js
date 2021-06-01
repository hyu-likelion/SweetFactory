const seek = document.querySelector("#display");

function add(num) {
    seek.value = seek.value + num;
}

function reset() {
    seek.value = ""
}

function cal() {
    const result = eval(seek.value)
    seek.value = result
}

/*
JS 부분 정리하자면,
seek 변수에 #display(id값)로부터 받아온 값을 저장

add 함수는 seek.value 에 추가 num (argunments)를 받아 더하기

reset 함수는 seek.value 에 " " 공백으로 초기화

cal 함수는 result 변수에 eval 함수로 계산 실행
seek.value 에 result 변수를 다시 입력함.

*/