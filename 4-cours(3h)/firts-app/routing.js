const fs=require("fs")
const url=require('url');

function readez(path,res){
    fs.readFile(path,null,(error,data)=>{
        if(error){
            res.end("<html><h1>error : !!!!</h1></html>")
        }else{
            res.end(data)
        }
    })
  }
  function routing(req,res){
          // console.log(req.url) donne path requiest
          const path=url.parse(req.url).pathname
          switch(path){
              case '/':
                  readez('./index.html',res)
                  break;
              case '/any':
                  readez('./index2.html',res)
                  break;
              case '/user':
                  readez('./index3.html',res)
                  break;
              default :break;
          }
  }
  module.exports =routing;