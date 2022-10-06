
        // practice Area
        // マウスの動きに合わせて座標を取得
        document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            //　座標を登録する
            gsap.to(".circle", {
                x: mouseX,
                y: mouseY,
                // プラスとマイナスで動きが反転する
                stagger: -0.05,
            })

            gsap.set(".cursor", {
                x: mouseX,
                y: mouseY,
            })

        })



        // PRACTICE02
        const image = document.querySelector(".image");
        const slider = document.querySelector(".slider");
        const p02H1 = document.querySelector(".p02__h1");
        let tl = gsap.timeline();


        tl.fromTo(image, 1, {
            height: "0%",
            ease: Power4.easeInOut,
        }, {
            height: "40%"
        }).fromTo(image, 0.5, {
            width:"100%"
        }, {
            width: "80%"
        }).fromTo(slider,1,{
            y:"-100%"
        },{
            y:"0"
        },"-=0.5").fromTo(p02H1,1,{
            opacity:0,
            y:10
        },{
            opacity:1,
            y:0,
        },"-=.5")




        // sec01 Area
        // let tl = gsap.timeline();
        tl.to(".content", { backgroundColor: "black", duration: 1 })
            .to(".title", { ease: "power4.inOut", opacity: 1, duration: 1 })
            .to(".text", { ease: "power4.inOut", duration: 1, opacity: 1 })


        // sec02
        const sec02 = document.querySelector(".sec02__content");

        const sec02Hover = document.querySelector(".sec02__content__hover");


        // block クラスのdivタグを５０個生成して containerクラスの子要素として配置する。
        for (let i = 0; i <= 99; i++) {
            const blocks = document.createElement("div");
            blocks.classList.add("block");
            sec02.appendChild(blocks);
        };



        gsap.fromTo(

            ".block",
            {
                duration: 2,
                scale: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 10,
                    // グリット要素の縦横を合わせる
                    grid: [10, 10],
                    // グリットに対して真ん中を指定（上の縦横数があってないときれいにアニメーションしない）
                    from: "center",
                    ease: "power4.in",
                    amount: 0.5,
                }
            }, {
            duration: 2,
            scale: 1,
            ease: "power1.inOut",
            stagger: {
                each: 10,
                grid: [10, 10],
                from: "center",
                ease: "ease-in-out",
                amount: 0.5,
                repeat: -1
            }

        });


        for (let i = 0; i <= 500; i++) {
            const blocks = document.createElement("div");
            blocks.classList.add(`hoverBlock`);
            blocks.classList.add(`hoverBlock${i}`);
            sec02Hover.appendChild(blocks);

            blocks.addEventListener("mouseover", () => {
                gsap.from(`.hoverBlock${i}`, {
                    duration: 2,
                    scale: 1.2,
                    ease: "power4.inOut",
                    backgroundColor: "red",
                }
                    //  ,{
                    //     duration:2,
                    //     scale:0,
                    //     ease:"power4.inOut",
                    //     backgroundColor:"#a6bba6",
                    // }
                )
            });
        }






// ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

// Cがトリガーとなってすべての要素が発火する
gsap.set(".sbox",{autoAlpha:0});
gsap.to(".sbox",{
    scrollTrigger:{
        trigger:".a",

        // end:"+=300",  //startと同様こちらは計算で終わりを指定出来る
        endTriger:".c",  //要素を指定して終わりを決める事も出来る

        start: 'top 80%', //スタート位置を指定出来る
        // start: [要素], [ウィンドウズ]を指している px,%指定も可能
        markers: true, //スクロール発火位置を表示してくれる優れモノ

        toggleActions:"play restart none none", // アニメーションを再表示するかどうか
        // toggleActions:onEnter(入る), onLeave(出る), onEnterBack(下から戻り入る), onLeaveBack(下から出る)
    },
    x:400,
    rotation:360,
    duration:2,
    autoAlpha:1,
    scrub: true,
})

gsap.set(".sbox_batch",{autoAlpha:0})
ScrollTrigger.batch(".sbox_batch",{
    onEnter: batch => gsap.to(batch,{
        y:100,
        rotation:360,
        duration:0.5,
        autoAlpha:1,
        stagger:0.1,
        batchMax:3,


    })
   
})
