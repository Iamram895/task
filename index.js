document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");

  containers.forEach((container) => {
    const product = container.querySelector(".product-containers");

    product.addEventListener("click", function () {
      container.classList.toggle("expanded");
    });
  });
});
