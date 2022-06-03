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

        

        let name =  event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        
        let price  =  event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
        
        let finalPrice = price.slice(1).trim();
        
        item.name=name;
        item.price=finalPrice;

       // console.log(item);

       const cartItem = document.createElement('div');
       cartItem.classList('cart-Item','d-flex','justify-content-between','text-capitalize','my-3');

       cartItem.innerHTML=` 
       <img src="${item.img}" class="img-fluid 
       rounded-circle" id="item-img" alt="">
       <div class="item-text">

         <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
         <span>$</span>
         <span id="cart-item-price" class="cart-item-price" 
         class="mb-0">${item.price}</span>
       </div>
       <a href="#" id='cart-item-remove' class="cart-item-remove">
         <i class="fas fa-trash"></i>
       </a>
     </div>`;
      }
    });
  });
})();
