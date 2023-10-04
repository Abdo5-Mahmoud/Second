/* The Start After Editing */

let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let tot = document.getElementById("tot");
/* _________________________________________________ */

/* Get Total Function */
function gtotal() {
  if (price.value != "") {
    let resu = +price.value + +taxes.value + +ads.value - +discount.value;
    tot.innerHTML = resu;
    tot.style.backgroundColor = "green";
  } else {
    tot.innerHTML = "";
    tot.style.backgroundColor = "rgb(51, 51, 112)";
  }
}
gtotal();
/* The End  */
/* _________________________________________________ */

let count = document.getElementById("count");
let category = document.getElementById("category");
let creat = document.getElementById("creat");
let datapro = [];
let table = document.getElementById("tabel");
let inputs = document.getElementsByTagName("input");
let delealll = document.getElementById("deletall");
let swit = "Creat";
let mine;
/* _________________________________________________ */

/* IF The LocalStorage Have Data */
if (localStorage.product != null && localStorage.getItem("product") != "[]") {
  datapro = JSON.parse(localStorage.getItem("product"));
  ShowData();
  delealll.style.display = "block";
  document.querySelector(".result").style.display = "block";
} else {
  delealll.style.display = "none";
  document.querySelector(".result").style.display = "none";
}
/* The End  */

/* _________________________________________________ */

/* Creat Function On Click */
creat.onclick = function () {
  /* Save The Values Of The Input In Object */
  let pro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value || 0,
    ads: taxes.value || 0,
    discount: discount.value || 0,
    total: tot.innerHTML,
    count: count.value || 1,
    category: category.value,
  };
  /* Put It In Array And Save It In The LocalStorage */
  if (
    pro.title != "" &&
    pro.price != "" &&
    pro.category != "" &&
    count.value <= 100
  ) {
    if (swit == "Creat") {
      if (pro.count >= 1) {
        for (let i = 1; i <= pro.count; i++) datapro.push(pro);
        {
          ShowData();
          // window.location.reload();
        }
      } else {
        datapro.push(pro);
        // ShowData()
      }
    } else {
      ShowData();
      // console.log(swit);
      datapro[mine] = pro;
    }
    creat.innerHTML = "Create";
    // ShowData();
    localStorage.setItem("product", JSON.stringify(datapro));
    [...inputs].forEach((ele) => (ele.value = ""));
    window.location.reload()
  }
  gtotal()
  ShowData()
};

/* The End  */
/* _________________________________________________ */
/* Creat Element In The Table */

function ShowData() {
  let elem = "";
  datapro.forEach((ele) => {
    let i = datapro.indexOf(ele);
    elem += ` <tr>
    <td>${datapro.indexOf(ele) + 1}</td> 
    <td>${ele.title}</td>
    <td>${ele.price}</td>
    <td>${ele.taxes}</td>
    <td>${ele.ads}</td>
    <td>${ele.discount}</td>
    <td>${ele.total}</td>
    <td>${ele.category}</td>
    <td id="update" onclick="update(${i})"><button>update</button></td>
    <td id="delete" onclick="dele(${i})"><button>delete</button></td>
    </tr>`;
    document.getElementById("tbody").innerHTML = elem;
    [...inputs].forEach((ele) => (ele.value = ""));
  });
}
/* The End  */
/* _________________________________________________ */
/* DeleAll Function I Activate It In The HTML */
deletall.innerHTML = `Delet All ${datapro.length}`;
function deleall() {
  datapro.splice(0);
  localStorage.clear();
  window.location.reload();
}
/* The End */
/* _________________________________________________ */
/* Delet Function */
function dele(y) {
  console.log(y);
  datapro.splice(y, 1);
  localStorage.setItem("product", JSON.stringify(datapro));
  ShowData();
  window.location.reload();
}

// let del = document.getElementById('delete')
// del.onclick= function(){
//   dele()
// }
/* The End */
/* _________________________________________________ */
/* Update Function */
function update(j) {
  swit = "Update";
  creat.innerHTML = "Update";
  title.value = datapro[j].title;
  price.value = datapro[j].price;
  taxes.value = datapro[j].taxes;
  ads.value = datapro[j].ads;
  discount.value = datapro[j].discount;
  category.value = datapro[j].category;
  gtotal();
  count.style.display = "none";
  mine = j;
}
/* The End */
/* ________________________________________________------ */
/* Serch Function */
let searchbutton = document.getElementById("search");
let searchMood = "";

function search(e) {
  if (e == "seacrchtitle") {
    searchbutton.placeholder = "Search By Title";
    searchMood = "title";
  } else {
    searchbutton.placeholder = "Search By Category";
    searchMood = "category";
  }

  searchbutton.focus();
}

function datasearch(vl) {
  let elem = ` `;

  if (searchMood === "title") {
    for (i = 0; i < datapro.length; i++) {
      if (datapro[i].title.includes(vl)) {
        // console.log(i + vl)
        // console.log(i);
        // console.log(datapro[i].title)
        elem += ` <tr>
                <td>${i + 1}</td> 
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td id="update" onclick="update(${i})"><button>update</button></td>
                <td id="delete" onclick="dele(${i})"><button>delete</button></td>
                </tr>`;
      } else {
        console.log(Error() + "here");
      }
    }
  } else {
    for (i = 0; i < datapro.length; i++) {
      if (datapro[i].category.includes(`${vl}`)) {
        console.log(i);
        // console.log(datapro[i].category)
        elem += ` <tr>
                <td>${i + 1}</td> 
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td id="update" onclick="update(${i})"><button>update</button></td>
                <td id="delete" onclick="dele(${i})"><button>delete</button></td>
                </tr>`;
      } else {
        console.log(Error() + "here");
      }
    }
  }
  document.getElementById("tbody").innerHTML = elem;
}
