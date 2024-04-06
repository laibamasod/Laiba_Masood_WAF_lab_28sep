const fs=require('fs');

// Class A (1.0.0.0 to 126.0.0.0)
// Class B (128.0.0.0 to 191.255.0.0)
// Class C (192.0.0.0 to 223.255.255.0)

const A= fs.createWriteStream('A.txt');
const B= fs.createWriteStream('B.txt');
const C= fs.createWriteStream('C.txt');

const data =
fs.readFileSync('IPs.txt', 'utf-8');

// splitting data into IPs
const IP= data.split('\r\n');
 console.log(IP);


// getting IP values before first period and guessing Class
IP.forEach((ips)=>{
    const IPsplit = ips.split('.')[0];
    //console.log(IPsplit);
    if(IPsplit>=1 && IPsplit <=126){
        console.log(IPsplit,"has class A\n");
        A.write(ips+ ' Class A\n', (err)=>{
            if(err){
                console.log("error in A ",err.message);
            }
        });
    }
    else if(IPsplit>= 128 && IPsplit <= 191){
        console.log(ips+ ' Class B\n');
        B.write(ips+ ' Class B\n', (err)=>{
            if(err){
                console.log("error in B ",err.message);
            }
        })
    }
    else if(IPsplit>= 192 && IPsplit <= 223){
        console.log(ips+ ' Class C\n');
        C.write(ips+ ' Class C\n', (err)=>{
            if(err){
                console.log("error in C ",err.message);
            }
        })
    }
    else{
        console.log(IPsplit,"has other class\n");
    }


});
// closing streams
A.end();
B.end();
C.end();

console.log("All IPs logged\n");

