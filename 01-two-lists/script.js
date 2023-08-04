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
  const copy1 = deepCopy(product);
  const dbProduct1 = getDbProduct(copy1);
  const editedProduct = getEditedProduct(copy1);
  logic1(dbProduct1, editedProduct);

  const copy2 = deepCopy(product);
  const dbProduct2 = getDbProduct(copy2);
  // logic2(dbProduct2, editedProduct);

  const res = check(dbProduct1, dbProduct2);
  console.log({ res });
}

function logic2(dbProduct, editedProduct) {
  // map
  var idToDbProductOptionMap = {};
  var idToDbOptionItemMap = {};
  var idToDbSubOptionMap = {};
  dbProduct.productOptions.forEach((dbProductOption) => {
    idToDbProductOptionMap[dbProductOption.id] = dbProductOption;
    dbProductOption.optionItems.forEach((dbOptionItem) => {
      idToDbOptionItemMap[dbOptionItem.id] = dbOptionItem;
      dbOptionItem.subOptions.forEach((dbSubOption) => {
        idToDbSubOptionMap[dbSubOption.id] = dbSubOption;
      });
    });
  });

  // connect
  var productOptionPairList = [];
  var optionItemPairList = [];
  var subOptionPairList = [];

  editedProduct.productOptions.forEach((editedProductOption) => {
    const pair = {
      db: idToDbProductOptionMap[editedProductOption.id],
      edited: editedProductOption,
    };
    productOptionPairList.push(pair);

    editedProductOption.optionItems.forEach((editedOptionItem) => {
      const pair = {
        db: idToDbOptionItemMap[editedOptionItem.id],
        edited: editedOptionItem,
      };
      optionItemPairList.push(pair);

      editedOptionItem.subOptions.forEach((editedSubOption) => {
        const pair = {
          db: idToDbSubOptionMap[editedSubOption.id],
          edited: editedSubOption,
        };
        subOptionPairList.push(pair);
      });
    });
  });

  console.log("logic2", {
    productOptionPairList,
    optionItemPairList,
    subOptionPairList,
  });

  // update ProductOption
  productOptionPairList.forEach((productOptionPair) => {
    const dbProductOption = productOptionPair.db;
    if (dbProductOption) {
      dbProductOption.updated = true;
    } else {
      dbProduct.productOptions.push(productOptionPair.edited);

      // insert to map
      // generate key
    }
  });
  // save
  // insert to map

  // update OptionItem
  optionItemPairList.forEach((optionItemPair) => {
    const dbOptionItem = optionItemPair.db;
    if (dbOptionItem) {
      dbOptionItem.updated = true;
    } else {
      optionItemPair.db.push(optionItemPair.edited);
    }
  });

  // update SubOption
  subOptionPairList.forEach((subOptionPair) => {
    const dbSubOption = subOptionPair.db;
    if (dbSubOption) {
      dbSubOption.updated = true;
    } else {
      subOptionPair.db.push(subOptionPair.edited);
    }
  });
}

function check(dbProduct1, dbProduct2) {
  var test1 = JSON.stringify(dbProduct1);
  var test2 = JSON.stringify(dbProduct2);

  return { valid: test1 === test2, test1, test2 };
}

function logic1(dbProduct, editedProduct) {
  // CreateUpdate productOptions
  editedProduct.productOptions.forEach((editedProductOption) => {
    const dbProductOption = getDbProductOption(dbProduct, editedProductOption);
    if (dbProductOption) {
      dbProductOption.updated = true;
    } else {
      dbProduct.productOptions.push(editedProductOption);
    }
  });

  // save(dbProduct.productOptions);

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
