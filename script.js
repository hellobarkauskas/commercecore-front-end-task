const productInCart = document.getElementById("product-in-cart-container");
const removeProductButton = document.getElementById("remove-product-from-cart");

productInCart.addEventListener("mouseover", () => {
    removeProductButton.classList.add("show")
});

productInCart.addEventListener("mouseout", () => {
  removeProductButton.classList.remove("show")
});