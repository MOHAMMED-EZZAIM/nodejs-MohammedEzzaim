const express=require("express");
const app=express()
app.use(express.json())
app.get("/hello",(req,res)=>{
    res.send("Hello")
})
app.get("/hi",(req,res)=>{
    res.send("Hi")
})
app.get("/hello-bro",(req,res)=>{
    res.send("hello mohammed ezzaim i am verry happy!")
})
app.post("/post",(req,res)=>{
   res.send("Post save information")
})
app.get("/numbers",(req,res)=>{
    let numbers="";
    for (let i = 1; i <=100; i++) {
        numbers+=i+"-";
    }
    res.send(`${numbers}`)
})
app.get("/findSymmation/:number1/:number2",(req,res)=>{
    // let reslt=Number(number1)+Number(number2)
    // res.send("findSymmation:"+reslt)
    const num1=req.params.number1;
    const num2=req.params.number2;
    let reslt=Number(num1)+Number(num2)
   res.send("la somme est :"+reslt+",and age est :"+req.query.age)
    
})
app.get('/', (req, res) => {
    // Send a response with a valid status code (e.g., 200 OK)
    res.status(200).send('Hello mohammed ezzaim!');
  });

  app.get("/json",(req,res)=>{
    res.json({
        name:req.body.name,
        age:req.body.age,
        specialiter:req.body.specialiter,
        mochkile:req.query.mochkile
        
    })
  })
//reponse:
//   {
//     "name": "mohammed ezzaim !",
//     "age": 21,
//     "specialiter": "informatique",
//     "mochkile": "necha allah anhydha 3eliya 9adeya mashlach walakine ant9atl nech allah"
// }
app.get("/seehello",(req,res)=>{
    res.send("Age:"+req.query.age+","+req.body.name)
})
app.get("/code-html",(req,res)=>{
    res.send("<html><h1>mohammed ezzaim</h1></html>")
})
app.get("/ouvert-fileHtml",(req,res)=>{
        // res.sendFile(__dirname +"/views/numbrs.html")
        let numbers="";
        for (let i = 1; i <=100; i++) {
            numbers+=i+"-";
        }
        res.render('numbrs.ejs',{
            name:"mohammed",
            numbers:numbers
        })
})
const PORT = 4000; // Change 4000 to any available port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




/*
