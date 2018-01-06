/*
* index.js main file
* purpose : basic routing
* author : Nikita Shah
* created on : 1/6/2018
*/

//inject required modules
let express = require('express');
let bodyPareser = require('body-parser');

let app = express();

// global variables
let arr = [];

app.use(bodyPareser.json());


/*
* METHOD : GET
* PURPOSE : Display text on web page .
* PARAM {req} : incoming request object .
* PARAN {res} :  response object .
* RETURN : text */

app.get('/',(req,res) => {
    res.send('Hello world !');
});


/*
* METHOD : POST
* PURPOSE : post an array .
* PARAM {req} : incoming request object
* PARAN {res} :  response object
* RETURN : array */

app.post('/array',(req,res) => {
    arr = req.body.array;
    //console.log(arr);
    res.send(arr);
});

/*
* METHOD : PATCH
* PURPOSE : update ith element of an array .
* PARAM {req} : incoming request object
* PARAN {res} :  response object
* RETURN : array element */
app.patch('/up/:id',(req,res) => {
    let index = req.params.id;
    let newVal = req.query.newVal;
    arr[index] = +newVal ;          // is equal to : arr[index] = Number(newVal);
    // console.log(newVal);
    res.send(arr);
});

/*
* METHOD : DELETE
* PURPOSE : delete ith element of an array .
* PARAM {req} : incoming request object
* PARAN {res} :  response object
* RETURN : array element */

app.delete('/del/:id',(req,res) => {
    let index = req.params.id;
    arr.splice(index,1);
    //console.log(arr);
    res.send(arr);
});

/*
* METHOD : PUT
* PURPOSE : display range of element of an array .
* PARAM {req} : incoming request object
* PARAN {res} :  response object
* RETURN : array element(s) */

app.put('/dis',(req,res) => {
    let sp = req.query.strt;
    let ep = req.query.en;
    res.send(arr.slice(sp,ep));
});

/*
* METHOD : PUT
* PURPOSE : display possible maximum number  with combination of array elements .
* PARAM {req} : incoming request object
* PARAN {res} :  response object
* RETURN : maximum */

app.put('/max',(req,res) => {
    arr.sort();
    arr.reverse();
    let str = new String('');
    arr.forEach((e) => {
        str+=e;
    });
    res.send('maximum number : '+str);
});

/*
* METHOD : PUT
* PURPOSE : display possible minimum number  with combination of array elements .
* PARAM {req} : incoming request object
* PARAN {res} :  response object
* RETURN : minimum */

app.put('/min',(req,res) => {
    arr.sort();
    let str = new String('');
    arr.forEach((e) => {
        str+=e;
    });
    res.send('maximum number : '+str);
});

/*
* METHOD : LISTEN
* PURPOSE : starts service on given port number
* PARAM {req} : incoming request object
* PARAN {res} :  response object
*/

app.listen(3000,(err) => {
    if(err){
        console.log('error : ',err);
    }
    console.log('Server is up on port : 3000');
});