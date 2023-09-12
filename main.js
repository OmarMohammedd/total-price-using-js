                    //طريقة الرايق

// const updateTotalPrice = () => {
//   const AllProducts = document.querySelectorAll(".product");

//   let total = 0;

//   AllProducts.forEach((item) => {
//     const price = Number(
//       item.getElementsByClassName("price")[0].innerText.replace("$", "")
//     );
//     const quantity = Number(
//       item.getElementsByClassName("input-quantity")[0].value
//     );
//     total = total + price * quantity;
//   });
//   document.getElementById("total-price").innerText = `  ${total}  $`;
// };

// const container = document.getElementById("container");
// container.addEventListener("change", (eo) => {
//   updateTotalPrice();
// });

// const calc = document.getElementById("calc");
// calc.addEventListener("click", (eo) => {
//   updateTotalPrice();
// });



                    // طريقتي
const updatetotal = () => {
  const allproducts = document.querySelectorAll(".product");

  let total = 0;

  allproducts.forEach((item) => {
    const price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );
    const quantity = Number(
      item.getElementsByClassName("input-quantity")[0].value
    );

    total = total + price * quantity;
    document.getElementById("total-price").innerText = ` $ ${total} `;
  });
}


const calc = document.getElementById("calc");
calc.addEventListener("click", () => {
  updatetotal();
});



const container = document.getElementById("container")
container.addEventListener("change", () => {
  updatetotal();
})
