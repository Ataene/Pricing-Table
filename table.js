const pricePlan = document.querySelectorAll("h2 span.price");

const toggleButton = document.querySelector(".checking");

const updateMyDate = document.querySelector("p span#updateMyDate");

toggleButton.addEventListener("change", myClicked);


function myClicked(){

    if(toggleButton.checked){

        console.log(toggleButton.checked);

        for (let i = 0; i < pricePlan.length; i++){

        let myPricePlan = pricePlan[i].innerHTML;
        
        pricePlan[i].innerHTML = myPricePlan * 2;
        }

    } else if(!toggleButton.checked) {

        for (let i = 0; i < pricePlan.length; i++){

        let myPricePlan = pricePlan[i].innerHTML;

        pricePlan[i].innerHTML = myPricePlan / 2;
        }
    }
}

function getCurrentYear() {
    return new Date().getFullYear();
  };

  document.getElementById("updateMyDate").innerHTML = getCurrentYear();