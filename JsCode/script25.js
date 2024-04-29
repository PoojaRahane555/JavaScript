// destructure practice:

let subject = ["hindi","english","marathi","math","chemistry"]
console.log(subject)

let [a,b,c,d,e] = subject
console.log(c)
console.log(e)

let score = [[11,22,33],[44,55],[66]]
console.log(score)

let [[aa,bb,cc],[dd,ee],[ff]] = score
console.log(dd)
console.log(aa)
console.log(ff)

// for object:

let info = {
    firstName : "aaditya",
    lastName  : "salunke",
    age : 15
}

let {firstName:fn,lastName:ln,age:ag} = info
console.log(ln)

let infoA = {
    father : "tukaram",
    mother : "ranjana",
    sister :{
        firstName: "nisha",
        lastName: "rahane",
        skills :["java","selenium","python","javascript"]
    }
}

let {father:f1,mother:m1,sister:{firstName:fn1,lastName:ln1,skills:[ww,xx,yy,zz]}} = infoA
console.log(xx)
console.log(fn1)
console.log(f1)
