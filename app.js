const fs = require('fs'); 
fs.readFile('file.txt', 'utf8', function (err, data) { 
if (err) throw err; 
console.log(data); 
}); 

console.log("read file execution")

fs.writeFile('file.txt', 'Hello World!', function (err) { 
  if (err) throw err; 
  console.log('File saved!'); 
}); 

console.log("write file execution")


const http = require('http'); 
http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('Hello World!'); 
  res.end(); 
}).listen(8080); 

console.log("server execution")



const https = require('https'); 
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => { 
  let data = ''; 
 
  resp.on('data', (chunk) => { 
    data += chunk; 
  }); 
 
  resp.on('end', () => { 
    console.log(JSON.parse(data)); 
  }); 
}).on('error', (err) => { 
  console.log("Error: " + err.message); 
}); 

console.log("https request execution")


const myModule = require('./my-module.js'); 
console.log(myModule.myFunction()); 

console.log("module execution")



const myPromise = new Promise((resolve, reject) => { 
  if (true) { 
    resolve('Success!'); 
  } else { 
    reject('Failure!'); 
  } 
}); 
 
myPromise.then((result) => { 
  console.log(result); 
}).catch((error) => { 
  console.log(error); 
}); 

console.log("promise execution")



async function myFunction() { 
  try { 
    const result = await myPromise; 
    console.log(result); 
  } catch (error) { 
    console.log(error); 
  } 
} 
 
myFunction(); 

console.log("async/await execution")



const figlet = require("figlet");

function figletText(text, options = {}) {
  return new Promise((resolve, reject) => {
    figlet.text(text, options, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

async function doStuff() {
  const text = await figletText("Hungry", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true
  });
  console.log(text);
}

doStuff();