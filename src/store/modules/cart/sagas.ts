import { AxiosResponse } from 'axios'
import { all, select, takeLatest, call, put } from 'redux-saga/effects'
import { IState } from '../..'
import api from '../../../services/api'
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions'
import { ActionTypes } from './types'

// dentro do saga n podemos utilizar o async, a gente utiliza os generators que são uma api do JS apra trabalhar com assincronismo

interface IStockResponse {
    id: number
    quantity: number
}

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

function* checkProductStock({ payload }: CheckProductStockRequest, ) {
    const { product } = payload

    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
    })

    const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`)

    if(availableStockResponse.data.quantity > currentQuantity) {
        yield put(addProductToCartSuccess(product))
    } else {
        yield put(addProductToCartFailure(product.id))
    }

}

export default all([
    takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
])

// takeLatest = ao clicar várias vezes no botão de add ao carrinho, ele cancela os cliques anteriores e pega só o ultimo
/// takeEvery = pega todos os cliques
// takeLeading = ele pega a 1° descarta as outras

// select pega informação do estado do redux
// call faz as funções async
// put semelhante ao dispatch, ele dispara um ação