function logest(s) {
    let temp = ""
    let longest = ""
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            if (temp.length > longest.length) {
                longest = temp
            }
            temp = ""
        }
        else {
            temp += s[i]
        }
    }
    return temp
}


console.log(logest("my dog name is pradeep fjabegjbaej"))