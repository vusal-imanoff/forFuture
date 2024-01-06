

$(document).ready(function () {
  $(".four_left").click(function () {
    $(".four_left_categories").slideToggle()
  });
});

$(document).ready(function () {
  $(".four_top_span").click(function () {
    $(".four_left_categories").slideToggle()
  });
});
$(document).ready(function () {
  $(".fresh_mobile").click(function () {
    $(".fruit_dropdown_mobile").slideToggle()
  });
});
$(document).ready(function () {
  $(".beverages_mobile").click(function () {
    $(".beverages_dropdown_mobile").slideToggle()
  });
});
$(document).ready(function () {
  $(".lang_down_span").click(function () {
    $(".lang_down").slideToggle()
  });
});
$(document).ready(function () {
  $(".currency_down_span").click(function () {
    $(".currency_down").slideToggle()
  });
});
$(document).ready(function () {
  $(".home_menu").click(function () {
    $(".home_down_mobile").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_menu").click(function () {
    $(".shop_down_mobile").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_down_one").click(function () {
    $(".shop_down_mobile_one").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_down_two").click(function () {
    $(".shop_down_mobile_two").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_down_three").click(function () {
    $(".shop_down_mobile_three").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_down_four").click(function () {
    $(".shop_down_mobile_four").slideToggle()
  });
});
$(document).ready(function () {
  $(".shop_down_five").click(function () {
    $(".shop_down_mobile_five").slideToggle()
  });
});
$(document).ready(function () {
  $("#search_menu").click(function (event) {
    event.preventDefault();
    $(".footer_search").toggleClass('d-none')
  });
});

//shop.css

$(document).ready(function () {
  $(".icon_beverages").click(function (event) {
    event.preventDefault();
    $(".icon_beverages").addClass('d-none');
    $(".icon_beverages_minus").removeClass('d-none');
  });

  $(".icon_beverages_minus").click(function (event) {
    event.preventDefault();
    $(".icon_beverages").removeClass('d-none');
    $(".icon_beverages_minus").addClass('d-none');
  });

  $(".icon_beverages_minus").click(function (event) {
    event.preventDefault();
    $(".ul_beverages").slideToggle();
  });

  $(".icon_beverages").click(function (event) {
    event.preventDefault();
    $(".ul_beverages").slideToggle();
  });

  $(".icon_breads").click(function (event) {
    event.preventDefault();
    $(".ul_breads").slideToggle();
  });

  $(".icon_breads").click(function (event) {
    event.preventDefault();
    $(".icon_breads").addClass('d-none');
    $(".icon_breads_minus").removeClass('d-none');
  });

  $(".icon_breads_minus").click(function (event) {
    event.preventDefault();
    $(".icon_breads").removeClass('d-none');
    $(".icon_breads_minus").addClass('d-none');
  });

  $(".icon_breads_minus").click(function (event) {
    event.preventDefault();
    $(".ul_breads").slideToggle();
  });

  $(".icon_breakfast").click(function (event) {
    event.preventDefault();
    $(".ul_breakfast").slideToggle();
  });

  $(".icon_breakfast").click(function (event) {
    event.preventDefault();
    $(".icon_breakfast").addClass('d-none');
    $(".icon_breakfast_minus").removeClass('d-none');
  });

  $(".icon_breakfast_minus").click(function (event) {
    event.preventDefault();
    $(".icon_breakfast").removeClass('d-none');
    $(".icon_breakfast_minus").addClass('d-none');
  });

  $(".icon_breakfast_minus").click(function (event) {
    event.preventDefault();
    $(".ul_breakfast").slideToggle();
  });


  $(".icon_fruits").click(function (event) {
    event.preventDefault();
    $(".ul_fruits").slideToggle();
  });
  $(".icon_fruits").click(function (event) {
    event.preventDefault();
    $(".icon_fruits").addClass('d-none');
    $(".icon_fruits_minus").removeClass('d-none');
  });

  $(".icon_fruits_minus").click(function (event) {
    event.preventDefault();
    $(".icon_fruits").removeClass('d-none');
    $(".icon_fruits_minus").addClass('d-none');
  });

  $(".icon_fruits_minus").click(function (event) {
    event.preventDefault();
    $(".ul_fruits").slideToggle();
  });
  $(".icon_meats").click(function (event) {
    event.preventDefault();
    $(".ul_meats").slideToggle();
  });
  $(".icon_meats").click(function (event) {
    event.preventDefault();
    $(".icon_meats").addClass('d-none');
    $(".icon_meats_minus").removeClass('d-none');
  });

  $(".icon_meats_minus").click(function (event) {
    event.preventDefault();
    $(".icon_meats").removeClass('d-none');
    $(".icon_meats_minus").addClass('d-none');
  });

  $(".icon_meats_minus").click(function (event) {
    event.preventDefault();
    $(".ul_meats").slideToggle();
  });

});


