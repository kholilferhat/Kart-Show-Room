const carProduct = [
  {
    id: 1,
    name: "Fortuner",
    harga: 500,
    total: 0,
  },
  {
    id: 2,
    name: "Avanza",
    harga: 200,
    total: 0,
  },
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
                    <img src="https://media.rivian.com/rivian-main/image/upload/f_auto/q_auto:eco,w_1000,c_fit/v1665606408/rivian-com/home%20page/vehicle-picker/R1T-1_i4armg.png"
                        alt="">
                    <button type="button" id="item1" onclick="addItemToCart(${
                      carProduct[i].id
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
            <small class="text-body-secondary">Brief description</small>
        </div>
        <div>
            <h6 class="my-0">${carProduct[i].harga * total}</h6>
            <small class="text-body-secondary">qty ${total}</small>
        </div>
        <div>
            <button onclick="deleteItem(${carProduct[i].id})">Delete
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

function deleteItem(id) {
  carProduct.splice(id, 1);
  let totalData = 0;
  const data = carProduct.map((val) => (totalData += val.total));
  console.log(data);
  renderDataCheckOut(totalData);
}
