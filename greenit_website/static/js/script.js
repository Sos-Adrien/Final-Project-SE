
// When the user clicks on div, open the popup
function myFunctionPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

// Slider
let slides = ['container0', 'container1', 'container2', 'container3']

function hideAllSlides() {
  slides.forEach(function(slide){
    $('#' + slide).hide()
  })
}

function handleButtons(state){
  if (state === 0){
    // smoothly scroll to the top of the container
    var element = document.getElementById("main");
    element.scrollIntoView({
      behavior: 'smooth'
    });

    $('#previous').prop('disabled', true).hide()
  } else {
    $('#previous').prop('disabled', false).show()
  }

  if (state === 1){
    // smoothly scroll to the top of the container
    var element = document.getElementById("main");
    element.scrollIntoView({
      behavior: 'smooth'
    });

    // display user choice for Shampoo
    var HairQuantityInput = $('#HairSelectQuantity').find(":selected").text()
    var HairTypeInput = $('#SelectTypeOfHair').find(":selected").text()
    var HairFlavorInput = $('#HairSelectFlavor').find(":selected").text()
    var match = HairQuantityInput.match(/(\d+)/)
    var CompareQuantity = match[0]

    if (CompareQuantity == 0){
      document.getElementById("HairTypeInput").innerHTML = "You chose 0 piece";
      document.getElementById("HairFlavorInput").innerHTML = "";
      document.getElementById("HairQuantityInput").innerHTML = "";
    } else {
      document.getElementById("HairTypeInput").innerHTML = HairTypeInput;
      document.getElementById("HairFlavorInput").innerHTML = HairFlavorInput;
      document.getElementById("HairQuantityInput").innerHTML = HairQuantityInput;
    };
    
    // display user choice for Shampoo 
    var SoapTypeInput = $('#SelectTypeSoap').find(":selected").text()
    var SoapFlavorInput = $('#SoapSelectFlavor').find(":selected").text()
    var SoapQuantityInput = $('#SoapSelectQuantity').find(":selected").text()
    var match2 = SoapQuantityInput.match(/(\d+)/)
    var CompareQuantity2 = match2[0]
    
    if (CompareQuantity2 == 0){
      document.getElementById("SoapTypeInput").innerHTML = "You chose 0 piece";
      document.getElementById("SoapFlavorInput").innerHTML = "";
      document.getElementById("SoapQuantityInput").innerHTML = "";
    } else {
      document.getElementById("SoapTypeInput").innerHTML = SoapTypeInput;
      document.getElementById("SoapFlavorInput").innerHTML = SoapFlavorInput;
      document.getElementById("SoapQuantityInput").innerHTML = SoapQuantityInput;
    };
    
    // display user choice for Cream Body
    var CreamTypeInput = $('#CreamSelectType').find(":selected").text()
    var CreamFlavorInput = $('#CreamSelectFlavor').find(":selected").text()
    var CreamQuantityInput = $('#CreamSelectQuantity').find(":selected").text()
    var match3 = CreamQuantityInput.match(/(\d+)/)
    var CompareQuantity3 = match3[0]

    if (CompareQuantity3 == 0){
      document.getElementById("CreamTypeInput").innerHTML = "You chose 0 piece";
      document.getElementById("CreamFlavorInput").innerHTML = "";
      document.getElementById("CreamQuantityInput").innerHTML = "";
    } else {
      document.getElementById("CreamTypeInput").innerHTML = CreamTypeInput;
      document.getElementById("CreamFlavorInput").innerHTML = CreamFlavorInput;
      document.getElementById("CreamQuantityInput").innerHTML = CreamQuantityInput;
    };

    // display price
    var PS = document.getElementById("priceShampoo").innerHTML
    var priceShampoo = parseFloat(PS)
    var QShampoo = parseFloat(HairQuantityInput)

    var PSo = document.getElementById("priceSoap").innerHTML
    var priceSoap = parseFloat(PSo)
    var QSoap = parseFloat(SoapQuantityInput)

    var PC = document.getElementById("priceCream").innerHTML
    var priceCream = parseFloat(PC)
    var QCream = parseFloat(CreamQuantityInput)

    var TotalPrice = (priceShampoo * QShampoo) + (priceSoap * QSoap) + (priceCream * QCream)
    document.getElementById("TotalPrice").innerHTML = "Total : " + TotalPrice + "€";

    document.getElementById("next").className = "buttonNext"
    document.getElementById("next").innerHTML = "Next"

  } else if (state === 2){
    // smoothly scroll to the top of the container
    var element = document.getElementById("main");
    element.scrollIntoView({
      behavior: 'smooth'
    });

    // display user choice for Shampoo
    var HairQuantityInput = $('#HairSelectQuantity').find(":selected").text()
    var HairTypeInput = $('#SelectTypeOfHair').find(":selected").text()
    var HairFlavorInput = $('#HairSelectFlavor').find(":selected").text()
    var match = HairQuantityInput.match(/(\d+)/)
    var CompareQuantity = match[0]

    if (CompareQuantity == 0){
      document.getElementById("HairTypeInputP2").innerHTML = "You chose 0 piece";
      document.getElementById("HairFlavorInputP2").innerHTML = "";
      document.getElementById("HairQuantityInputP2").innerHTML = "";
    } else {
      document.getElementById("HairTypeInputP2").innerHTML = HairTypeInput;
      document.getElementById("HairFlavorInputP2").innerHTML = HairFlavorInput;
      document.getElementById("HairQuantityInputP2").innerHTML = HairQuantityInput;
    };
    
    // display user choice for Shampoo 
    var SoapTypeInput = $('#SelectTypeSoap').find(":selected").text()
    var SoapFlavorInput = $('#SoapSelectFlavor').find(":selected").text()
    var SoapQuantityInput = $('#SoapSelectQuantity').find(":selected").text()
    var match2 = SoapQuantityInput.match(/(\d+)/)
    var CompareQuantity2 = match2[0]
    
    if (CompareQuantity2 == 0){
      document.getElementById("SoapTypeInputP2").innerHTML = "You chose 0 piece";
      document.getElementById("SoapFlavorInputP2").innerHTML = "";
      document.getElementById("SoapQuantityInputP2").innerHTML = "";
    } else {
      document.getElementById("SoapTypeInputP2").innerHTML = SoapTypeInput;
      document.getElementById("SoapFlavorInputP2").innerHTML = SoapFlavorInput;
      document.getElementById("SoapQuantityInputP2").innerHTML = SoapQuantityInput;
    };
    
    // display user choice for Cream Body
    var CreamTypeInput = $('#CreamSelectType').find(":selected").text()
    var CreamFlavorInput = $('#CreamSelectFlavor').find(":selected").text()
    var CreamQuantityInput = $('#CreamSelectQuantity').find(":selected").text()
    var match3 = CreamQuantityInput.match(/(\d+)/)
    var CompareQuantity3 = match3[0]

    if (CompareQuantity3 == 0){
      document.getElementById("CreamTypeInputP2").innerHTML = "You chose 0 piece";
      document.getElementById("CreamFlavorInputP2").innerHTML = "";
      document.getElementById("CreamQuantityInputP2").innerHTML = "";
    } else {
      document.getElementById("CreamTypeInputP2").innerHTML = CreamTypeInput;
      document.getElementById("CreamFlavorInputP2").innerHTML = CreamFlavorInput;
      document.getElementById("CreamQuantityInputP2").innerHTML = CreamQuantityInput;
    };

    // display price
    var PS = document.getElementById("priceShampoo").innerHTML
    var priceShampoo = parseFloat(PS).toFixed(2)
    var QShampoo = parseFloat(HairQuantityInput)

    var PSo = document.getElementById("priceSoap").innerHTML
    var priceSoap = parseFloat(PSo).toFixed(2)
    var QSoap = parseFloat(SoapQuantityInput)

    var PC = document.getElementById("priceCream").innerHTML
    var priceCream = parseFloat(PC).toFixed(2)
    var QCream = parseFloat(CreamQuantityInput)

    var TotalPrice = (priceShampoo * QShampoo) + (priceSoap * QSoap) + (priceCream * QCream)
    document.getElementById("TotalPriceP2").innerHTML = "Total : " + TotalPrice + "€";

    document.getElementById("next").className = "SubmitButton"
    document.getElementById("next").innerHTML = "Submit"
  }

  if (state === 3){
    $('#next').prop('disabled', true).hide()
    $('#previous').prop('disabled', true).hide()

    // smoothly scroll to the top of the container
    var element = document.getElementById("main");
    element.scrollIntoView({
      behavior: 'smooth'
    });

    // trigger data input in database
      
    var NameUser = document.getElementById('nameform').value;
    // user input for column 'contact'
    var ContactUser = document.getElementById('contactform').value;
    // user input for column 'pickup'
    var LocationPickUp = $('#SelectPickUp').find(":selected").text()
    // user input for column 'message'
    var MessageUser = document.getElementById('messageform').value;
    // user input for Shampoo
    var HairTypeInput = $('#SelectTypeOfHair').find(":selected").text()
    var HairFlavorInput = $('#HairSelectFlavor').find(":selected").text()
    var HairQuantityInput = $('#HairSelectQuantity').find(":selected").text()
    // user input for Soap
    var SoapTypeInput = $('#SelectTypeSoap').find(":selected").text()
    var SoapFlavorInput = $('#SoapSelectFlavor').find(":selected").text()
    var SoapQuantityInput = $('#SoapSelectQuantity').find(":selected").text()
    // user input for Cream Body
    var CreamTypeInput = $('#CreamSelectType').find(":selected").text()
    var CreamFlavorInput = $('#CreamSelectFlavor').find(":selected").text()
    var CreamQuantityInput = $('#CreamSelectQuantity').find(":selected").text()
    // var price
    var PS = document.getElementById("priceShampoo").innerHTML
    var priceShampoo = parseFloat(PS)
    var QShampoo = parseFloat(HairQuantityInput)

    var PSo = document.getElementById("priceSoap").innerHTML
    var priceSoap = parseFloat(PSo)
    var QSoap = parseFloat(SoapQuantityInput)

    var PC = document.getElementById("priceCream").innerHTML
    var priceCream = parseFloat(PC)
    var QCream = parseFloat(CreamQuantityInput)

    var TotalPrice = (priceShampoo * QShampoo) + (priceSoap * QSoap) + (priceCream * QCream)
    
    try {
      const order = {
        first_name: NameUser,
        contact: ContactUser,
        Pickup: LocationPickUp,
        Message: MessageUser,
        OrderShampoo: HairTypeInput + HairFlavorInput + HairQuantityInput,
        OrderSoap: SoapTypeInput + SoapFlavorInput + SoapQuantityInput,
        OrderCream: CreamTypeInput + CreamFlavorInput + CreamQuantityInput,
        Price: TotalPrice,
      };
      
      const options = {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json'
        }
      };

      fetch('/ordered', options)
      .then(res => res.json()).catch(error => console.log(error))
      .then(res => console.log(res));

    } catch(error){
        return Promise.reject(res.status);
    }

  } else {
    $('#next').prop('disabled', false)
    $('#previous').prop('disabled', false)
  }
}

$(document).ready(function(){
  hideAllSlides()
  let state = 0
  $('#' + slides[state]).show()
  $('#previous').prop('disabled', true).hide()

  $('#next').click(function(){
    hideAllSlides()
    state += 1
    $('#' + slides[state]).show()
    handleButtons(state)
  })

  $('#previous').click(function(){
    hideAllSlides()
    state -= 1
    $('#' + slides[state]).show()
    handleButtons(state)
  })

});
