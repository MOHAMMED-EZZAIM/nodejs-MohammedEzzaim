const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Article = require("../../models/Articles.js");

mongoose.connect("mongodb+srv://mohammed:n120062139@cluster0.txkemwl.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected successfully");
  })
  .catch(() => {
    console.log("Error connecting to the database");
  });

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.get("/hi", (req, res) => {
  res.send("Hi");
});

app.get("/hello-bro", (req, res) => {
  res.send("Hello Mohammed Ezzaim, I am very happy!");
});

app.post("/post", (req, res) => {
  res.send("Post saved information");
});

app.get("/numbers", (req, res) => {
  let numbers = "";
  for (let i = 1; i <= 100; i++) {
    numbers += i + "-";
  }
  res.send(numbers);
});

app.get("/findSymmation/:number1/:number2", (req, res) => {
  const num1 = req.params.number1;
  const num2 = req.params.number2;
  const result = Number(num1) + Number(num2);
  res.send(`The sum is: ${result}, and age is: ${req.query.age}`);
});

app.get('/', (req, res) => {
  res.status(200).send('Hello Mohammed Ezzaim!');
});

app.get("/json", (req, res) => {
  res.json({
    name: req.query.name,
    age: req.query.age,
    specialiter: req.query.specialiter,
    mochkile: req.query.mochkile
  });
});

app.get("/seehello", (req, res) => {
  res.send(`Age: ${req.query.age}, Name: ${req.query.name}`);
});

app.get("/code-html", (req, res) => {
  res.send("<html><h1>Mohammed Ezzaim</h1></html>");
});

app.get("/ouvert-fileHtml", (req, res) => {
  let numbers = "";
  for (let i = 1; i <= 100; i++) {
    numbers += i + "-";
  }
  res.render('numbrs.ejs', {
    name: "Mohammed",
    numbers: numbers
  });
});

app.post("/articles", async (req, res) => {
  const newArticle = new Article({
    title: req.body.article,
    body: req.body.body,
    numberOfLikes: req.body.n1 // Assuming this is correct field name
  });
  try {
    const savedArticle = await newArticle.save();
    res.json(savedArticle);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/findAll", async (req, res) => {
  try {
    const articles = await Article.find();
    console.log(articles);
    res.json(articles);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/chercher/:IdChercher", async (req, res) => {
    try {
      const articles = await Article.findById(req.params.IdChercher);
      res.json(articles);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.delete("/suprimer/:articles",async (req,res)=>{
    const id=req.params.articles
    try{
        const article= await Article.findByIdAndDelete(id);
        res.json(article)
    }catch(error){
        console.log("erro de supprstion soory!")
    }
  })
  app.get("/ShowArticles",async (req,res)=>{
    const articles= await Article.find()
    res.render("articles.ejs",{
        allArticles:articles
    })
  })
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
