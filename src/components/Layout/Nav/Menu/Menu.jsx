import { useRef, useEffect } from 'react';
import SubMenu from './SubMenu';
const Menu = (props) => {
  const data = ['home', 'dinner', 'lunch'];
  const ref = useRef(null);
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      props.changeMenu();
    }
  }
  document.addEventListener('mousedown', handleClickOutside);
  return (
    <ul className='absolute  bg-main-100' ref={ref} style={{ top: '100%' }}>
      {data.map((data, index) => (
        <SubMenu key={index} text={data} />
      ))}
    </ul>
  );
};

export default Menu;
