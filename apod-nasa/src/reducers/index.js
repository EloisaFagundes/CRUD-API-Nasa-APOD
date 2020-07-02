import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import photos from "./photos"
import favorites from "./favorites"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    photos,
    favorites
  })
