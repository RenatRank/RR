let roll = document.querySelector(".inputBtn");
let container = document.querySelector(".contnr");
let inputText = document.querySelector(".textBox").value;
let erase_text = document.querySelector(".eraseBtn");
let dices = "";
let Arrayvalue = 0;
let timesArray = [];
let diceTypeArray = [];
let rolls = [];
let rollSeparate =[];
let randomnr = 0;
let sum = 0;
roll.addEventListener("click",(event)=>{
    dices = document.querySelector(".textBox").value;
    dices = dices.split(/[d+]+/);
    let dices_array_length = dices.length;
    for (i=0; i<dices_array_length; i++){
        Arrayvalue = dices[i];
        if(i % 2 === 0){
            timesArray.push(Arrayvalue);
        }
        else
        {
            diceTypeArray.push(Arrayvalue);
        }}
console.log(dices_array_length);
    for (i=0; i<dices_array_length; i++){
        for(let j = 0; j < timesArray[i]; j++){
            randomnr = Math.floor(Math.random() * Arrayvalue+1);
            while(randomnr == 0 || randomnr > diceTypeArray[i])
            {
                randomnr = Math.floor(Math.random() * Arrayvalue);
            }
            console.log(diceTypeArray[i]);

            if(diceTypeArray[i] == 20 && randomnr == 20){
                rolls.push(diceTypeArray[i]+'d: ' + randomnr+ ' (critical hit)');
            }else if(diceTypeArray[i] == 20 && randomnr == 1){
                rolls.push('d'+diceTypeArray[i]+": " + randomnr+ ' (critical miss)');
            } else{
                rolls.push('d'+diceTypeArray[i]+": " + randomnr);
            }
            rollSeparate.push(randomnr);
        }
    }
    let rollsSeparate = rolls.join("<br />");
    //console.log(rolls);
    document.querySelector(".contnr").innerHTML = rollsSeparate;

    for (let i=0;i<rollSeparate.length;i++){
        sum = sum + rollSeparate[i];
        //console.log(sum);
    }
    document.querySelector(".sum").innerHTML = rollSeparate.join("+")+"="+sum;
})
erase_text.addEventListener("click",(event)=>{
    document.querySelector(".textBox").value = '';
    window.location.reload();
})