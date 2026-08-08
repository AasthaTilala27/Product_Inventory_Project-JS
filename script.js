const data = [
  {
    name: "Classic White T-Shirt",
    price: 499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyZKqpRYbS89b3zjiQm0seDB0dCoRC8ZERc0WLJ9waw&s=10",
  },

  {
    name: "Blue Denim Jeans",
    price: 1299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpQ5R6eSutN__BTp8XD7RoOjzgck0yADbR8072L2TtA&s=10",
  },

  {
    name: "Running Shoes",
    price: 2499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfBMQvsliWhB0R6ITqlXFwfs8cA0Gs2E5l1YZXJW1vg&s=10",
  },

  {
    name: "Leather Wallet",
    price: 799,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdp_l3D5NVm1i0dRcHYR5ntnzpbHOz3OmD0znsUXzrOw&s=10",
  },

  {
    name: "Smart Watch",
    price: 3999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiMt8aiVhRB9TtxTT6Wuun_BQ48cW-jUwUdCe17C3lQ&s",
  },

  {
    name: "Wireless Headphones",
    price: 2999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldCKbbMq6iJO70ifIGtJTtqPjcwbm9sRfi9-ZTImuIw&s",
  },

  {
    name: "Laptop Backpack",
    price: 1499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41xUGc-oODgCONaagepV4mM--150Gc9mxKMkjwVN65g&s",
  },

  {
    name: "Sunglasses",
    price: 999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIQFsXS29aMW7g3lRF2TjIY3AJmZoh0sEkOW-NqBe4g&s=10",
  },

  {
    name: "Bluetooth Speaker",
    price: 1999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvD9jlvU3rGhus-hZAOyjflbV3Q-_wafAZ4332BCYyug&s=10",
  },

  {
    name: "Sports Cap",
    price: 599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBpC4fmCpEyyFoVH6bKmRJuDbugc0UiFoxashWiEPKg&s=10",
  },
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