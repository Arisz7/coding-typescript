"use strict";
var ProductName;
(function (ProductName) {
    ProductName["product1"] = "laptop";
    ProductName["product2"] = "mouse";
    ProductName["product3"] = "calculator";
})(ProductName || (ProductName = {}));
var ProductIds;
(function (ProductIds) {
    ProductIds["laptop"] = "1";
    ProductIds["mouse"] = "2";
    ProductIds["calculator"] = "3";
})(ProductIds || (ProductIds = {}));
var FavoriteProduct;
(function (FavoriteProduct) {
    FavoriteProduct["Name"] = "laptop";
    FavoriteProduct["ID"] = "1";
})(FavoriteProduct || (FavoriteProduct = {}));
console.log(FavoriteProduct);
