
  
  //document.getElementsByClassName("IngredientsDiv").className = "dropdown-content"



// Slider
let slides = ['container0', 'container1', 'container2', 'container3']

function hideAllSlides() {
  slides.forEach(function(slide){
    $('#' + slide).hide()
  })
}

function handleButtons(state){
  if (state === 0){
    $('#previous').prop('disabled', true)
  } else {
    $('#previous').prop('disabled', false) 
  }

  if (state === 1){

    // display user choice for Shampoo
    var HairTypeInput = $('#SelectTypeOfHair').find(":selected").text()
    document.getElementById("HairTypeInput").innerHTML = HairTypeInput;

    var HairFlavorInput = $('#HairSelectFlavor').find(":selected").text()
    document.getElementById("HairFlavorInput").innerHTML = HairFlavorInput;

    var HairQuantityInput = $('#HairSelectQuantity').find(":selected").text()
    document.getElementById("HairQuantityInput").innerHTML = HairQuantityInput;

    // display user choice for Soap
    var SoapTypeInput = $('#SelectTypeSoap').find(":selected").text()
    document.getElementById("SoapTypeInput").innerHTML = SoapTypeInput;

    var SoapFlavorInput = $('#SoapSelectFlavor').find(":selected").text()
    document.getElementById("SoapFlavorInput").innerHTML = SoapFlavorInput;

    var SoapQuantityInput = $('#SoapSelectQuantity').find(":selected").text()
    document.getElementById("SoapQuantityInput").innerHTML = SoapQuantityInput;
    
    // display user choice for Cream Body
    var CreamTypeInput = $('#CreamSelectType').find(":selected").text()
    document.getElementById("CreamTypeInput").innerHTML = CreamTypeInput;

    var CreamFlavorInput = $('#CreamSelectFlavor').find(":selected").text()
    document.getElementById("CreamFlavorInput").innerHTML = CreamFlavorInput;

    var CreamQuantityInput = $('#CreamSelectQuantity').find(":selected").text()
    document.getElementById("CreamQuantityInput").innerHTML = CreamQuantityInput;

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
    // display user choice for Shampoo
    var HairTypeInput = $('#SelectTypeOfHair').find(":selected").text()
    document.getElementById("HairTypeInputP2").innerHTML = HairTypeInput;

    var HairFlavorInput = $('#HairSelectFlavor').find(":selected").text()
    document.getElementById("HairFlavorInputP2").innerHTML = HairFlavorInput;
    
    var HairQuantityInput = $('#HairSelectQuantity').find(":selected").text()
    document.getElementById("HairQuantityInputP2").innerHTML = HairQuantityInput;

    // display user choice for Soap
    var SoapTypeInput = $('#SelectTypeSoap').find(":selected").text()
    document.getElementById("SoapTypeInputP2").innerHTML = SoapTypeInput;
    
    var SoapFlavorInput = $('#SoapSelectFlavor').find(":selected").text()
    document.getElementById("SoapFlavorInputP2").innerHTML = SoapFlavorInput;

    var SoapQuantityInput = $('#SoapSelectQuantity').find(":selected").text()
    document.getElementById("SoapQuantityInputP2").innerHTML = SoapQuantityInput;
    
    // display user choice for Cream Body
    var CreamTypeInput = $('#CreamSelectType').find(":selected").text()
    document.getElementById("CreamTypeInputP2").innerHTML = CreamTypeInput;
    
    var CreamFlavorInput = $('#CreamSelectFlavor').find(":selected").text()
    document.getElementById("CreamFlavorInputP2").innerHTML = CreamFlavorInput;

    var CreamQuantityInput = $('#CreamSelectQuantity').find(":selected").text()
    document.getElementById("CreamQuantityInputP2").innerHTML = CreamQuantityInput;

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

    // trigger data input in database
    $('.SubmitButton').click(function(){
      
      var NameUser = document.getElementById('nameform').value;
      console.log(NameUser)
      
      // input for column 'contact'
      var ContactUser = document.getElementById('contactform').value;
      console.log(ContactUser)
      
      // input for column 'pickup'
      var LocationPickUp = $('#SelectPickUp').find(":selected").text()
      console.log(LocationPickUp)
      
      // input for column 'message'
      var MessageUser = document.getElementById('messageform').value;
      console.log(MessageUser)
      
      // input for column 'orderShampoo'
      console.log(HairTypeInput)
      console.log(HairFlavorInput)
      console.log(HairQuantityInput)
      
      // input for column 'orderSoap'
      console.log(SoapTypeInput)
      console.log(SoapFlavorInput)
      console.log(SoapQuantityInput)
      
      // input for column 'orderCream'
      console.log(CreamTypeInput)
      console.log(CreamFlavorInput)
      console.log(CreamQuantityInput)
      
      // input for column 'orderPrice'
      console.log(TotalPrice)
      
      try {
        const order = {
          first_name: NameUser,
          contact: ContactUser,
          Pickup: LocationPickUp,
          Message: MessageUser,
          OrderShampoo: HairTypeInput, HairFlavorInput, HairQuantityInput,
          OrderSoap: SoapTypeInput, SoapFlavorInput, SoapQuantityInput,
          OrderCream: CreamTypeInput, CreamFlavorInput, CreamQuantityInput,
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
      
    })
  }

  if (state === 3){
    $('#next').prop('disabled', true).hide()
    $('#previous').prop('disabled', true).hide()

  } else {
    $('#next').prop('disabled', false)
    $('#previous').prop('disabled', false) 
  }
}

$(document).ready(function(){
  hideAllSlides()
  let state = 0
  $('#' + slides[state]).show() 
  
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
