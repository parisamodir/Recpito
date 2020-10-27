import { useState, Fragment } from 'react';

import Form from './Search/Form';
import Menu from './Menu/Menu';

import { CgMenuLeftAlt } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';

import '../../../app-asset/scss/nav/nav.scss';
const Nav = () => {
  const [search, changeSearch] = useState(false);
  const [menu, changeMenu] = useState(false);

  const switchSearch = () => changeSearch((value) => !value);
  const switchMenu = () => changeMenu((value) => !value);
  return (
    <nav className='bg-main-100 flex relative w-full h-24 items-center shadow-md text-xl '>
      {search ? (
        <Form CloseSearch={switchSearch} />
      ) : (
        <div className='flex animate__animated animate__fadeIn flex-row w-full items-center  justify-around '>
          <div className='w-2/6 flex justify-center'>
            <CgMenuLeftAlt
              onClick={switchMenu}
              className='text-white w-6 h-6'
            />
          </div>
          <div className='w-2/6 flex justify-center'>
            <h1 className=' font-serif italic text-gray-300 font-bold text-lg'>
              RECIPTO
            </h1>
          </div>
          <div className='w-2/6 flex justify-center'>
            <AiOutlineSearch
              onClick={switchSearch}
              className='text-white w-6 h-6'
            />
          </div>
        </div>
      )}
      {menu && <Menu changeMenu={changeMenu} />}
    </nav>
  );
};

export default Nav;
