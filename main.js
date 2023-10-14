//This is the start of script 
console.log("starting my script");

function returnPerson () {
//It's fetching the api, which is a function that will pull a random person 
//This one is fetching the request from the API URL 
fetch("https://randomuser.me/api?results=10")

.then(function(response){
  //make a note that the request is fullfilled 
  console.log("request is fullfilled, we have a response")
  //execute the "response", which is the request being fullfilled 
  return response.json()
})

//This one is getting the data out of the "response"
.then(function(data){
  console.log("The data we got back", data)

  //use a loop to go through all of the results in the data, and then print out a list item for each one 
  for (let index = 0; index < data.results.length; index++) {
    let newListItem = document.createElement("li");
    newListItem.innerText = data.results[index].name.first
    document.getElementById("info").appendChild(newListItem);
  }
  

})

//Telling javascript how to handle the error when it "catches" it 
.catch(function(error){
  console.error("Something failed along the way:", error.message)
})

}

//this is the end of script
console.log("end my script")


let x = "Bob"
//EXPORTING
module.exports = x