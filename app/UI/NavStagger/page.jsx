import React from 'react'
import './styletfour.css'

const NavStaggerpage = () => {
  return (
    <nav>
    <a href="#">
        <span class="inner">
            <span class="content">Work</span>
        </span>
        <span class="inner" aria-hidden="true">
            <span class="content">Work</span>
        </span>

        <span class="icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20V4M5 13L12 20L19 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
        </span>
    </a>

    <section class="dropdown">
        <ul>
            <li><a href="#">Identity</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">Frontend Dev</a></li>
        </ul>
    </section>
</nav>  )
}

export default NavStaggerpage