$(document).ready(function () {
  $("#open_menu").click(function () {
    $(".header_menu").css('display', 'block')
    $(".header_menu").addClass('animate__fadeInLeft')
    $(".header_menu").removeClass('animate__fadeOutLeft')

  });

  $("#close_menu").click(function (event) {
    event.preventDefault();
    $(".header_menu").addClass('animate__fadeOutLeft')
    $(".header_menu").removeClass('animate__fadeInLeft')


  });
  $("#category_icon").click(function (event) {
    event.preventDefault();
    $(".header_menu").css('display', 'block')
    $(".header_menu").addClass('animate__fadeInLeft')
    $(".header_menu").removeClass('animate__fadeOutLeft')
  });

});

$('.sliderall').slick({
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 577,
      settings: {
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      } 
    }
  ]
});
$('.product_bottom').slick({
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});


let buttons = document.querySelectorAll('.tab_links a')
let content = document.querySelectorAll('.tab_content .tabix')
for (let btn of buttons) {
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    let active = document.querySelector(".active");
    active.classList.remove("active")
    this.classList.add('active')

    let index = this.getAttribute('data-index')

    for (let div of content) {
      if (div.getAttribute('data-index') == index) {
        div.classList.remove('d-none')
      }
      else {
        div.classList.add('d-none')
      }
    }
  })
}

$(document).ready(function () {
  $(".plus").click(function (event) {
    event.preventDefault();
    let count = $(".input_text").val();
    count++;
    $(".input_text").val(count);
  });
  $(".minus").click(function (event) {
    event.preventDefault();
    let count = $(".input_text").val();
    if (count > 1) {
      count--;
    }
    $(".input_text").val(count)
  });
});

/// add to cart

if (localStorage.getItem('basket') === null) {
  localStorage.setItem('basket', JSON.stringify([]));
}
$(document).on("click", ".plus_cart", function (event) {
  event.preventDefault();
  let basket = JSON.parse(localStorage.getItem('basket'))
  let id = $(this).attr("id")
  let prod_count = basket.find(prod => prod.ID == id)
  prod_count.Count += 1;
  localStorage.setItem('basket', JSON.stringify(basket))
  CountBasket();
  ShowBasket();
  DeleteProduct();
  SubTotal();
  Total();

});

$(document).on("click", ".minus_cart", function (event) {
  event.preventDefault();
  let basket = JSON.parse(localStorage.getItem('basket'))
  let id = $(this).attr("data-id")
  let prod_count = basket.find(prod => prod.ID == id)
  if (prod_count.Count > 1) {

    prod_count.Count--;
  }
  localStorage.setItem('basket', JSON.stringify(basket))
  CountBasket();
  ShowBasket();
  DeleteProduct();
  SubTotal();
  Total();
});

let btnbtn = document.querySelectorAll('.abtn_click');
for (let btns of btnbtn) {
  btns.addEventListener('click', function (event) {
    let basket = JSON.parse(localStorage.getItem('basket'))
    let id = event.target.parentElement.parentElement.parentElement.id;
    let prod_name = event.target.parentElement.parentElement.previousElementSibling.children[1].children[0].children[0].innerText;
    let prod_img = event.target.parentElement.parentElement.previousElementSibling.children[0].children[0].children[0].src;
    let prod_price = Number(event.target.parentElement.parentElement.previousElementSibling.children[1].children[3].children[1].children[0].innerText);
    let prod_count = basket.find(prod => prod.ID == id)
    if (prod_count == undefined) {
      basket.push({
        ID: id,
        Name: prod_name,
        Price: prod_price,
        Image: prod_img,
        Count: 1
      })
    }
    else {
      prod_count.Count += 1;
    }
    localStorage.setItem('basket', JSON.stringify(basket))
    CountBasket();
    SubTotalPrice();
  })
}

