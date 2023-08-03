// Example starter JavaScript for disabling form submissions if there are invalid fields
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


/** ======================================= */

/** sample coding add , remove item
 */

// function submitProduct(event) {
//   event.preventDefault();
//   const name = document.getElementById("input-name").value;
//   const price = document.getElementById("input-price").value;
//   const imageUrl = document.getElementById("input-image").value;
//   const objProduct = { name, price, imageUrl };
//   productsArr.push(objProduct);
//   renderCard();
//   document.getElementById("form").setAttribute("hidden", true);
//   document.getElementById("input-name").value = "";
//   Swal.fire("Berhasil!", "Data berhasil ditambahkan!", "success");
// }

// function deleteProduct(id) {
//   productsArr.splice(id, 1);
//   renderCard();
// }
