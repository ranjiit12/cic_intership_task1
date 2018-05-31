function onCurrencySelected(text){
    var amount;
    var giveAmount = document.getElementById("input").value;
    var displayAmount = document.getElementById("display");;
    // if(giveAmount && typeof giveAmount === "number")

    switch(text){
        
        case "US Dollar":
         console.log("us")
          amount = Math.round(giveAmount*1.33);
          amount = 
          displayAmount.innerHTML = "<h3>"+ "The Converted Value is: " + amount +  " Us Dollar </h3>"
          break;

        case "Indian Rupee":
        console.log("ind")
            amount = Math.round(giveAmount*89.57);
            displayAmount.innerHTML = "<h3>"+ "The Converted Value is: " + amount +  " Indian Rupee </h3>"
            break;
        case "Pkr":
             console.log("pkr"); 
             amount = Math.round(giveAmount*153.80);
             displayAmount.innerHTML = "<h3>"+ "The Converted Value is: " + amount +  " Pakistani Rupee </h3>"
             break;     
        default :
        displayAmount.innerHTML = "<h3>Please enter correct amount</h3>"
              
    }
}