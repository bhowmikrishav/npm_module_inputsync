const readline = require("readline"); //readline is inbuilt package of Node

exports.InputSync = async (question)=>{ //mainfuntion for input, Parameters ( question : a string which is printed in the commandline before taking the input from keyboard)
  const r = readline.createInterface({
      input: process.stdin,  //assigining input stream
      output: process.stdout //assigining out stream, if required later on
  });
  return new Promise((resolve, reject) => { //returning Promise Object
    try {
      if(typeof question != 'string'){
        throw Error("1st Parameter 'question' should be type String")
      }
      r.question(question, async (ans) => {
        r.close()
        resolve(ans)
      })
    } catch (e) {
      reject(`${e}`)
    }
  });
}
