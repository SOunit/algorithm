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
        product.productOptions.push(getNewProductOption());
      }
    );

    productOption.optionItems.forEach((optionItem) => {
      mayDo(
        () => {
          optionItem.edited = true;
        },
        () => {
          productOption.optionItems.push(getNewOptionItem());
        }
      );
    });
  });

  return product;
}

function CreateUpdate(product) {
  const dbProduct = getDbProduct(product);
  const editedProduct = getEditedProduct(product);

  old(dbProduct, editedProduct);

  // edit
  console.log({ product, dbProduct, editedProduct });
}

function old(dbProduct, editedProduct) {
  // CreateUpdate productOptions
  editedProduct.productOptions.forEach((editedProductOption) => {
    const match = getDbProductOption(dbProduct, editedProductOption);

    if (match) {
      match.updated = true;
    } else {
      dbProduct.productOptions.push(editedProductOption);
    }
  });

  save(dbProduct.productOptions);

  console.log({ dbProduct });

  // CreateUpdate optionItems
  editedProduct.productOptions.forEach((editedProductOption) => {
    editedProductOption.optionItems.forEach((editedOptionItem) => {
      const dbProductOption = getDbProductOption(
        dbProduct,
        editedProductOption
      );
      const dbOptionItem = getDbOptionItem(dbProductOption, editedOptionItem);

      if (dbOptionItem) {
        dbOptionItem.updated = true;
      } else {
        dbProductOption.optionItems.push(editedOptionItem);
      }
    });
  });
  // save();

  // CreateUpdate optionItems
  editedProduct.productOptions.forEach((editedProductOption) => {
    editedProductOption.optionItems.forEach((editedOptionItem) => {
      editedOptionItem.subOptions.forEach((editedSubOption) => {
        const dbProductOption = getDbProductOption(
          dbProduct,
          editedProductOption
        );
        const dbOptionItem = getDbOptionItem(dbProductOption, editedOptionItem);
        const dbSubOption = getDbSubOption(dbOptionItem, editedSubOption);

        if (dbSubOption) {
          dbSubOption.updated = true;
        } else {
          editedSubOption.new = true;
          dbOptionItem.subOptions.push(editedSubOption);
        }
      });
    });
  });
}

function getDbProductOption(dbProduct, editedProductOption) {
  const match = dbProduct.productOptions.find(
    (dbProductOption) => dbProductOption.id === editedProductOption.id
  );

  return match;
}

function getDbOptionItem(dbProductOption, editedOptionItem) {
  const match = dbProductOption.optionItems.find(
    (dbProductOption) => dbProductOption.id === editedOptionItem.id
  );

  return match;
}

function getDbSubOption(dbOptionItem, editedSubOption) {
  const match = dbOptionItem.subOptions.find(
    (dbSubOption) => dbSubOption.id === editedSubOption.id
  );

  return match;
}

function save(items) {
  items.forEach((item) => {
    item.saved = true;
  });
}

function getNewOptionItem() {
  return {
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
  };
}

function getNewProductOption() {
  return {
    id: Math.random(),
    optionItems: [getNewOptionItem(), getNewOptionItem(), getNewOptionItem()],
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
