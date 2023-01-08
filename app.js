let openBtn = document.getElementById("open-btn"),
    closeBtn = document.getElementById("close-btn"),
    mobileMenuComp = document.querySelector(".mob-menu"),
    header = document.querySelector("header"),
    mobileContent = document.querySelector(".mob-prod-cont"),
    lightBox = document.querySelector(".light-box"),
    lightBoxCloseBtn = document.querySelector(".light-box .close"),
    desktopContent = document.querySelector(".deskt-prod"),
    mainProductImg = document.querySelector(".main-prod-img"),
    // actualPrice = document.querySelectorAll(".act-price-val"),
    // discountPercentage = document.querySelectorAll(".percent"),
    orderNum = document.querySelector(".order-num"),
    quantity = document.querySelectorAll(".qty"),
    discountedPrice = document.querySelectorAll(".disc-price"),
    productName = document.querySelectorAll(".type"),
    prodThumbImg = document.getElementById("thumb-1"),
    minusBtn = document.querySelectorAll(".minus"),
    plusBtn = document.querySelectorAll(".plus"),
    addToCartBtn = document.querySelectorAll(".add-to-cart-btn"),
    cartThumbImg = document.querySelectorAll(".checkout-thumb"),
    cartName = document.querySelectorAll(".cart-type-name"),
    cartQtyVal = document.querySelectorAll(".qty-val"),
    cartPrice = document.querySelectorAll(".cart-price"),
    cartTotalAmount = document.querySelectorAll(".cart-total"),
    cartIcon = document.getElementById("cart-icon"),
    checkoutCart = document.querySelectorAll(".checkout-cart"),
    cartDetails = document.querySelectorAll(".checkout"),
    emptyCart = document.querySelectorAll(".empty"),
    lightMainImg = document.getElementById("light-main-img"),
    lightThumbImgOne = document.getElementById("light-thumb-1"),
    lightThumbImgTwo = document.getElementById("light-thumb-2"),
    lightThumbImgThree = document.getElementById("light-thumb-3"),
    lightThumbImgFour = document.getElementById("light-thumb-4"),
    mainImg = document.getElementById("main-img"),
    thumbImgOne = document.getElementById("thumb-1"),
    thumbImgTwo = document.getElementById("thumb-2"),
    thumbImgThree = document.getElementById("thumb-3"),
    thumbImgFour = document.getElementById("thumb-4"),
    mainImage = document.querySelectorAll(".m-img"),
    thumbDiv = document.querySelectorAll(".thumb-div"),
    thumbImages = document.querySelectorAll(".desk-thumb-imgs"),
    deleteBtn = document.querySelectorAll(".delete"),
    prevBtn = document.querySelectorAll(".prev-btn"),
    nextBtn = document.querySelectorAll(".next-btn"),
    image = document.querySelector(".images");

var imagesToLoad = [
                    "./images/image-product-1.jpg", 
                    "./images/image-product-2.jpg",
                    "./images/image-product-3.jpg",
                    "./images/image-product-4.jpg"
                ];
var counta = 0;
var countb = 0;

nextBtn.item(0).addEventListener("click", function(){
    if(counta >= imagesToLoad.length-1) return;
    counta++
    image.setAttribute("src", imagesToLoad[counta]);
});

prevBtn.item(0).addEventListener("click", function(){
    if(counta <= imagesToLoad.length && counta > 0){
        counta--
        image.setAttribute("src", imagesToLoad[counta]);
    }
    else{
        return;
    }    
});

nextBtn.item(1).addEventListener("click", function(){
    if(countb >= imagesToLoad.length-1) return;
    countb++
    lightMainImg.setAttribute("src", imagesToLoad[countb]);
});

prevBtn.item(1).addEventListener("click", function(){
    if(countb <= imagesToLoad.length && countb > 0){
        countb--
        lightMainImg.setAttribute("src", imagesToLoad[countb]);
    }
    else{
        return;
    }    
});

openBtn.addEventListener("click", function(){
    mobileMenuComp.classList.toggle("show");
    mobileContent.classList.toggle("opac");
    header.classList.toggle("opac");
});

closeBtn.addEventListener("click", function(){
    mobileMenuComp.classList.toggle("show");
    mobileContent.classList.toggle("opac");
    header.classList.toggle("opac");
});

