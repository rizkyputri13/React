import React from 'react'
import {Navigate,useRoutes} from 'react-router-dom'
import Dashboard from './Layout/Dashboard'
// import RegionViewApi from './ViewApiRegion/RegionViewApi'
// import FormikRegionViewApi from './ViewApiRegion/FormikRegionViewApi'
// import FormikRegionViewApiRedux from './ViewReduxSagaRegion/FormikRegionViewApi'
import CountryViewApi from './ViewApiCountry/CountryViewApi'
import FormikCountryViewApi from './ViewApiCountry/FormikCountryViewApi'
import FormikCountryViewApiRedux from './ViewReduxSagaCountry/FormikCountryViewApi'
//import Home from './ViewApiCountry/Home'


export default function Routes() {
  return useRoutes([
    {
        path: '/',
        element :<Dashboard/>,
        children:[
            // {path:'region', element:<RegionViewApi/>},
            // {path:'regionformik', element:<FormikRegionViewApi/>},
            // {path:'regionredux',element:<FormikRegionViewApiRedux/>},
            {path:'country', element:<CountryViewApi/>},
            {path:'countryformik', element:<FormikCountryViewApi/>},
            {path:'countryredux',element:<FormikCountryViewApiRedux/>},
            //{path: 'Home',element: <Home/>}
        ]
    },
    {
        path:'*', element:<Navigate to='/404' replace/>
    }
  ])
}
