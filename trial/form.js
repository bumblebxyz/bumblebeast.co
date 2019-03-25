 //Set up an associative array
 //The keys represent the shape of the travel
 //The values represent the cost of the travel i.e A round travel cost's $200
 var travel_prices = new Array();
 travel_prices["travel1"]=0;
 travel_prices["travel2"]=35000;
 travel_prices["travel3"]=70000;
// travel_prices["travel4"]=550;

 var spindle_prices = new Array();
 spindle_prices['spindle1']=0;
 spindle_prices['spindle2']=-1500;
 spindle_prices['spindle3']=6000;
 //spindle_prices['spindle4']=300;

 var paccuracy_prices = new Array();
 paccuracy_prices['paccuracy1']=0;
 paccuracy_prices['paccuracy2']=-1000;
 paccuracy_prices['paccuracy3']=4000;
 //paccuracy_prices['paccuracy4']=800;
 //paccuracy_prices['paccuracy5']=4300;
 
var cooling_prices = new Array();
cooling_prices['cooling1']=0;
cooling_prices['cooling2']=-1200;
cooling_prices['cooling3']=3000;

var leveling_prices = new Array();
leveling_prices['leveling1']=0;
leveling_prices['leveling2']=2000;
leveling_prices['leveling3']=-300;

var compressor_prices = new Array();
compressor_prices['compressor1']=0;
compressor_prices['compressor2']=1300;
compressor_prices['compressor3']=2000;

var axis_prices = new Array();
axis_prices['axis1']=0;
axis_prices['axis2']=2000;
axis_prices['axis3']=3500;
axis_prices['axis4']=8000;

var probing_prices = new Array();
probing_prices['probing1']=0;
probing_prices['probing2']=500;
probing_prices['probing3']=1500;
probing_prices['probing4']=2500;


 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
 //We use this this array when the user selects a filling from the form
 var warranty_prices= new Array();
 warranty_prices["None"]=0;
 warranty_prices["1year"]=0;
 warranty_prices["2year"]=1000;
 warranty_prices["3year"]=1800;
 /*
 filling_prices["Mocha"]=8;
 filling_prices["Raspberry"]=10;
 filling_prices["Pineapple"]=5;
 filling_prices["Dobash"]=9;
 filling_prices["Mint"]=5;
 filling_prices["Cherry"]=5;
 filling_prices["Apricot"]=8;
 filling_prices["Buttercream"]=7;
 filling_prices["Chocolate Mousse"]=12;
 */
 
	 
	 
