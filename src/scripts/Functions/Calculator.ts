function calc(a: number, b: number, c: string){
    if (c=="+"){
        return a+b;
    }
    else if (c=="-") {
        return a-b;
    }
    else if (c=="*") {
        return a*b;
    }
    else if (c=="/"){
        if (b==0) return "Error! You can't divide by zero!";
        return a/b;
    }
    else if (c=="%") {
        if (b==0) return "Error! You can't divide by zero!";
        return a%b;
    }
    else return "There is no such sign!"
}

console.log(calc(5,7,"+"));
console.log(calc(100,30,"-"));
console.log(calc(12,12,"*"));
console.log(calc(10,0,"/"));
console.log(calc(625,25,"/"));
console.log(calc(7,15,"%"));
