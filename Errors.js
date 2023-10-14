  //Creating a condition if the gender is male 
  if(data.results[0].gender == 'male') {
    //Creating, "throwing" a new error to say there's bad data
    // in this case it's that there's a guy 
    throw new Error ("Was not expecting a guy");
  }

  //Otherwise just stating the results 
  else {
    console.log("I see", data.results)
  }

  //IMPORTING IN FILE 1
  let x = require("./main.js")
  console.log("in file 1 x=",x)