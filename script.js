const data = [
    {
        name: "Oversized Black Hoodie",
        price: 899,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"
    },

    {
        name: "Brown Casual Jacket",
        price: 1899,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    },

    {
        name: "White Sneakers",
        price: 2299,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },

    {
        name: "Canvas Travel Bag",
        price: 1599,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },

    {
        name: "Classic Analog Watch",
        price: 2799,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500"
    },

    {
        name: "Wireless Earbuds",
        price: 1799,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500"
    },

    {
        name: "Round Frame Glasses",
        price: 699,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },

    {
        name: "Ceramic Coffee Mug",
        price: 399,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500"
    },

    {
        name: "Minimal Desk Lamp",
        price: 1199,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
    },

    {
        name: "Leather Crossbody Bag",
        price: 1399,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500"
    }
];

if (localStorage.getItem("data") == null) {
  localStorage.setItem("data", JSON.stringify(data));
}

function addItem() {
  let list = JSON.parse(localStorage.getItem("data"));
  let name = prompt("Enter Product Name:");

  if (name == null || name == "") {
    return;
  }

  let price = prompt("Enter Product Price:");

  if (price == null || price == "") {
    return;
  }

  let image = prompt("Enter Product Image URL:");

  if (image == null || image == "") {
    return;
  }

  let item = {
    name: name,
    price: Number(price),
    image: image,
  };

  list.push(item);
  localStorage.setItem("data", JSON.stringify(list));
  showItem();
}

function showItem() {
  let list = JSON.parse(localStorage.getItem("data"));
  let box = document.querySelector(".box");

  box.innerHTML = "";

  let main = document.createElement("main");

  list.forEach(function (item) {
    let card = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("p");
    let buttons = document.createElement("section");
    let edit = document.createElement("button");
    let remove = document.createElement("button");

    image.src = item.image;
    name.innerText = item.name;
    price.innerText = "₹" + item.price;
    edit.innerText = "Edit";
    remove.innerText = "Delete";

    edit.onclick = function () {
      editItem(item);
    };

    remove.onclick = function () {
      deleteItem(item);
    };

    buttons.appendChild(edit);
    buttons.appendChild(remove);
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(buttons);
    main.appendChild(card);
  });

  box.appendChild(main);
}

function sortItem(value) {
  let list = JSON.parse(localStorage.getItem("data"));

  if (value == "low") {
    list.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (value == "high") {
    list.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  showSorted(list);
}

function showSorted(list) {
  let box = document.querySelector(".box");

  box.innerHTML = "";

  let main = document.createElement("main");

  list.forEach(function (item) {
    let card = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("p");
    let buttons = document.createElement("section");
    let edit = document.createElement("button");
    let remove = document.createElement("button");

    image.src = item.image;
    name.innerText = item.name;
    price.innerText = "₹" + item.price;
    edit.innerText = "Edit";
    remove.innerText = "Delete";

    edit.onclick = function () {
      editItem(item);
    };

    remove.onclick = function () {
      deleteItem(item);
    };

    buttons.appendChild(edit);

    buttons.appendChild(remove);
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(buttons);
    main.appendChild(card);
  });

  box.appendChild(main);
}

function deleteItem(item) {
  let list = JSON.parse(localStorage.getItem("data"));

  let answer = confirm("Are you sure you want to delete " + item.name + "?");

  if (answer) {
    let index = list.findIndex(function (product) {
      return product.name == item.name && product.price == item.price;
    });

    if (index != -1) {
      list.splice(index, 1);
    }

    localStorage.setItem("data", JSON.stringify(list));

    showItem();
  }
}

function editItem(item) {
  let list = JSON.parse(localStorage.getItem("data"));
  let index = list.findIndex(function (product) {
    return product.name == item.name && product.price == item.price;
  });

  if (index == -1) {
    return;
  }

  let name = prompt("Enter Product Name:", list[index].name);

  if (name == null || name == "") {
    return;
  }

  let price = prompt("Enter Product Price:", list[index].price);

  if (price == null || price == "") {
    return;
  }

  list[index].name = name;

  list[index].price = Number(price);

  localStorage.setItem("data", JSON.stringify(list));

  showItem();
}

showItem();