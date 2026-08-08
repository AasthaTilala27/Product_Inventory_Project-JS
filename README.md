# 🛍️ Product Management System

A simple and interactive **Product Management System** built using **HTML, CSS, and JavaScript**.

This project allows users to add, edit, delete, and sort products. Product data is stored in the browser using **Local Storage**, so the data remains available even after refreshing the page.

## ✨ Features

* ➕ **Add Product** — Add a new product with name, price, and image URL.
* ✏️ **Edit Product** — Update the product name and price.
* 🗑️ **Delete Product** — Delete products with confirmation.
* 💰 **Price Sorting** — Sort products from:

  * Low to High
  * High to Low
* 💾 **Local Storage** — Product data is saved in the browser.
* 🖼️ **Product Images** — Display product images using image URLs.
* 📱 **Responsive Design** — Layout adjusts for desktop, tablet, and mobile screens.
* 🎨 **Modern UI** — Clean product cards with hover effects and shadows.

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Local Storage
* DOM Manipulation

## 📂 Project Structure

```text
Product-Management/
│
├── index.html
├── style.css
├── script.js
```

## 🚀 How to Run

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Open the project folder.

3. Open `index.html` in your browser.

That's it! 🎉

## 📌 How It Works

### Add Product

Click the **Add Product** button.

You will be asked to enter:

* Product Name
* Product Price
* Product Image URL

The product will then be added to the product list and saved in Local Storage.

### Edit Product

Click the **Edit** button on any product card.

You can update:

* Product Name
* Product Price

### Delete Product

Click the **Delete** button.

A confirmation message will appear before the product is removed.

### Sort Products

Use the dropdown menu to sort products by price:

```text
All Products
Price Low To High
Price High To Low
```

## 💾 Local Storage

This project uses the browser's `localStorage` to store product information.

The products are stored using the key:

```javascript
"data"
```

The product array is converted into JSON before storing it:

```javascript
localStorage.setItem("data", JSON.stringify(data));
```

And converted back into an array when retrieving it:

```javascript
JSON.parse(localStorage.getItem("data"));
```

## 🎯 Project Purpose

The main purpose of this project is to practice:

* JavaScript DOM manipulation
* Functions
* Arrays and objects
* `forEach()`
* `findIndex()`
* Sorting arrays
* `localStorage`
* JSON
* Event handling
* Responsive CSS Grid

## 🔮 Future Improvements

Some features that can be added in the future:

* 🔍 Search products
* ❤️ Wishlist
* 🛒 Shopping cart
* 📂 Product categories
* ⭐ Product ratings
* 📊 Product filtering
* 🌙 Dark mode
* 🔐 Login and authentication
* 🗄️ Backend/database integration

## 👩‍💻 Author

**Aastha Tilala**

Computer Engineering Student | Full Stack Developer

---

⭐ If you like this project, consider giving the repository a star!
