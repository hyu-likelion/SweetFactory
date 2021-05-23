plusTwo = s => s + 2
// function, 괄호, return, 파라메터 하나면 소괄호(s) 생략 가능
console.log(plusTwo(10))

arr = [1,2,3,4,5,6,7,8,13,4325,7,232,223]

arr_map = arr.map(v => v*2)
console.log(arr_map)

arr_filter = arr.filter(v => v>10)
console.log(arr_filter)