const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

const xlsx=require('xlsx')
let wb=xlsx.readFile('data.xlsx');
let ws=wb.Sheets['Sheet1'];
let data=xlsx.utils.sheet_to_json(ws);

// your code

app.get('/',  (req, res)=> {
  res.send('Hello World')
})

app.get('/Students',  (req, res)=> {
    // data=[
    //     {id:1,name:'mhmd'},
    //     {id:2,name:'ali'},
    //     {id:3,name:'fadi'},
    //     {id:4,name:'hsen'}
    // ]
    res.send(data)
  })

  app.get('/data',  (req, res)=> {
    let names=[];
    data.forEach(element => {
      names.push(element.name)

      
    });
    res.send(names)
  })
  


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});