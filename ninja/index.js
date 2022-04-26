//GLOBAL_OBJECT
//console.log("____________________MODULE REQUIRE DESTRUCTURING___________")
//destructuring, is using the prop from a file directly in a another file inside {prop, prop}
const { globalObject, module_ } = require("./1globalObject");
// globalObject()
// module_()

//console.log("\n____________________BUILD IN MODULE___________")
//BUILD_IN_MODULE

const {os,readAsyn,write,folderManipulation,fileManipulation} = require("./2buildInModule");
os

readAsyn

write

folderManipulation

fileManipulation

//console.log("\n____________________SERVER 
const {server, serverHtml, serverHtmlGoodWay} = require("./4");


server

// a bad way of sending html 
serverHtml

//the good way to send html file
serverHtmlGoodWay



//console.log("\n____________________EXPRESS
const { expressServ } = require("./5express");

expressServ


//console.log("\n____________________ROUTE_EXPRESS
const { route, redirect } = require("./7routing");

route

redirect


//console.log("\n____________________ROUTE_EXPRESS
const { middlewareFxn } = require("./9middleWare");
middlewareFxn


//console.log("\n____________________MONGOOSE
const { DBmongoose} = require("./10mongo");
DBmongoose


//console.log("\n____________________MODELS + GET_ADD, POST_ADD, GET_ALL, GET_SINGLE
const {GET_ADD, GET_ALL, GET_SINGLE, POST_ADD, GET_ROUT_PARAMS} = require("./11getPostDeletePut");


GET_ADD

GET_ALL

GET_SINGLE

POST_ADD

GET_ROUT_PARAMS


//console.log("\n____________________ROUTE

const app = () =>{

    const express = require('express')
    const { mongoose } = require('mongoose');
    const blogRouter = require("./routes/blogRoute");
    const app = express()
    const port = 8080

    const dbURI = 'mongodb+srv://root:1234@nodetus.zplgp.mongodb.net/note-tuts?retryWrites=true&w=majority'
    mongoose.connect(dbURI)
        .then((value)=>{
            app.listen(port, () => console.log(`our server can listen to request at port http://localhost:${port} since our .mongoose.connect(dbURI) is completed`))
        })
        .catch((err)=>console.log(err))

        // execute your req,res based on blog
        //**app.use(blogRouter)

        // only use this route(blogRoute) when the url begins with /blogs  === scoping url 
        app.use('/blogs',blogRouter)


}

app


//console.log("\n____________________M V C 
const { appMVC } = require("./MVC");

appMVC()