function CountBasket() {
  let basket = JSON.parse(localStorage.getItem('basket'))
  let count = basket.length;
  document.getElementById('mobile_prod_count').innerHTML = count;
  document.getElementById('prod_count').innerHTML = count;
  SubTotalPrice();
}
CountBasket();
var list = document.getElementById("list")
if (list != null) {
  ShowBasket();
}

function DeleteProduct() {
  let delete_product = document.querySelectorAll(".delete_prod")
  for (let del of delete_product) {
    del.addEventListener('click', function (e) {
      let basket = JSON.parse(localStorage.getItem('basket'))
      let div = e.target.parentElement.parentElement.parentElement;
      let del_id = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.children[2].id;
      div.remove();
      let existid = basket.find(pid => pid.ID == del_id);
      if (existid != undefined) {
        basket = basket.filter(p => p.ID != del_id)
        localStorage.setItem("basket", JSON.stringify(basket))
        checkViewEmpty()
        CountBasket();
        SubTotal();
        Total();
      }
    })
  }
}
DeleteProduct()

function ShowBasket() {

  let basket = JSON.parse(localStorage.getItem('basket'))
  let pr = '';
  for (let product of basket) {
    pr += `
    <div class="pr-box d-flex justify-content-between align-items-center">
                      <div class="col-lg-1">
                          <img class="img-fluid"
                              src="${product.Image}"
                              alt="">
                      </div>
                      <div class="prod_name_temp col-lg-6">
                          <h4>${product.Name}</h4>
                      </div>
                      <div class="productprice col-lg-1">
                          <span>${product.Price}</span>
                      </div>
                      <div class="counter col-lg-2 d-flex justify-content-evenly  align-items-center">
                          <div data-id="${product.ID}" class="count_btn minus_cart"><i class="fa-solid fa-minus"></i></div>
                          <input type="text" id="input_val" class="input_text_cart qty text" value="${product.Count}"
                              placeholder="" inputmode="numeric">
                          <div id="${product.ID}"  class="count_btn plus_cart"><i  class="fa-solid fa-plus"></i></div>
                      </div>
                      <div class="producttotalprice col-lg-1">
                          <span class="total_prie">${(product.Count * product.Price).toFixed(2)}</span>
                      </div>
                      <div class="col-lg-1">
                          <span class="delete_prod"><i class="fa-solid fa-trash"></i></span>
                      </div>

    </div>`

    document.getElementById("list").innerHTML = pr;


  }
}

$(document).ready(function () {
  checkViewEmpty()
});


function checkViewEmpty() {
  let basket = JSON.parse(localStorage.getItem("basket"))

  if (basket.length === 0) {
    document.getElementById("emptybasket").classList.remove("d-none");
    document.getElementById("fullbasket").classList.add("d-none")
  }
  else {
    document.getElementById("emptybasket").classList.add("d-none");
    document.getElementById("fullbasket").classList.remove("d-none");
  }
}


function SubTotal() {
  let subtotal = 0;
  let basket = JSON.parse(localStorage.getItem('basket'))
  for (let total of basket) {
    subtotal += total.Price * total.Count;
  }

  document.getElementById("subtotal_num").innerHTML = '$' + subtotal.toFixed(2);

  Total();
  SubTotalPrice();
}
SubTotal();

function SubTotalPrice() {
  let subtotal = 0;
  let basket = JSON.parse(localStorage.getItem('basket'))
  for (let total of basket) {
    subtotal += total.Price * total.Count;
  }

  document.getElementById("prod_price").innerHTML = '$' + subtotal.toFixed(2);

  Total();
}
SubTotalPrice();

function Total(isPaid) {
  let subtotal = Number(document.getElementById('subtotal_num').innerHTML.slice(1));
  if (isPaid == true) {
    document.getElementById('total_num').innerHTML = '$' + (subtotal + 5).toFixed(2)
  }
  else {
    document.getElementById('total_num').innerHTML = '$' + (subtotal).toFixed(2)
  }

}
Total(true);


function calculateShipping(isPaid) {

  Total(isPaid);
}