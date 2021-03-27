// 1. buildProductList
// 2. Add product to cart
// 3. buildCart

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

// button.plus
const increaseProductQuantity = function (prodId) {};
// button.minus
const subtractProductQuantity = function (prodId) {};

const removeProduct = function (prodId) {};

const updateTotalAmount = function () {};

// method for render

const buildCart = function () {};
const buildProductList = function () {
  for (let index = 0; index < products.length; index++) {
    const product = products[index];

    // them the product vao trong the productListContainer
  }
  // Loop products
  // Them vao trong the productListContainer
  // .innerHTML += '<p></p>'
  // Tao 1 the bang createElement , addChild...
};

const productsTemplate = (product) => {
  return `
     <div class="row mb-4 product-item">
        <div class="col-md-5 col-lg-3 col-xl-3">
          <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
            <img
              class="img-fluid w-100"
              src="${product.image}"
              alt="Sample"
            />
            <a href="#!">
              <div class="mask">
                <img
                  class="img-fluid w-100"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                />
                <div class="mask rgba-black-slight"></div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-7 col-lg-9 col-xl-9">
          <div class="row">
            <div class="col-lg-7 col-xl-7">
              <h5>${product.name}</h5>
              <p class="mb-2 text-muted text-uppercase small">${product.category}</p>
              <ul class="rating">
                <li>
                  <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-primary"></i>
                </li>
              </ul>
              <hr />
              <p class="mb-lg-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, sapiente illo. Sit error voluptas repellat rerum
                quidem, soluta enim perferendis voluptates laboriosam.
                Distinctio, officia quis dolore quos sapiente tempore alias.
              </p>
            </div>
            <div class="col-lg-5 col-xl-5">
              <h6 class="mb-3"><span>$${product.price}</span></h6>
              <div class="my-4">
                <button type="button" class="btn btn-primary btn-md mr-1 mb-2">
                  <i class="fas fa-shopping-cart pr-2"></i>Add to cart
                </button>
                <button type="button" class="btn btn-light btn-md mr-1 mb-2">
                  <i class="fas fa-info-circle pr-2"></i>Details
                </button>
              </div>
              <button
                type="button"
                class="btn btn-danger btn-md px-3 mb-lg-2 material-tooltip-main"
                data-toggle="tooltip"
                data-placement="top"
                title="Add to wishlist"
              >
                <i class="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  `;
};

const cartItemTemplate = (product) => {
  return `
    <div class="row mb-4 cart-item">
                <div class="col-md-5 col-lg-3 col-xl-3">
                  <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img
                      class="img-fluid w-100"
                      src="${product.image}"
                      alt="Sample"
                    />
                    <a href="#!">
                      <div class="mask waves-effect waves-light">
                        <img
                          class="img-fluid w-100"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        />
                        <div
                          class="mask rgba-black-slight waves-effect waves-light"
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-7 col-lg-9 col-xl-9">
                  <div>
                    <div class="d-flex justify-content-between">
                      <div>
                        <h5>${product.name}</h5>
                        <p class="mb-3 text-muted text-uppercase small">
                          Shirt - blue
                        </p>
                        <p class="mb-2 text-muted text-uppercase small">
                          Color: ${product.color}
                        </p>
                        <p class="mb-3 text-muted text-uppercase small">
                          Size: ${product.size}
                        </p>
                      </div>
                      <div>
                        <div
                          class="def-number-input number-input safari_only mb-0 w-100"
                        >
                          <button class="minus btn">-</button>
                          <input
                            class="quantity"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                          />
                          <button class="plus btn btn-inline">+</button>
                        </div>
                        <small
                          id="passwordHelpBlock"
                          class="form-text text-muted text-center"
                        >
                          (Note, 1 piece)
                        </small>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <a
                          href="#!"
                          type="button"
                          class="card-link-secondary small text-uppercase mr-3"
                          ><i class="fas fa-trash-alt mr-1"></i> Remove item
                        </a>
                        <a
                          href="#!"
                          type="button"
                          class="card-link-secondary small text-uppercase"
                          ><i class="fas fa-heart mr-1"></i> Move to wish list
                        </a>
                      </div>
                      <p class="mb-0">
                        <span><strong>$${product.price}</strong></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  `;
};
