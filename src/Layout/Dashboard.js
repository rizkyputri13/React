import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <h2>Main Layout</h2>
            <ul>
                <Link to='/country'>
                    Country
                </Link>
                <Link to='/countryformik'>
                    Country Formik
                </Link>
                <Link to='/countryredux'>
                    Country Redux
                </Link>
            </ul>
            <main>
                {/* Page title & actions */}
                <Outlet />
            </main>
        </div>
    )
}
