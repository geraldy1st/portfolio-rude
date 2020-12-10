import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <header className='bg-blue-200'>
            <div className='container mx-auto flex justify-between'>
                <nav className="flex">
                    <NavLink to='/' exact activeClassName='text-white' className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Geraldy
                    </NavLink>
                    <NavLink to='/post'>
                        Blog Posts
                    </NavLink>
                    <NavLink to='/project'>
                        Projects
                    </NavLink>
                    <NavLink to='/about'>
                        About Me!
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
