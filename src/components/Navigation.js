import React from 'react'
import './styles/Header.css'
export default function Navigation() {
  return (
    <nav className='navigation'>
  <ul>
      <li className='active'><a href='#home'>Home</a></li>
      <li><a href='#news'>News</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#contact'>Contact</a></li>
  </ul>
</nav>
  )
}
