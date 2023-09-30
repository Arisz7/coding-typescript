enum ProductName {
  product1 = "laptop",
  product2 = "mouse",
  product3 = "calculator",
}

// console.log(ProductName);

enum ProductIds {
  laptop = "1",
  mouse = "2",
  calculator = "3",
}

// console.log(ProductIds);

enum FavoriteProduct {
  Name = ProductName.product1,
  ID = ProductIds.laptop,
}

console.log(FavoriteProduct);
