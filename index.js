function rolldice(){
    const num=document.getElementById("num").value;
    const result =document.getElementById("result");
    const diceimages =document.getElementById("diceimages");
    const values =[];
    const images =[];
    for(let i=0; i<num; i++){
        const value =Math.floor(Math.random()*6)+1;
       // console.log(value);
       values.push(value);
       images.push(`<img src="dice_imgs/${value}.png">`);
    }
    result.textContent =`dice: ${values}`;
    diceimages.innerHTML =images.join('');

}