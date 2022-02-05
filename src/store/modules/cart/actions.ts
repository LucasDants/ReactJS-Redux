import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
    return {
        type: "ADD_PRODUCT_TO_CART", // tipo da ação
        payload: {
            product,
        }  // informação adicional para conseguir add o produto ao carrinho
    }
}   