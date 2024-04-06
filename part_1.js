const fs=require('fs');

const filePath = './test.txt';

// 3. Inside the part_1.js file, write code to programmatically create a folder named as 
// “part_1” in the same directory with the .js file (your_name_waf_lab_28sep). 
// 4. Write a code statement to create a file named as “test.txt”. 

//Async
fs.mkdir("./part_1",(err)=>{
    console.log("part 1 dir made");
    console.log(err);
})

// 5. Write a code statement to write your registration number inside the “test.txt” file. 
//Async

fs.writeFile(filePath,"04072013002",(err)=>{
    console.log("logged reg no");
    console.log(err);
})

// 6. Write a code statement to read the data from the “part_1.txt” file (your registration 
//     number) and display on consol. 
//Sync 
let data=fs.readFileSync(filePath,"utf-8");
console.log(data);

// 7. Write code to overwrite your registration number in the “test.txt” with the last four 
// digits of your registration number. 
// Sync
const modified_data=data.slice(-4);

fs.writeFileSync(filePath,modified_data)

// Sync
data=fs.readFileSync(filePath,"utf-8");
console.log(data);

// 9. Erase data from the file “test.txt” 
// Async
fs.truncate(filePath, 0, (err)=>{
    console.log("Async erasing files");
});
console.log('File contents erased.');

// Sync
data=fs.readFileSync(filePath,"utf-8");
console.log(data);

// Async
fs.writeFile(filePath,"04072013002",(err)=>{
        console.log("logged reg no");
        console.log(err);
    })

// Sync
data=fs.readFileSync(filePath,"utf-8");
console.log(data);
    