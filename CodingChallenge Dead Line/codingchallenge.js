let displayEl = document.getElementById("dispay-el")

// creating a constant variable in which to genereate random unchangeable characters which will then be used as part of
// the array that will generate random colours
const colourHexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

// this function (getRandomCharacterColour) is to obtain random characters from the const variable colourHexCharacters (characters which have been given
//as options)
function getRandomCharacterColour (iColour) {
    return colourHexCharacters[iColour]
}


// the purpose of the creatNewColour funtion is to use a for loop that randomises the characters collected from
// getRandomCharacterColour and creating a 6 character long random number with a mixture of letters. This random string then
// has a # insterted to the beginning as a way of creating a colour hex code. The function createNewColour then returns a complete
//colour hex which can be used to randomise the colour of the text, which will be added to the paragraph
// which at this point still hasn't been generated. I decided to go with this method because the colour which will generated
//will most likely be unique and the likelihood of the same colour being repeated is significantly low, although not 0
let arrColour = []
function createNewColour () {
    let colourRep = "#"

    for (let iColour = 0; iColour < 6; iColour++)  {
    const randomColour = Math.floor (Math.random() * colourHexCharacters.length)
    colourRep += getRandomCharacterColour(randomColour)
    }
    return colourRep
}


//The purpose of the createRandomText function is to create a random string which will then be used to populate the contents of
//paragraph element when the add line button is pressed
let arrText = []
function createRandomText() {
    let randomText = (Math.random() ).toString(36).replace(".","") 
    return randomText
  }


//The purpose of this function is to ultimately add a new line to the display element of the paragraph by assigning both of the
//variables, textReceiver and colourReceiver, to the funtions which create the random colorur and text. these variables are then
// in an array (each of them in their relative array) 
function addText () {
    
    
    //let btnClickCounter = 0
    //let btnLink = document.getElementById("addLineButton")
    //btnLink.addEventListener("click", function () {
    //btnClickCounter += +1
   //alert(btnClickCounter)
    //})  
    var buttonClicksCount = 0
    var buttonTracker = document.getElementById("addLineButton")
    buttonTracker.onclick = function () {
    buttonClicksCount++
    console.log(buttonClicksCount)
    let textReceiver = createRandomText()
    let colourReceiver = createNewColour()
    arrText = [textReceiver] 
    arrColour = [colourReceiver]
    receiveText() 

    if (buttonClicksCount >= 9 ) {
        alert("Max Number of Text added")
        buttonTracker.disabled = true
        buttonTracker.style.visibility = "hidden"
    }

}
}   



//The purpose of this function is to assign the text colour and the random text to the display element, although when it comes to the
//colour element i have not found a way to change the individual colour of the text but i will be looking for solutions. this function
//is called upon when the Add Line button is activated and in doing so the text within the array can be outputed 
function receiveText () {
    const para = document.createElement("p")
    const node = document.createTextNode (arrText)
    node.length = Math.min (node.length, 9)

    para.appendChild(node)
    para.style.color = arrColour

    const element = document.getElementById("dispay-el")
    element.appendChild(para)


}


//with this function the idea is to remove the last item within the array, I have managed to extract the last line but I am having
//problems with being able to remove that line and any other previous line because i seem to be only storing only the last item entered
//within the array. I will also be looking into solutions that may solve this problem. The funtion is called whenever the Remove Line
//button is clicked, but currently has no actual functionality
function removeLine () {
    var buttonTracker = document.getElementById("addLineButton")
    buttonTracker.style.visibility = "visible"
    buttonTracker.disabled = false
}


//not exactly sure if this is the desired funtion necessary but this function is called when the Rest Page button is clicked and what
//it does is simply set the text content of the display element to nothing meaning the display element is emptied without having to 
//refresh the entire page
function resetPage() {  
}
