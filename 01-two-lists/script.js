// - 2 list
// - have to save

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getDbProduct(product) {
  const dbProduct = deepCopy(product);

  return dbProduct;
}

function mayDo(action1, action2) {
  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  const random = Math.random();

  // Check if the random number is less than 0.5 (50% probability)
  if (random < 0.5) {
    // Action to be performed when the random number is less than 0.5
    action1();
  } else {
    // Action to be performed when the random number is greater than or equal to 0.5
    action2();
  }
}

function getEditedProduct(product) {
  product.productOptions.forEach((productOption) => {
    mayDo(
      () => {
        productOption.edited = true;
      },
      () => {
        product.productOptions.push();
      }
    );

    productOption.optionItems.forEach((optionItem) => {
      mayDo(
        () => {
          optionItem.edited = true;
        },
        () => {}
      );
    });
  });

  product.productOptions.push(getNewProductOption());
  product.productOptions.push(getNewProductOption());
  product.productOptions.push(getNewProductOption());
  product.productOptions.push(getNewProductOption());
  product.productOptions.push(getNewProductOption());

  return product;
}

function CreateUpdate(product) {
  const dbProduct = getDbProduct(product);
  const editedProduct = getEditedProduct(product);

  // edit
  console.log({ product, dbProduct, editedProduct });

  // CreateUpdate productOptions
  editedProduct.productOptions.forEach((editedProductOption) => {
    const match = dbProduct.productOptions.find(
      (dbProductOption) => dbProductOption.id === editedProductOption.id
    );

    if (match) {
      match.updated = true;
    } else {
      dbProduct.productOptions.push(editedProductOption);
    }
  });

  save(dbProduct.productOptions);

  console.log({ dbProduct });
}

function save(items) {
  items.forEach((item) => {
    item.saved = true;
  });
}

function getNewProductOption() {
  return {
    id: Math.random(),
    optionItems: [
      {
        id: Math.random(),
        subOptions: [
          {
            id: Math.random(),
            subOptionItems: [
              { id: Math.random() },
              { id: Math.random() },
              { id: Math.random() },
            ],
          },
          {
            id: Math.random(),
            subOptionItems: [
              { id: Math.random() },
              { id: Math.random() },
              { id: Math.random() },
            ],
          },
          {
            id: Math.random(),
            subOptionItems: [
              { id: Math.random() },
              { id: Math.random() },
              { id: Math.random() },
            ],
          },
        ],
      },
      {
        id: Math.random(),
        subOptions: [
          {
            id: Math.random(),
            subOptionItems: [
              { id: Math.random() },
              { id: Math.random() },
              { id: Math.random() },
            ],
          },
          {
            id: Math.random(),
            subOptionItems: [
              { id: Math.random() },
              { id: Math.random() },
              { id: Math.random() },
            ],
          },
          {
            id: Math.random(),
            subOptionItems: [
              { id: Math.random() },
              { id: Math.random() },
              { id: Math.random() },
            ],
          },
        ],
      },
      {
        id: Math.random(),
        subOptions: [
          {
            id: Math.random(),
            subOptionItems: [
              { id: Math.random() },
              { id: Math.random() },
              { id: Math.random() },
            ],
          },
          {
            id: Math.random(),
            subOptionItems: [
              { id: Math.random() },
              { id: Math.random() },
              { id: Math.random() },
            ],
          },
          {
            id: Math.random(),
            subOptionItems: [
              { id: Math.random() },
              { id: Math.random() },
              { id: Math.random() },
            ],
          },
        ],
      },
    ],
  };
}

// execute

const product = {
  productOptions: [
    getNewProductOption(),
    getNewProductOption(),
    getNewProductOption(),
    getNewProductOption(),
    getNewProductOption(),
    getNewProductOption(),
    getNewProductOption(),
    getNewProductOption(),
  ],
};

CreateUpdate(product);
