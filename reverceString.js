function reverceString(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
}

const rs = reverceString("Hello, frontend dsa");
console.log(rs);
