var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];
var copyArr = [];
for (i = 0; i < products.length; i++) {
  copyArr[i] = products[i];
}
console.log(copyArr);

$(document).ready(function () {
  displayCopy();
});

function displayCopy() {
  var table =
    "<table border=1px><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
  copyArr.forEach((element) => {
    table +=
      "<tr><td>" +
      element.id +
      "</td><td>" +
      element.name +
      "</td><td>" +
      element.brand +
      "</td><td>" +
      element.os +
      "</td><td>" +
      "<p  onclick=\"delProd('" +
      element.id +
      "')\">X</p>" +
      "</td><tr>";
  });

  table += "</table>";
  document.getElementById("output").innerHTML = table;
}

function filter() {
  let table =
    "<table border=1px><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
  var OS = document.getElementById("OS").value;
  var Brand = document.getElementById("Brand").value;

  products.forEach((element) => {
    if (element.os == OS) {
      table +=
        "<tr><td>" +
        element.id +
        "</td><td>" +
        element.name +
        "</td><td>" +
        element.brand +
        "</td><td>" +
        element.os +
        "</td><td>" +
        "<p  onclick=\"delProd('" +
        element.id +
        "')\">X</p>" +
        "</td><tr>";
    } else if (element.brand == Brand) {
      table +=
        "<tr><td>" +
        element.id +
        "</td><td>" +
        element.name +
        "</td><td>" +
        element.brand +
        "</td><td>" +
        element.os +
        "</td><td>" +
        "<p onclick=\"delProd('" +
        element.id +
        "')\">X</p>" +
        "</td><tr>";
    } else if (element.os == OS && element.brand == Brand) {
      table +=
        "<tr><td>" +
        element.id +
        "</td><td>" +
        element.name +
        "</td><td>" +
        element.brand +
        "</td><td>" +
        element.os +
        "</td><td>" +
        "<p onclick=\"delProd('" +
        element.id +
        "')\">X</p>" +
        "</td><tr>";
    }
  });

  table += "</table>";
  document.getElementById("output").innerHTML = table;
}

function searchData() {
  let table =
    "<table border=1px><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
  var tval = document.getElementById("search").value;
  tval = tval.toLowerCase();
  products.forEach((element) => {
    if (element.name.toLowerCase() == tval) {
      table +=
        "<tr><td>" +
        element.id +
        "</td><td>" +
        element.name +
        "</td><td>" +
        element.brand +
        "</td><td>" +
        element.os +
        "</td><td>" +
        "<p onclick=\"delProd('" +
        element.id +
        "')\">X</p>" +
        "</td><tr>";
    } else if (element.id == tval) {
      table +=
        "<tr><td>" +
        element.id +
        "</td><td>" +
        element.name +
        "</td><td>" +
        element.brand +
        "</td><td>" +
        element.os +
        "</td><td>" +
        "<p onclick=\"delProd('" +
        element.id +
        "')\">X</p>" +
        "</td><tr>";
    }
  });

  table += "</table>";
  document.getElementById("output").innerHTML = table;
}

function delProd(val) {
  for (let i = 0; i < copyArr.length; i++) {
    if (val == copyArr[i].id) {
      copyArr.splice(i, 1);
    }
  }
  displayCopy();
}
