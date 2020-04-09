const args = process.argv.slice(2)
const fs = require('fs');
const request = require('request');

request(args[0], (error, response, body) => { 
  if (error){
    return console.log(error);
  }
  if (response.statusCode === 200 ){
    console.log('connected to site!');
      fs.writeFile(args[1], body, (err)=> {
        if (err) {
          return console.log(err);
        }

        fs.stat(`./${args[1]}`, (error, stats)=>{
          console.log(`Downloaded and saved ${stats.size} bytes to ./index.html`);
        })
      });
  }
});