// getTravelPrice() finds the price based on the shape of the travel.
// Here, we need to take user's the selection from radio button selection
function getTravelPrice()
{  
    var travelPrice = 0;
    //Get a reference to the form id="Bumblebeastform"
    var theForm = document.forms["Bumblebeastform"];
    //Get a reference to the travel the user Chooses name=selectedTravel":
    var selectedTravel = theForm.elements["selectedtravel"];
    //Here since there are 4 radio buttons selectedTravel.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedTravel.length; i++)
    {
        //if the radio button is checked
        if(selectedTravel[i].checked)
        {
            //we set travelPrice to the value of the selected radio button
            //i.e. if the user choose the round travel we set it to 250
            //by using the travel_prices array
            //We get the selected Items value
            //For example travel_prices["travel1".value]"
            travelPrice = travel_prices[selectedTravel[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the travelPrice
    return travelPrice;
}

function getSpindlePrice()
{
    var spindlePrice = 0;
    var theForm = document.forms["Bumblebeastform"];
    var selectedSpindle = theForm.elements["selectedspindle"];

    for(var i = 0; i < selectedSpindle.length; i++)
    {
        if(selectedSpindle[i].checked)
        {
            spindlePrice = spindle_prices[selectedSpindle[i].value];
            break;
        }
    }

    return spindlePrice;
}

function getPaccuracyPrice()
{
    var paccuracyPrice = 0;
    var theForm = document.forms["Bumblebeastform"];
    var selectedPaccuracy = theForm.elements["selectedpaccuracy"];

    for(var i = 0; i < selectedPaccuracy.length; i++)
    {
        if(selectedPaccuracy[i].checked)
        {
            paccuracyPrice = paccuracy_prices[selectedPaccuracy[i].value];
            break;
        }
    }

    return paccuracyPrice;
}

function getCoolingPrice()
{
    var coolingPrice = 0;
    var theForm = document.forms["Bumblebeastform"];
    var selectedCooling = theForm.elements["selectedcooling"];

    for(var i = 0; i < selectedCooling.length; i++)
    {
        if(selectedCooling[i].checked)
        {
            coolingPrice = cooling_prices[selectedCooling[i].value];
            break;
        }
    }

    return coolingPrice;
}

function getLevelingPrice()
{
    var levelingPrice = 0;
    var theForm = document.forms["Bumblebeastform"];
    var selectedLeveling = theForm.elements["selectedleveling"];

    for(var i = 0; i < selectedLeveling.length; i++)
    {
        if(selectedLeveling[i].checked)
        {
            levelingPrice = leveling_prices[selectedLeveling[i].value];
            break;
        }
    }

    return levelingPrice;
}

function getCompressorPrice()
{
    var compressorPrice = 0;
    var theForm = document.forms["Bumblebeastform"];
    var selectedCompressor = theForm.elements["selectedcompressor"];

    for(var i = 0; i < selectedCompressor.length; i++)
    {
        if(selectedCompressor[i].checked)
        {
            compressorPrice = compressor_prices[selectedCompressor[i].value];
            break;
        }
    }

    return compressorPrice;
}

function getAxisPrice()
{
    var axisPrice = 0;
    var theForm = document.forms["Bumblebeastform"];
    var selectedAxis = theForm.elements["selectedaxis"];

    for(var i = 0; i < selectedAxis.length; i++)
    {
        if(selectedAxis[i].checked)
        {
            axisPrice = axis_prices[selectedAxis[i].value];
            break;
        }
    }

    return axisPrice;
}

function getProbingPrice()
{
    var probingPrice = 0;
    var theForm = document.forms["Bumblebeastform"];
    var selectedProbing = theForm.elements["selectedprobing"];

    for(var i = 0; i < selectedProbing.length; i++)
    {
        if(selectedProbing[i].checked)
        {
            probingPrice = probing_prices[selectedProbing[i].value];
            break;
        }
    }

    return probingPrice;
}

function getLinearCoolingPrice()
{
    var linearCoolingPrice = 0;
    var theForm = document.forms["Bumblebeastform"];
    var includeLinearCooling = theForm.elements["includelinearcooling"];

    if(includeLinearCooling.checked == true)
    {
        linearCoolingPrice = 3000;
    }

    return linearCoolingPrice;
}

function getMotionDowngradePrice()
{
    var motionDowngradePrice = 0;
    var theForm = document.forms["Bumblebeastform"];
    var includeMotionDowngrade = theForm.elements["includemotiondowngrade"];

    if(includeMotionDowngrade.checked == true)
    {
        motionDowngradePrice = -400;
    }

    return motionDowngradePrice;
}

//This function finds the warranty price based on the 
//drop down selection
function getWarrantyPrice()
{
    var warrantyPrice = 0;
    //Get a reference to the form id="Bumblebeastform"
    var theForm = document.forms["Bumblebeastform"];
    //Get a reference to the select id="warranty"
    var selectedWarranty = theForm.elements["warranty"];
     
    //set warrantyPrice equal to value user chose
    //For example warranty_prices["2year".value] would be equal to 400
    warrantyPrice = warranty_prices[selectedWarranty.value];

    //finally we return warrantyPrice
    return warrantyPrice;
}

//installPrice() finds the installation price based on a check box selection
function installPrice()
{
    var installPrice = 0;
    //Get a reference to the form id="Bumblebeastform"
    var theForm = document.forms["Bumblebeastform"];
    //Get a reference to the checkbox id="includecandles"
    var includeInstall = theForm.elements["includeinstall"];

    //If they checked the box set installPrice to 1500
    if(includeInstall.checked == true)
    {
        installPrice = 1500;
    }
    //finally we return the candlePrice
    return installPrice;
}

function insciptionPrice()
{
    //This local variable will be used to decide whether or not to charge for the inscription
    //If the user checked the box this value will be 20
    //otherwise it will remain at 0
    var inscriptionPrice=0;
    //Get a refernce to the form id="Bumblebeastform"
    var theForm = document.forms["Bumblebeastform"];
    //Get a reference to the checkbox id="includeinscription"
    var includeInscription = theForm.elements["includeinscription"];
    //If they checked the box set inscriptionPrice to 20
    if(includeInscription.checked==true){
        inscriptionPrice=20;
    }
    //finally we return the inscriptionPrice
    return inscriptionPrice;
}

function defaultPrice()
{
    var defaultNo = document.getElementById('defaultNo');
    var basePrice = document.getElementById('basePrice');
    basePrice.styple.display = defaultNo.checked ? 'none' : 'block';
}

function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var BumblebeastPrice = 20000 + getTravelPrice() + getSpindlePrice() + getPaccuracyPrice()  + getCoolingPrice() + getLevelingPrice() + getCompressorPrice() + getAxisPrice() + getProbingPrice() + getLinearCoolingPrice() + getMotionDowngradePrice() + getWarrantyPrice() + installPrice() ;
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For Your Unique Bumblebeast $" + BumblebeastPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}