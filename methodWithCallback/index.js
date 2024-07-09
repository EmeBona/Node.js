import { writeFile } from 'node:fs'

writeFile("helloworld.txt", "Hello, world!", (err) => {
    if (err) throw err;
    console.log("saved!");
})