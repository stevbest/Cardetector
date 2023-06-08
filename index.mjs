
var card_container = document.getElementById('card');
var card_no = document.getElementById('txtcardno');
var card_sec_pin = document.getElementById('txtcardsecpin');



var sgnt = document.getElementById('hiddenpin');
var cardno = document.getElementById('cardnumber');
var cardname = document.getElementById('cardinfo__name');

var foundcard = () =>{
    sgnt.innerHTML = card_sec_pin.value;
    cardno.innerHTML = card_no.value;
    cardname.innerHTML = 'MONDAY S. O.';
}

// click btn to check serie is equal or greater than 3
document.getElementById('btndetect').onclick = () =>{
    if(card_sec_pin.value.length > 3 ||
         card_sec_pin.value.length < 3)
    {
        card_sec_pin.style.background = 'rgba(248, 0, 0, 0.5)';
        card_container.style.display = "none";
        // alert('check');
    }
    else{
        card_container.style.display = "block";
        card_sec_pin.style.background = 'rgba(255, 255, 255, 0.1)';
        foundcard();

    }
};