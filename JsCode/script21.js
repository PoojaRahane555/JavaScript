
// 4) INDEXOF:
// action: check the index of given character.if character is not present then gives -1.
// return : number

let animal = "elephant"
let aa = animal.indexOf("e")
console.log(aa)

let bb = animal.indexOf("P")
console.log(bb)

// 5)STARTSWITH:
// action: check the string startswith given character or substring
// return: boolean value

let cc = animal.startsWith("e")
console.log(cc)

let dd = animal.startsWith("E")
console.log(dd)

let ee = animal.startsWith('ele')
console.log(ee)

// 6)ENDSWITH:
// action : check the string endswith given character or substrig
// return : boolean value

let animal2 = "elephants"

let ff = animal2.endsWith('s')
console.log(ff)

let gg = animal2.endsWith('S')
console.log(gg)

let hh = animal2.endsWith('nts')
console.log(hh)

// 7)TRIMSTART:
// action : removes the space of starting string
// return : string

let mobile = " iphone"
let ii = mobile.trimStart()
console.log(ii)
console.log(mobile.length)
console.log(ii.length)

// 8)TRIMEND:
// action: removes the space of ending string
// return: string

let mobile2 = "iphone  "
let jj = mobile2.trimEnd()
console.log(jj)
console.log(mobile2.length)
console.log(jj.length)

// 9)TRIM:
// action : removes the space of starting and ending string
// return : sting

let mobile3 = "  iphone  "

let kk = mobile3.trim()
console.log(kk)
console.log(mobile3.length)
console.log(kk.length)

// 10)REPLACE:
// action: replace the particular words,characters for the given string
// return: string


let lang = "my favourite language is javascript"

let ll = lang.replace("javascript","python")
console.log(ll)
console.log(lang)

// 11)CHARAT:
// action: check the character for given index
// return: character/string. if index is not present then gives blank string

let string = "hello world"

let mm = string.charAt(6)
console.log(mm)

let nn = string.charAt(11)
console.log(nn)


// 12)Replace:
// action: replace the given element by another element.
// return: new string

let sent = "I am learning javascript."
console.log(sent)

let oo = sent.replace("javascript","python")
console.log(oo)

// 13)Slice:
// action: find the character from strating index to ending index for the given index
// return: string

let City = "Chandrapur"
console.log(City)

console.log(City.slice(5))
console.log(City.slice(1,5))
console.log(City.slice(-9,-2))
console.log(City.slice(2,-2))
console.log(City.slice(-9,5))
console.log(City.slice(-5))
console.log(City.slice(-1,-5)) //blank string

// 14)Join:
// action: join the element of array by given character
// return: string
let info = ["Pooja","Rahane",7030555566]
console.log(info)

let pp = info.join('-')
console.log(pp)

// 14)Split:
// action: split the element at given character
// return: array
let qq = pp.split('-')
console.log(qq)

// 15)Concat
// action: combine the given string
// return : string
let firstName = "Pooja"
let lastName = "Rahane"

let rr = firstName.concat(lastName)
console.log(rr)

let ss = firstName.concat(" ").concat(lastName)
console.log(ss)


// 16)Repeat:
// action:  repeat the given string
// return: string

let greet = "Welcome-> "
console.log(greet)

let tt = greet.repeat(5)
console.log(tt)



