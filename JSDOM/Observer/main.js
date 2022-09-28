

// .img-wrapクラスを全部取得したものを配列として配置する
// 配列で取得すると取り回しがしやすい
let imageItems = [...document.querySelectorAll(".img-wrap")]; 
// console.log(imagesItems); //OK
let titles = [...document.querySelectorAll("h2")];
// console.log(titles); //OK
let titleMessage = document.querySelector(".title");
// console.log(titleMessage); //OK


// 監視を行う場合に付与したい条件を設定することができる
// 例)監視対象が画面から１００ｐｘ入った時に発火させる等
let options = {
    rootMargin: "200px",  //監視位置を設定
    threshold: 0.3,  //監視位置を設定する
}



/************************ 最重要 ******************************
 * 配列のものは個々にオブザーブしてあげる必要がある
 *************************************************************/
let setItemsAction = (entries) => {
    // console.log(entries);
    entries.map((entry)=>{
        // console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("active");
            // console.log("監視対象になりました。")
        }else{
            // 監視対象から外れた場合に削除することで再度出現させる事が出来る
            entry.target.classList.remove("active");
        }
    })
};

// IntersectionObserverAPI 監視することができる
let observer = new IntersectionObserver(setItemsAction, options)

observer.observe(titleMessage);


imageItems.map((item, index) => {
    item.children[0].style.backgroundImage = "url(./images/sample.jpg)";
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item); 
})

titles.map((item , index) => {
    index % 2 == 0 ? (item.style.right = "40%") : (item.style.left = "40%");
    observer.observe(item);
});