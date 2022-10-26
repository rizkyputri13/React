import React from 'react'
import {Link} from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
        <h2>Main Layout</h2>
        <ul>
            <Link to='/country'>
                Country
            </Link>
        </ul>
    </div>
  )
}