
const playerContainer=document.querySelectorAll(".player-container")
const playerInput=document.querySelector(".playerName");
const options=document.querySelectorAll(".option")
let playerName;
playerInput.addEventListener("input",()=>{
    if(playerInput!=="") playerName=playerInput.value;
    else return
})

playerContainer.forEach((player)=>{
    player.addEventListener("click",()=>{
        if(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/.test(playerName)){
            player.textContent=playerName;
            playerName=""
            playerInput.value=""
        } else return
        
    })
})

options.forEach((option)=>{
    option.addEventListener("input",()=>{
        if(option.value=="mco") document.querySelector(".pitch-container").style.gridTemplateAreas = `
                                                                                        ". . dc . ."
                                                                                        "ei . . . ed"
                                                                                        ". . mco . ."
                                                                                        ". mc2 . mc1 ."
                                                                                        "li . . . ld"
                                                                                        ". dfc2 . dfc1 ."
                                                                                        ". . arq . ."
                                                                                        `;
        else document.querySelector(".pitch-container").style.gridTemplateAreas=`
                                                                                        ". . dc . ."
                                                                                        "ei . . . ed"
                                                                                        ". mc2 . mc1 ."
                                                                                        ". . mco . ."
                                                                                        "li . . . ld"
                                                                                        ". dfc2 . dfc1 ."
                                                                                        ". . arq . ."
                                                                                        `;
    })
})