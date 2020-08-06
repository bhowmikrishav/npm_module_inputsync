const InputSync = require("inputsync")

main()

async function main(){

  try {
    var person = {}
    
    person["name"] = await InputSync.getline("Name : ")
    
    person["age"] = Number(await InputSync.getline("Age : "))
    
    const n1 = (Math.floor(Math.random()*500)%50),
          n2 = (Math.floor(Math.random()*500)%50)
          
    person["an_key"] = Number(await InputSync.getline(`Captcha ${n1} + ${n2} : `))

    if (person["an_key"] == (n1+n2)) {
      console.log("All good");
      console.log(person);
    }else{
      console.log("Incorrect Captcha");
    }
  }
  catch (e) {
    console.error(e);
  }
}
