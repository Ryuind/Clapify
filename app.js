


let wub = "👏"

function annoyify(){
    let wubBefore = document.querySelector(".beforeWub").value;
    let wubToSpaces = document.querySelector(".spaceWub").value;
    let wubAfter = document.querySelector(".afterWub").value;
    let song = document.querySelector(".lyrics").value;

    function a(){  

        let beforeTurnWub = wub.repeat(wubBefore) + song;
        let spaceTurnWub = beforeTurnWub.replace(/ /g, wub.repeat(wubToSpaces));
        let afterTurnWub = spaceTurnWub + wub.repeat(wubAfter);
        document.getElementById("result").innerHTML = afterTurnWub;
    }
    a()
};