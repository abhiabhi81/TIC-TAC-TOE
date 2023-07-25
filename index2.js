let music = new Audio("music.mp3");
let audioTurn = new Audio("music.mp3");
let gameover = new Audio("music.mp3");
let turn = "X";
let isgameover = false;

const change = ()=>{
    return turn === "X"?"0":"X"
}

        

const cheakWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
        {
            document.getElementById('turn').innerText = boxtext[e[0]].innerText + "won"
            isgameover = true;
            document.querySelector('img').style.display="initial";
            //resetgame();
        }
    })

}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn ;
            turn = change();
            cheakWin();
            if(!isgameover)
            {
                document.getElementById('turn').innerText = "Turn for" + turn;
            }
        }
    })
} )
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
        })
        turn="X";
        isgameover= false;
        document.querySelector('img').style.display = "none";
    

})
