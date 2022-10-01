
   // CSSセレクター
   anime({
    targets: ".cssSelector",
    translateX: 180
});

// DOMノード
const domEl = document.querySelector(".domSelector");
const domAnime = anime({
    targets: domEl,
    translateX: 180,
    opacity: 0.5,
    rotate: "1turn"
})

// 複数のアニメーションを組み合わせる
const mPropaty = document.querySelector(".manyPropaty");
const mPropatyAnime = anime({

    targets: mPropaty,
    translateX: {
        value: 180,
        duration: 800
    },
    rotate: {
        value: "1turn",
        delay: 100,
        duration: 1800,
        easing: 'easeInOutQuart'
    },
    scale: {
        value: 1.2,
        delay: 1000,
    }
});

// 配列を用いてアニメーションを順番に表示させる
// elasticity=弾性を持たせる
const arrayPropaty = document.querySelector(".arrayPropaty");
const arrayPropatyAnime = anime({
    targets: arrayPropaty,
    translateX: [
        { value: 250, duration: 1000, delay: 500, elasticity: 500 },
        // { value: 0, duration: 1000, delay: 500, elasticity: 0 }
    ],
    translateY: [
        { value: -40, duration: 500, elasticity: 100 },
        { value: 40, duration: 500, delay: 1000, elasticity: 100 },
        { value: 0, duration: 500, delay: 1000, elasticity: 1000 }
    ],
})

// オートプレイを実装
const autoPlayEl = document.querySelector(".autoPlay");
const aPlayAnime = anime({
    targets: autoPlayEl,
    translateX: 400,
    // loop:true で無限　direction:alternateで0→100%→0%となる。
    loop: true,
    direction: 'alternate',
    // 開始と終わりにディレイをかける事でスムーズな動きを演出
    delay: 100,
    endDelay: 100,
    easing: 'easeInOutSine'
});



