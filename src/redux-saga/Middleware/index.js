import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeRegion from '../Constants/RegionConstant'
import * as ActionTypeCountry from '../Constants/CountryConstant'
import { handleAddRegion, handleDelRegion, handleEditRegion, handleGetOneRegion, handleGetRegion } from "./RegionMidle";
import { handleAddCountry, handleDelCountry, handleEditCountry, handleGetOneCountry, handleGetCountry } from "./CountryMidle";

function* watchAll(){
    yield all([
        takeEvery(ActionTypeRegion.GET_REGION_REQUEST,handleGetRegion),
        takeEvery(ActionTypeRegion.GETONE_REGION_REQUEST,handleGetOneRegion),
        takeEvery(ActionTypeRegion.ADD_REGION_REQUEST,handleAddRegion),
        takeEvery(ActionTypeRegion.DEL_REGION_REQUEST,handleDelRegion),
        takeEvery(ActionTypeRegion.EDIT_REGION_REQUEST,handleEditRegion),

        takeEvery(ActionTypeCountry.GET_COUNTRY_REQUEST,handleGetCountry),
        takeEvery(ActionTypeCountry.GETONE_COUNTRY_REQUEST,handleGetOneCountry),
        takeEvery(ActionTypeCountry.ADD_COUNTRY_REQUEST,handleAddCountry),
        takeEvery(ActionTypeCountry.DEL_COUNTRY_REQUEST,handleDelCountry),
        takeEvery(ActionTypeCountry.EDIT_COUNTRY_REQUEST,handleEditCountry)
    ])
}

export default watchAll