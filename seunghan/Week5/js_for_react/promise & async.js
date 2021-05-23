 // Promise - 언젠가 해결할 것이라는 약속
 // new Promise((resolve, reject) => {})

 function sayHello(byeCallback){
    setTimeout(()=>{
        console.log(name+"님 안녕하세요")
        byeCallback()
    }, 2000);
}

sayHello("Mike", function() {
    console.log("안녕히 가세요")
})

funciton sayHello2(name) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(name+"님 안녕하세요")
            resolve("서울")
        }, 3000);
    }
    )
    
}

//sayHello2("Frank")
//    .then((location)=> console.log(location + "안녕히 가세요"))
async function sayHeloBye() {
    loc = await sayHello2(name)
    console.log(loc + "로 안녕히 가세요")
}

sayHelloBye("Sangyeon")