// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!


let stone = null
let pickUp = true

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  let currentRow = row.getAttribute("data-row")
  console.log("Yay, we clicked an item", row)
  console.log("Here is the stone's id: ", row.id)
  console.log("Here is the stone's data-size: ", currentRow)
  // alternate between picking up the stone and dropping it
  if (pickUp == true) {
    pickUpStone(row.id)
  }
  else {
    dropStone(row.id, stone)
  }
  
} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  let selectedRow = document.getElementById(rowID);
  // remove the last stone on the selected row
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  pickUp = false
}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID, stone) => {
  // get the last stone of the selected row
  let child =  document.getElementById(rowID).lastElementChild
  // compare the last stone of that row with the stone we want to drop on top
  // only allow drop if it is smaller than the last one in the row
  if (child == null || child.id > stone.id) {
    document.getElementById(rowID).appendChild(stone)
    stone = null
    pickUp = true
  }
  else {
    window.alert("can't place stone here")
  }
  checkForWin()
  
}

const checkForWin = () => {
  let topRow = document.getElementById("top-row").childElementCount
  let midRow = document.getElementById("middle-row").childElementCount
  // check if either the top or middle row have all 4 stones
  if (topRow == 4 || midRow == 4) {
    setTimeout(() => {
      window.alert("YOU WIN!")
    }, 500);
    
  }

}

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

