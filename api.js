const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.get('/',  (req, res)=> {
  res.send('Hello World')
})

app.get('/Students',  (req, res)=> {
    data=[
        {id:1,name:'mhmd'},
        {id:2,name:'ali'},
        {id:3,name:'fadi'},
        {id:4,name:'hsen'}
    ]
    res.send(data)
  })
  


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});