mainProductImg.addEventListener("click", function(){
    lightBoxContent();
    lightBox.classList.toggle("light-prop");
    desktopContent.classList.toggle("opac");
});

lightBoxCloseBtn.addEventListener("click", function(){
    // lightBox.classList.toggle("show");
    lightBox.classList.toggle("light-prop");
    desktopContent.classList.toggle("opac");
});

cartIcon.addEventListener("click", function(){
    if(orderNum.textContent === "0" || orderNum.textContent === ""){
        cartDetails.forEach(details => details.classList.add("hide"));
        emptyCart.forEach(empty => empty.classList.add("show"));
    }
    else{
        cartDetails.forEach(details => details.classList.remove("hide"));
        emptyCart.forEach(empty => empty.classList.remove("show"));
    }
    checkoutCart.forEach(cart => cart.classList.toggle("show"));
});

deleteBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        orderNum.textContent = "";
        cartDetails.forEach(details => details.classList.add("hide"));
        emptyCart.forEach(empty => empty.classList.add("show"));
        quantity.forEach(qty => qty.innerHTML = "0");
    });
});

addToCartBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        checkoutCart.forEach(cart => {
            if(cart.classList.contains("show")){
                cart.classList.remove("show");
            }
        });
        let imgSrc = prodThumbImg.getAttribute("src");
        cartThumbImg.forEach(cartImg => {
            cartImg.setAttribute("src", imgSrc);
        });
        productName.forEach(pname => {
            cartName.forEach(cname => {
                cname.textContent = pname.textContent;
            });
        });
        quantity.forEach(qty => {
            orderNum.textContent = qty.textContent;
            cartQtyVal.forEach(cqty => {
                cqty.textContent = qty.textContent;
                discountedPrice.forEach(dscp => {
                    cartPrice.forEach(cprc => {
                        cprc.textContent = dscp.textContent;
                        cartTotalAmount.forEach(total => {
                            total.textContent = (parseFloat(cprc.textContent) * parseFloat(cqty.textContent)).toFixed(2);
                        });
                    });
                });
            });
        });
    });
});

plusBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        quantity.forEach(function(qty){
            var value = qty.innerHTML;
            qty.innerHTML = ++value;
            // console.log(value);
            return
        })
    });
});

minusBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        quantity.forEach(function(qty){
            var value = qty.innerHTML;
            qty.innerHTML = --value;
            // console.log(value);
            return
        })
    });
});

window.onload = onLoad;

function onLoad(){
    thumbDiv.item(0).classList.toggle("div-thumb-props");
    thumbDiv.item(4).classList.toggle("div-thumb-props");
    thumbImages.item(0).classList.toggle("thumb-props");
    thumbImages.item(4).classList.toggle("thumb-props");
}

function lightBoxContent(){
    lightMainImg.setAttribute("src", mainImg.getAttribute("src"));
    lightThumbImgOne.setAttribute("src", thumbImgOne.getAttribute("src"));
    lightThumbImgTwo.setAttribute("src", thumbImgTwo.getAttribute("src"));
    lightThumbImgThree.setAttribute("src", thumbImgThree.getAttribute("src"));
    lightThumbImgFour.setAttribute("src", thumbImgFour.getAttribute("src"));
};

