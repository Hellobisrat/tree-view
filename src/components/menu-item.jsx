import React, { useState } from 'react';
import MenuList from './menu-list';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [getCurrentlabel]: !prev[getCurrentlabel]
    }));
  }

  return (
    <li >
      <div className='menu-item'>
        <p>{item.label}</p>
        {item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? 
            <FaMinusCircle  color='#fff' size={20} /> : 
            <FaPlusCircle  color='#fff' size={20}/>}
          </span>
        ) : null}
      </div>
      {item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
