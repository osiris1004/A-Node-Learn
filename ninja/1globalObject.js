



let globalObject = () =>{

    console.log(`___________________SetTimeout SetInterval clearInterval___________________
the SetTimeout SetInterval clearInterval are executed last because of their defined delay`)
    //console.log(global)  // display all the global object in node js

    // it execute a function which is passed as *first parameter* after a number of second passed as *second parameter*. this is executed once
    setTimeout(()=>{console.log('execude after 5s'); clearInterval(interval)},5000) 


    // execute a function which is passed as *first parameter* after every given second passed as *second parameter*. infinal
    let interval = setInterval(()=>{console.log('execude every 2s')},2000) 

    // the clearInterval(setInterval()) end your setInterval, when the setTimeout is executed



   
    console.log("___________________Directory name and file name___________________")
    console.log( __filename) // print the absolute and file name  EG C:\Users\MaesTro\Desktop\MaesTro (osiris1004)\0-ESGI_Classes_\A++\Node\beginner\app1.js
    console.log(__dirname )// print out the directory where the file is fount


}





let moduleRequire = () =>{
    const people = ["enzo","emmea","elies"]
    console.log(people)

}
module.exports = {

    globalObject : globalObject,
    module_: moduleRequire 
    /* 
_________0r you can do like this_______
        module.exports = {
            globalObject,moduleRequire 
        }
    */

}