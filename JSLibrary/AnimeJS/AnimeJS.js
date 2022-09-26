// CSSセレクター

anime({
  targets: ".cssSelector",
  translateX: 180
});

// DOMノード
let dom_play_button = document.querySelector("domSelector_button").onclick = function(){
    console.log("click")
        elements.classList.toggle("play")
}
let element = document.querySelectorAll('.domSelector');

anime({
    targets: ".domSelector.play",
    translateX:180,
    opacity:0.5,
})