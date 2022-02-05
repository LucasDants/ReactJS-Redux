import { ActionTypes, IProduct } from "./types";

// Com o saga, caso tenha uma situação de dar sucesso/falha, a gente replica nossa action em 3

export function addProductToCartRequest(product: IProduct) {
    return {
        type: ActionTypes.addProductToCartRequest, // tipo da ação
        payload: {
            product,
        }  // informação adicional para conseguir add o produto ao carrinho
    }
}   

export function addProductToCartSuccess(product: IProduct) {
    return {
        type: ActionTypes.addProductToCartSuccess, 
        payload: {
            product,
        } 
    }
}   

export function addProductToCartFailure(productId: number) {
    return {
        type: ActionTypes.addProductToCartFailure, 
        payload: {
            productId
        }
    }
}   