thumbImages.item(0).addEventListener("click", function(){
    thumbDiv.item(0).classList.toggle("div-thumb-props");
    thumbDiv.item(1).classList.remove("div-thumb-props");
    thumbDiv.item(2).classList.remove("div-thumb-props");
    thumbDiv.item(3).classList.remove("div-thumb-props");
    thumbDiv.item(4).classList.toggle("div-thumb-props");
    thumbDiv.item(5).classList.remove("div-thumb-props");
    thumbDiv.item(6).classList.remove("div-thumb-props");
    thumbDiv.item(7).classList.remove("div-thumb-props");
    mainImage.forEach(img => img.setAttribute("src", "./images/image-product-1.jpg"));
    thumbImages.item(0).classList.toggle("thumb-props");
    thumbImages.item(1).classList.remove("thumb-props");
    thumbImages.item(2).classList.remove("thumb-props");
    thumbImages.item(3).classList.remove("thumb-props");
    thumbImages.item(4).classList.toggle("thumb-props");
    thumbImages.item(5).classList.remove("thumb-props");
    thumbImages.item(6).classList.remove("thumb-props");
    thumbImages.item(7).classList.remove("thumb-props");
});
thumbImages.item(1).addEventListener("click", function(){
    thumbDiv.item(1).classList.toggle("div-thumb-props");
    thumbDiv.item(0).classList.remove("div-thumb-props");
    thumbDiv.item(2).classList.remove("div-thumb-props");
    thumbDiv.item(3).classList.remove("div-thumb-props");
    thumbDiv.item(5).classList.toggle("div-thumb-props");
    thumbDiv.item(4).classList.remove("div-thumb-props");
    thumbDiv.item(6).classList.remove("div-thumb-props");
    thumbDiv.item(7).classList.remove("div-thumb-props");
    mainImage.forEach(img => img.setAttribute("src", "./images/image-product-2.jpg"));
    thumbImages.item(1).classList.toggle("thumb-props");
    thumbImages.item(0).classList.remove("thumb-props");
    thumbImages.item(2).classList.remove("thumb-props");
    thumbImages.item(3).classList.remove("thumb-props");
    thumbImages.item(5).classList.toggle("thumb-props");
    thumbImages.item(4).classList.remove("thumb-props");
    thumbImages.item(6).classList.remove("thumb-props");
    thumbImages.item(7).classList.remove("thumb-props");
});
thumbImages.item(2).addEventListener("click", function(){
    thumbDiv.item(2).classList.toggle("div-thumb-props");
    thumbDiv.item(1).classList.remove("div-thumb-props");
    thumbDiv.item(0).classList.remove("div-thumb-props");
    thumbDiv.item(3).classList.remove("div-thumb-props");
    thumbDiv.item(6).classList.toggle("div-thumb-props");
    thumbDiv.item(4).classList.remove("div-thumb-props");
    thumbDiv.item(5).classList.remove("div-thumb-props");
    thumbDiv.item(7).classList.remove("div-thumb-props");
    mainImage.forEach(img => img.setAttribute("src", "./images/image-product-3.jpg"));
    thumbImages.item(2).classList.toggle("thumb-props");
    thumbImages.item(1).classList.remove("thumb-props");
    thumbImages.item(0).classList.remove("thumb-props");
    thumbImages.item(3).classList.remove("thumb-props");
    thumbImages.item(6).classList.toggle("thumb-props");
    thumbImages.item(4).classList.remove("thumb-props");
    thumbImages.item(5).classList.remove("thumb-props");
    thumbImages.item(7).classList.remove("thumb-props");
});
thumbImages.item(3).addEventListener("click", function(){
    thumbDiv.item(3).classList.toggle("div-thumb-props");
    thumbDiv.item(1).classList.remove("div-thumb-props");
    thumbDiv.item(2).classList.remove("div-thumb-props");
    thumbDiv.item(0).classList.remove("div-thumb-props");
    thumbDiv.item(7).classList.toggle("div-thumb-props");
    thumbDiv.item(4).classList.remove("div-thumb-props");
    thumbDiv.item(5).classList.remove("div-thumb-props");
    thumbDiv.item(6).classList.remove("div-thumb-props");
    mainImage.forEach(img => img.setAttribute("src", "./images/image-product-4.jpg"));
    thumbImages.item(3).classList.toggle("thumb-props");
    thumbImages.item(1).classList.remove("thumb-props");
    thumbImages.item(2).classList.remove("thumb-props");
    thumbImages.item(0).classList.remove("thumb-props");
    thumbImages.item(7).classList.toggle("thumb-props");
    thumbImages.item(4).classList.remove("thumb-props");
    thumbImages.item(5).classList.remove("thumb-props");
    thumbImages.item(6).classList.remove("thumb-props");
});
thumbImages.item(4).addEventListener("click", function(){
    thumbDiv.item(4).classList.toggle("div-thumb-props");
    thumbDiv.item(5).classList.remove("div-thumb-props");
    thumbDiv.item(6).classList.remove("div-thumb-props");
    thumbDiv.item(7).classList.remove("div-thumb-props");
    thumbDiv.item(0).classList.toggle("div-thumb-props");
    thumbDiv.item(1).classList.remove("div-thumb-props");
    thumbDiv.item(2).classList.remove("div-thumb-props");
    thumbDiv.item(3).classList.remove("div-thumb-props");
    mainImage.forEach(img => img.setAttribute("src", "./images/image-product-1.jpg"));
    thumbImages.item(4).classList.toggle("thumb-props");
    thumbImages.item(5).classList.remove("thumb-props");
    thumbImages.item(6).classList.remove("thumb-props");
    thumbImages.item(7).classList.remove("thumb-props");
    thumbImages.item(0).classList.toggle("thumb-props");
    thumbImages.item(1).classList.remove("thumb-props");
    thumbImages.item(2).classList.remove("thumb-props");
    thumbImages.item(3).classList.remove("thumb-props");
});
thumbImages.item(5).addEventListener("click", function(){
    thumbDiv.item(5).classList.toggle("div-thumb-props");
    thumbDiv.item(4).classList.remove("div-thumb-props");
    thumbDiv.item(6).classList.remove("div-thumb-props");
    thumbDiv.item(7).classList.remove("div-thumb-props");
    thumbDiv.item(1).classList.toggle("div-thumb-props");
    thumbDiv.item(0).classList.remove("div-thumb-props");
    thumbDiv.item(2).classList.remove("div-thumb-props");
    thumbDiv.item(3).classList.remove("div-thumb-props");
    mainImage.forEach(img => img.setAttribute("src", "./images/image-product-2.jpg"));
    thumbImages.item(5).classList.toggle("thumb-props");
    thumbImages.item(4).classList.remove("thumb-props");
    thumbImages.item(6).classList.remove("thumb-props");
    thumbImages.item(7).classList.remove("thumb-props");
    thumbImages.item(1).classList.toggle("thumb-props");
    thumbImages.item(0).classList.remove("thumb-props");
    thumbImages.item(2).classList.remove("thumb-props");
    thumbImages.item(3).classList.remove("thumb-props");
    
});
thumbImages.item(6).addEventListener("click", function(){
    thumbDiv.item(6).classList.toggle("div-thumb-props");
    thumbDiv.item(4).classList.remove("div-thumb-props");
    thumbDiv.item(5).classList.remove("div-thumb-props");
    thumbDiv.item(7).classList.remove("div-thumb-props");
    thumbDiv.item(2).classList.toggle("div-thumb-props");
    thumbDiv.item(1).classList.remove("div-thumb-props");
    thumbDiv.item(0).classList.remove("div-thumb-props");
    thumbDiv.item(3).classList.remove("div-thumb-props");
    mainImage.forEach(img => img.setAttribute("src", "./images/image-product-3.jpg"));
    thumbImages.item(6).classList.toggle("thumb-props");
    thumbImages.item(4).classList.remove("thumb-props");
    thumbImages.item(5).classList.remove("thumb-props");
    thumbImages.item(7).classList.remove("thumb-props");
    thumbImages.item(2).classList.toggle("thumb-props");
    thumbImages.item(1).classList.remove("thumb-props");
    thumbImages.item(0).classList.remove("thumb-props");
    thumbImages.item(3).classList.remove("thumb-props");
});
thumbImages.item(7).addEventListener("click", function(){
    thumbDiv.item(7).classList.toggle("div-thumb-props");
    thumbDiv.item(4).classList.remove("div-thumb-props");
    thumbDiv.item(5).classList.remove("div-thumb-props");
    thumbDiv.item(6).classList.remove("div-thumb-props");
    thumbDiv.item(3).classList.toggle("div-thumb-props");
    thumbDiv.item(1).classList.remove("div-thumb-props");
    thumbDiv.item(2).classList.remove("div-thumb-props");
    thumbDiv.item(0).classList.remove("div-thumb-props");
    mainImage.forEach(img => img.setAttribute("src", "./images/image-product-4.jpg"));
    thumbImages.item(7).classList.toggle("thumb-props");
    thumbImages.item(4).classList.remove("thumb-props");
    thumbImages.item(5).classList.remove("thumb-props");
    thumbImages.item(6).classList.remove("thumb-props");
    thumbImages.item(3).classList.toggle("thumb-props");
    thumbImages.item(1).classList.remove("thumb-props");
    thumbImages.item(2).classList.remove("thumb-props");
    thumbImages.item(0).classList.remove("thumb-props");
});