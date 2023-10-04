// get data

let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let tot = document.getElementById("tot");
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
/* ____________________ */
// creat form
let count = document.getElementById("count");
let category = document.getElementById("category");
let creat = document.getElementById("creat");
let datapro;
let table = document.getElementById("tabel");
let inputs = document.getElementsByTagName("input");
let delealll = document.getElementById("deletall")



/* this condition do ...
    if the localstorage not embty , it take the data in it and put it in the array(datapro )
    , if there is data it creat the elements and make the result section visible
*/
if (localStorage.product != null) {
  datapro = JSON.parse(localStorage.product);
  datapro.forEach((ele) => {
    // console.log(ele)
    let tr = document.createElement("tbody"); //
    let tdid = document.createElement("td");
    tdid.innerHTML = +datapro.indexOf(ele) + 1;
    let tdti = document.createElement("td");
    tdti.innerHTML = ele.title;
    let tdpr = document.createElement("td");
    tdpr.innerHTML = ele.price;
    let tdtax = document.createElement("td");
    tdtax.innerHTML = ele.taxes;
    let tdads = document.createElement("td");
    tdads.innerHTML = ele.ads;
    let tddis = document.createElement("td");
    tddis.innerHTML = ele.discount;
    let tdtot = document.createElement("td");
    tdtot.innerHTML = ele.total;
    let tdcateg = document.createElement("td");
    tdcateg.innerHTML = ele.category; ///
    let update = document.createElement("td");
    let upd = document.createElement("button");
    upd.id = "update";
    upd.innerHTML = "update";
    let dele = document.createElement("td");
    let del = document.createElement("button");
    del.id = "delete";
    del.innerHTML = "delete";
    table.appendChild(tr);
    tr.appendChild(tdid);
    tr.appendChild(tdti);
    tr.appendChild(tdpr);
    tr.appendChild(tdtax);
    tr.appendChild(tdads); //
    tr.appendChild(tddis); //
    tr.appendChild(tdtot); //
    tr.appendChild(tdcateg); //
    tr.appendChild(update); //
    tr.appendChild(dele); //
    update.appendChild(upd); //
    dele.appendChild(del); //
    let inputs = document.getElementsByTagName("input");
    [...inputs].forEach((ele) => (ele.value = ""));
    document.querySelector(".result").style.display = "block";


    delealll.style
    /* 
        here we do the next when click on the update button it return the data that in his row ,
        to the inputs ,
    */
    update.onclick = function () {
      [...inputs].forEach((ele) => (ele.value = ""));
      // console.log(datapro)
      // console.log(datapro[this.parentElement.firstChild.innerHTML - 1])

      let pronum = datapro[this.parentElement.firstChild.innerHTML - 1];
      title.value = pronum.title;
      price.value = pronum.price;
      taxes.value = pronum.taxes;
      ads.value = pronum.ads;
      discount.value = pronum.discount;
      count.value = pronum.count;
      category.value = pronum.category;
      datapro.splice(this.parentElement.firstChild.innerHTML - 1, 1);
      //   console.log(datapro);
      localStorage.setItem("product", JSON.stringify(datapro));
      if (localStorage.getItem("product") === "[]") {
        localStorage.removeItem("product");
        // document.querySelector(".result").style.display = "none";
      }
      //   console.log(datapro[this.parentElement.firstChild.innerHTML - 1])
    };
    dele.onclick = function () {
      datapro.splice(this.parentElement.firstChild.innerHTML - 1, 1);
      //   console.log(datapro);
      localStorage.setItem("product", JSON.stringify(datapro));
      if (localStorage.getItem("product") === "[]") {
        localStorage.removeItem("product");
        // document.querySelector(".result").style.display = "none";
      }
      //   console.log(datapro[this.parentElement.firstChild.innerHTML - 1])
      window.location.reload();
    };
  });
} else {
  datapro = [];
  document.querySelector(".result").style.display = "none";
  // window.location.reload()
}
/* _________________________________________________________________________- */
/* this fun work when clicking of creat button it save the data in an obj and add it in an array and in the local storage
    then creat the ele and push them in the table and make the input empty again and make the page reload */
creat.onclick = function () {
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
  /* ____________________ */
  /* ____________________ */
  console.log(count.value)
  for (i = 1; i <= count.value; i++) {
    if (
      title.value != "" &&
      price.value != "" &&
      count.value != "" &&
      category.value != ""
    ) {
      /* __________________________ */
      datapro.push(pro);
      // console.log(datapro);
      // console.log(localStorage);
      let tr = document.createElement("tbody"); //
      let tdid = document.createElement("td");
      tdid.innerHTML = +datapro.indexOf(pro) + 1;
      let tdti = document.createElement("td");
      tdti.innerHTML = pro.title;
      let tdpr = document.createElement("td");
      tdpr.innerHTML = pro.price;
      let tdtax = document.createElement("td");
      tdtax.innerHTML = pro.taxes;
      let tdads = document.createElement("td");
      tdads.innerHTML = pro.ads;
      let tddis = document.createElement("td");
      tddis.innerHTML = pro.discount;
      let tdtot = document.createElement("td");
      tdtot.innerHTML = pro.total;
      let tdcateg = document.createElement("td");
      tdcateg.innerHTML = pro.category; ///
      let update = document.createElement("td");
      let upd = document.createElement("button");
      upd.id = "ubdate";
      upd.innerHTML = "update";
      let dele = document.createElement("td");
      let del = document.createElement("button");
      del.id = "delete";
      del.innerHTML = "delete";
      table.appendChild(tr);
      tr.appendChild(tdid);
      tr.appendChild(tdti);
      tr.appendChild(tdpr);
      tr.appendChild(tdtax);
      tr.appendChild(tdads); //
      tr.appendChild(tddis); //
      tr.appendChild(tdtot); //
      tr.appendChild(tdcateg); //
      tr.appendChild(update); //
      tr.appendChild(dele); //
      update.appendChild(upd); //
      dele.appendChild(del); //
      //   console.log(datapro.ind(pro))
    }
  }
  localStorage.setItem("product", JSON.stringify(datapro));
  [...inputs].forEach((ele) => (ele.value = ""));
  funny();
};
function funny() {
  setTimeout(() => {
    window.location.reload();
  }, 0);
}
/* _________________________________________________________________________- */
// }
// save in localstorage
// clear input
// read
// count
// update
// delete
// search
// clean data
