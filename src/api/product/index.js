"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProductById = exports.getAllProducts = void 0;
const api__1 = __importDefault(require("../api\";"));
const getAllProducts = () => {
    api__1.default.get('/products/all')
        .then((response) => {
        console.log('Produkty:', response.data);
        response.data;
    })
        .catch((error) => console.error('Błąd podczas pobierania produktów:', error));
};
exports.getAllProducts = getAllProducts;
const getProductById = (id) => {
    api__1.default.get(`/products/${id}`)
        .then((response) => {
        console.log('Produkt:', response.data);
        response.data;
    })
        .catch((error) => console.error('Błąd podczas pobierania produktu:', error));
};
exports.getProductById = getProductById;
const addProduct = (newProduct) => {
    api__1.default.post('/products', newProduct)
        .then((response) => {
        console.log('Produkt dodany:', response.data);
    })
        .catch((error) => console.error('Błąd podczas dodawania produktu:', error));
};
exports.addProduct = addProduct;
const updateProduct = (id, updatedProduct) => {
    api__1.default.put(`/products/${id}`, updatedProduct)
        .then((response) => {
        console.log('Produkt zaktualizowany:', response.data);
    })
        .catch((error) => console.error('Błąd podczas aktualizacji produktu:', error));
};
exports.updateProduct = updateProduct;
const deleteProduct = (id) => {
    api__1.default.delete(`/products/${id}`)
        .then((response) => {
        console.log('Produkt usunięty:', response.data);
    })
        .catch((error) => console.error('Błąd podczas usuwania produktu:', error));
};
exports.deleteProduct = deleteProduct;
