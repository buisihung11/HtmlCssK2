// 1. Add product to cart
// 2. Update quantity
// 3. Update cart summary total

const products = [
  {
    id: 1,
    category: "jeans",
    name: "Ripped jeans",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
    size: "XL",
    color: "blue",
    price: 20.99,
  },
  {
    id: 2,
    category: "jeans",
    name: "Boyfriend jeans",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
    size: "S",
    color: "blue",
    price: 24.99,
  },
  {
    id: 3,
    category: "shirts",
    name: "Ripped sweatshirt",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
    size: "XL",
    color: "white",
    price: 29.99,
  },
  {
    id: 4,
    category: "jackets",
    name: "Denim Jacket",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
    size: "M",
    color: "grey",
    price: 40.99,
  },
  {
    id: 5,
    category: "shirts",
    name: "Longsleeve",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
    size: "L",
    color: "black",
    price: 120.99,
  },
];

const addToCart = (product) => {};

const updateCart = function () {
  // call updateTotalAmount
  // build cart
  // save to local Storage
};

const increaseProductQuantity = function (prodId) {};
const subtractProductQuantity = function (prodId) {};
const removeProduct = function (prodId) {};

const updateTotalAmount = function () {};

// method for render

const buildCart = function () {};
const buildProductList = function () {};

const productsTemplate = (product) => {
  return `
    <div id="${product.id}" class="product row mb-4">
      <div class="col-md-5 col-lg-3 col-xl-3">
        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
          <img class="img-fluid w-100" src="${product.image}" alt="Sample">
          <a href="#!">
            <div class="mask waves-effect waves-light">
              <img class="img-fluid w-100" src="${product.image}">
              <div class="mask rgba-black-slight waves-effect waves-light"></div>
            </div>
          </a>
        </div>
      </div>
      <div class="col-md-7 col-lg-9 col-xl-9">
        <div>
          <div class="d-flex justify-content-between">
            <div>
              <h5>${product.name}</h5>
              <p class="mb-3 text-muted text-uppercase small">${
                product.category
              } - ${product.color}</p>
              <p class="mb-2 text-muted text-uppercase small">Color: ${
                product.color
              }</p>
              <p class="mb-3 text-muted text-uppercase small">Size: ${
                product.size
              }</p>
            </div>
            <div>
              <div class="def-number-input number-input safari_only mb-0 w-100">
                <button class="minus decrease"></button>
                <input class="quantity" min="0" name="quantity" value="${
                  product.itemsNumber
                }" type="number">
                <button class="plus increase"></button>
              </div>
              <small id="passwordHelpBlock" class="form-text text-muted text-center"> (Note, 1 piece) </small>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <a href="#!" type="button" class="remove-product card-link-secondary small text-uppercase mr-3"><i class="fas fa-trash-alt mr-1"></i> Remove item </a>
              <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i class="fas fa-heart mr-1"></i> Move to wish list </a>
            </div>
            <p class="mb-0"><span><strong class="price">$${(
              product.price * product.itemsNumber
            ).toFixed(2)}</strong></span></p>
          </div>
        </div>
      </div>
    </div>
    <hr class="mb-4">
  `;
};
