// var items = [
//     "AWP_Dragon-lore",
//     "M4A4_Howl",
//     "AK47_Wasteland-Rebel",
//     "M4A1-S_Hyper-Beast"
//     ];
//
// var item = items[Math.floor(Math.random()*items.length)];
//
// console.log(item);
//
// var randomNumber = Math.floor((Math.random() * 10000) + 1);
//
// if (randomNumber >= 900) {
//     console.log("YOU WON A DRAGONLORE");
// } else {
//     console.log("you won nothing");
// }


/*------------------------------------ NEW CASE*/

var imgArray = [];

imgArray[0] = new Image();
imgArray[0].src = 'img/cases/rare_item.png';

imgArray[1] = new Image();
imgArray[1].src = 'img/weapons/desert-eagle/naga.png';

imgArray[2] = new Image();
imgArray[2].src = 'img/weapons/ak-47/bloodsport.png';

imgArray[3] = new Image();
imgArray[3].src = 'img/weapons/m4a1-s/m4a1-s_decimator.png';

imgArray[4] = new Image();
imgArray[4].src = 'img/weapons/cz75-auto/xiangliu.png';

imgArray[5] = new Image();
imgArray[5].src = 'img/weapons/usp-s/neo-noir.png';

imgArray[6] = new Image();
imgArray[6].src = 'img/weapons/awp/awp_dragon-lore.png';

/*------------------------------------ END NEW CASE*/

/*------------------------------------ NEW CASE*/

var bravoknives = [];

bravoknives[0] = new Image();
bravoknives[0].src = 'img/weapons/knife/bayonet_gamma-doppler.png';

bravoknives[1] = new Image();
bravoknives[1].src = 'img/weapons/knife/butterfly_marble-fade.png';

bravoknives[2] = new Image();
bravoknives[2].src = 'img/weapons/knife/flip-knife_autotronic.png';

bravoknives[3] = new Image();
bravoknives[3].src = 'img/weapons/knife/huntsman_rust-coat.png';

bravoknives[4] = new Image();
bravoknives[4].src = 'img/weapons/knife/karambit_doppler.png';

bravoknives[5] = new Image();
bravoknives[5].src = 'img/weapons/knife/shadow-daggers_fade.png';


/*------------------------------------ END NEW CASE*/
document.getElementById("opencase").onclick = function() {open_case()};


function open_case() {
    // var won = imgArray[Math.floor(Math.random()*imgArray.length)];
    var randomNumber = Math.floor((Math.random() * 10000) + 1);
    var won;
    var open = true;

    if (randomNumber > 1 && randomNumber < 50) {

        won = imgArray[0];
        var knive = document.getElementById("wonItem").appendChild(won);
        setTimeout(function(){
            var randomKnife = bravoknives[Math.floor(Math.random()*imgArray.length)];
             knive = document.getElementById("wonItem").appendChild(randomKnife);
        },2000);

    } if (randomNumber > 51 && randomNumber < 3999) {

        won = imgArray[1];
        document.getElementById("wonItem").appendChild(won);

    }if (randomNumber > 4000 && randomNumber < 6999) {

        won = imgArray[2];
        document.getElementById("wonItem").appendChild(won);

    } if (randomNumber > 7000 && randomNumber < 7999) {

        won = imgArray[3];
        document.getElementById("wonItem").appendChild(won);

    } if (randomNumber > 8000 && randomNumber < 8999) {

        won = imgArray[4];
        document.getElementById("wonItem").appendChild(won);

    } if (randomNumber > 9000 && randomNumber < 9600) {

        won = imgArray[5];
        document.getElementById("wonItem").appendChild(won);

    } if (randomNumber > 9601 && randomNumber < 10000) {

        won = imgArray[6];
        document.getElementById("wonItem").appendChild(won);

    }

    if (open === true) {
        document.getElementById("openBravoCase").style.display="none";
        document.getElementById("tryAgain").style.display="block";
    }

    // var won = imgArray[Math.floor(Math.random()*imgArray.length)];
    // console.log(won);
    // document.getElementById("spin").appendChild(won);


}

// function nextImage(element)
// {
//     var img = document.getElementById(element);
//
//     for(var i = 0; i < imgArray.length;i++)
//     {
//         if(imgArray[i].src === img.src) // << check this
//         {
//             if(i === imgArray.length){
//                 document.getElementById(element).src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById(element).src = imgArray[i+1].src;
//             break;
//         }
//     }
// }
