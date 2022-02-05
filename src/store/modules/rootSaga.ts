import { all } from "redux-saga/effects";

import cart from './cart/sagas'
    // usar function* é semelhante ao async function (o async wait é transformado em um generator), mas ele é um generator
    // await é transformado em yield
export default function* rootSaga(): any {
    return yield all([
        cart,
    ])
}