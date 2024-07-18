//for in loop
const lan={
    js:"javascript",
    cpp:"c++",
    rb:"ruby"
}

for (const key in lan) {
   console.log(`${key} shortcut is for ${lan[key]}`);
}

const prog = ["js", "cpp", "py"]
for (const key in prog) {
    console.log(prog[key]);

}