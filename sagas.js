import { delay } from 'redux-saga'
import { put, takeEvery, all, takeLatest } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  yield delay(3000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

// 注意現在我們只能 export rootSaga
// 單一進入點，一次啟動所有 saga
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()])
}
