import { combineReducers } from "redux";
import RegionReduce from "./RegionReducer";
import CountryReduce from "./CountryReducer";

const rootReducer = combineReducers({
    regionStated: RegionReduce,
    countryStated: CountryReduce
})

export default rootReducer