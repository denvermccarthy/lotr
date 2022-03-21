import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <ul>
        <NavLink exact to={'/'}>
          <li>Home</li>
        </NavLink>
        <NavLink exact to={'/books'}>
          <li>Books</li>
        </NavLink>
        <NavLink exact to={'/characters'}>
          <li>Characters</li>
        </NavLink>
        <NavLink exact to={'/films'}>
          <li>Films</li>
        </NavLink>
      </ul>
    </div>
  );
}
