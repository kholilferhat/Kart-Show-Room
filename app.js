const carProduct = [
  {
    id: 1,
    name: "Fortuner",
    harga: 50000,
    total: 0,
    imageUrl: `https://media.rivian.com/rivian-main/image/upload/f_auto/q_auto:eco,w_1000,c_fit/v1665606408/rivian-com/home%20page/vehicle-picker/R1T-1_i4armg.png`
  },
  {
    id: 2,
    name: "Avanza",
    harga: 20000,
    total: 0,
    imageUrl: `https://media.rivian.com/rivian-main/image/upload/f_webp/q_auto:eco,w_1000,c_fit/v1636340006/rivian-com/home%20page/vehicles/r1s/R1S-2_pddmx1.png`
  }

];
const toggle = document.getElementById("home");
const toggleCheckout = document.getElementById("checkout");

function hideDashboard() {
  toggle.classList.toggle("hidden");
  toggleCheckout.classList.toggle("hidden");
}

function renderData() {
  html = "";
  for (let i = 0; i < carProduct.length; i++) {
    html += `<div id="product${i + 1}" class="productCard-2-row">
                <div class="productCardImage" >
                    <h4 id="productName">${carProduct[i].name}</h4>
                    <img src="${carProduct[i].imageUrl}"
                        alt="">
                        <div class="productCardHarga"> $${carProduct[i].harga}</div>
                    <button type="button" style:"background-color: white;" id="item1" onclick="addItemToCart(${carProduct[i].id
      })" class="button-Card">Order Now</button>
                </div>
            </div>`;
  }
  let objHtml = document.getElementById("productData"); // object
  objHtml.innerHTML = html;
}

renderData();

function addItemToCart(val) {
  let cartItem = document.getElementById("isActive");
  cartItem.classList.remove("hidden");
  const x = carProduct.find((x) => x.id == parseInt(val));
  x.total += 1;
  renderDataCheckOut(x.total);
}

function renderDataCheckOut(total) {
  tempHtml = "";
  let totalItem = 0;
  for (let i = 0; i < carProduct.length; i++) {
    totalItem += carProduct[i].total;
    if (carProduct[i].total !== 0) {
      tempHtml += `<li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
            <h6 class="my-0">${carProduct[i].name}</h6>
            <small class="text-body-secondary">qty ${total}</small>
            
        </div>
        <div>
            <h6 class="my-0" style="margin-top:10px";>$${carProduct[i].harga * total}</h6>
        </div>
        <div>
            <button class="buttondelete" onclick="deleteItem(${carProduct[i].id})">Delete
            </button>
        </div>
        
        
    </li>`;
    }
  }
  let totalItemVal = document.getElementById("value");
  totalItemVal.innerHTML = totalItem;
  let objHtml = document.getElementById("checkOut"); // object
  objHtml.innerHTML = tempHtml;
}
renderDataCheckOut();

// add function empty cart revised by ami
function deleteItem(id) {
  const item = carProduct.find((product) => product.id === id);
  if (item.total === 1) {
    // If there's only one item, remove it from the cart entirely
    const index = carProduct.findIndex((product) => product.id === id);
    carProduct.splice(index, 1);
  } else {
    // Otherwise, decrease the total quantity by one
    item.total--;
  }

  let totalData = 0;
  carProduct.forEach((product) => (totalData += product.total));
  renderDataCheckOut(totalData);
}

function clearCart() {
  carProduct.forEach((item) => (item.total = 0));
  renderDataCheckOut(0);
}

// Add event listener to the "Clear Cart" button
const clearCartButton = document.getElementById("clearCartButton");
clearCartButton.addEventListener("click", clearCart);
// =======================
function deleteItem(id) {
  carProduct.splice(id, 1);
  let totalData = 0;
  const data = carProduct.map((val) => (totalData += val.total));
  console.log(data);
  renderDataCheckOut(totalData);
}


/**kondisi form kosong revised by ami*/
// / Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
