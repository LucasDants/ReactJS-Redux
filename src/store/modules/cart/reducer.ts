import { Reducer } from "redux"
import { ActionTypes, ICartState } from "./types"
import produce from 'immer'
const INITIAL_STATE: ICartState = {
    items: [],
    failedStockCheck: []
}

// immer ajuda a gente evitar a verbosidade de fazer alterações no estado (...state,...)
// o draft tem o mesmo formato do state
//no draft a gente consegue passar o estado sem o conceito de imutabilidade e no final ele compara o rascunho com o state e faz as alterações

// return {
//     ...state,
//     items: [
//         ...state.items, {
//             product,
//             quantity: 1
//         }
//     ]
// }

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case ActionTypes.addProductToCartSuccess: {
                const { product } = action.payload

                const productInCartIndex = draft.items.findIndex(item => item.product.id === product.id)

                if(productInCartIndex >= 0 ) {
                    draft.items[productInCartIndex].quantity++
                } else {
                    draft.items.push({
                        product,
                        quantity: 1
                    })
                }

                break;
            }
            case ActionTypes.addProductToCartFailure: {
                draft.failedStockCheck.push(action.payload.productId)
                break;
            }
            default: {
                return draft
            }
        }

    })
}

export default cart