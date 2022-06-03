// show cart

(function () {
  const cartInfo = document.getElementById("cart-info");

  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();

//add items in to cart

(function () {
  const cartBtn = document.querySelectorAll(".store-item-icon");

  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      //console.log(event.target.parentElement.classList)
      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        //console.log(pos);
        let partPath = fullPath.slice(pos);
        
        const item ={};
        item.img=`img-cart${partPath}`;

        //let name =  event.target.parentElement.parentElement.nextElemetSibling.children[0].children[0].textContent;
        
        // console.log(name);
        

      }
    });
  });
})();
