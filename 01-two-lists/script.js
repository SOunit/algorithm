// - 2 list
// - have to save

const product = {
  productOptions: [
    {
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
        ,
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
    },
    {
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
        ,
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
    },
    {
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
        ,
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
    },
  ],
};

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getDbProduct(product) {
  var dbProduct = deepCopy(product);

  return dbProduct;
}

function mayDo(fn) {
  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  const random = Math.random();

  // Check if the random number is less than 0.5 (50% probability)
  if (random < 0.5) {
    // Action to be performed when the random number is less than 0.5
    fn();
  } else {
    // Action to be performed when the random number is greater than or equal to 0.5
  }
}

function getEditedProduct(product) {
  product.productOptions.forEach((productOption) => {
    mayDo(() => {
      productOption.edited = true;
    });

    productOption.optionItems.forEach((optionItem) => {
      mayDo(() => {
        optionItem.edited = true;
      });
    });
  });

  return product;
}

function CreateUpdate(product) {
  const dbProduct = getDbProduct(product);
  const editedProduct = getEditedProduct(product);

  // edit
  console.log({ editedProduct });

  // CreateUpdate
  dbProduct.productOptions.forEach((dbProductOption) => {
    console.log({ dbProductOption });
  });

  save(TYPES.PRODUCT_OPTIONS, dbProduct.productOptions);
}

var TYPES = {
  PRODUCT_OPTIONS: "PRODUCT_OPTIONS",
  OPTION_ITEMS: "OPTION_ITEMS",
  SUB_OPTIONS: "SUB_OPTIONS",
  SUB_OPTION_ITEMS: "SUB_OPTION_ITEMS",
};

function save(key, items) {
  switch (key) {
    case TYPES.PRODUCT_OPTIONS:
      var productOptions = items;
      break;
    case TYPES.PRODUCT_OPTIONS:
      break;
    case TYPES.PRODUCT_OPTIONS:
      break;
    case TYPES.PRODUCT_OPTIONS:
      break;

    default:
      break;
  }
}

CreateUpdate(product);
