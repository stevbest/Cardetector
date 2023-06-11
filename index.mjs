

// query all variables
var cardarea = document.getElementById('card_display');
var entryarea = document.getElementById('card_entry');



var btndetect = document.getElementById('btn_check');

//get card details
var cardsecpin = document.getElementById('centre__secpin');
var cardno = document.getElementById('centre__cardno');
var cardname = document.getElementById('cardname');


//hide card area
cardarea.addEventListener('click', ()=>{
    cardarea.style.display = 'none';
    entryarea.style.display = 'flex';
});


//show card area if condition met
btndetect.onclick = ()=>{
    var txtcardno = document.getElementById('card_no');
    var txtsecpin = document.getElementById('card_sec');
    var inputValue = txtsecpin.value.trim();
    if(inputValue.length == 3){

        cardsecpin.innerHTML = txtsecpin.value;
        cardno.innerHTML = txtcardno.value;
        cardname.innerHTML = 'MONDAY S. O.';
        cardarea.style.display = 'block';
        entryarea.style.display = 'none';
    }
}