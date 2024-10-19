// function getinfo() {
  console.log("message");
  $.ajax({
    url: "http://localhost/api_practice/api.php/products",
    type: "GET",
    success: function (data) {
      console.log(data);
      var response = data;
      let html = "";
      response.forEach((element) => {
        html = html + createdh(element);
      });
      $(".getingdata").html(html);
    },
    error: function (xhr, status, error) {
      console.log("<p>An error occurred: " + error + "</p>");
    },
  });
  function createdh(obj) {
    let html = `<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
        <div class="glasses_box">
            <figure><img src="${obj.images}" alt="#" /></figure>
            <h3><span class="blu">$</span>${obj.product_price}</h3>
            <p>${obj.product_name}</p>
        </div>
    </div>`;
    return html;
  }
// }
