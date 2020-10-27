import { useState, Fragment } from 'react';

import Form from './Search/Form';

import { CgMenuLeftAlt } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';

import '../../../app-asset/scss/nav/nav.scss';
const Nav = () => {
  const [search, changeSearch] = useState(false);
  const switchSearch = () => changeSearch((value) => !value);
  return (
    <nav className='bg-main-100 flex  w-full h-24 items-center shadow-md text-xl '>
      {search ? (
        <Form CloseSearch={switchSearch} />
      ) : (
        <div className='flex animate__animated animate__fadeIn flex-row w-full items-center  justify-around '>
          <div className='w-2/6 flex justify-center'>
            <CgMenuLeftAlt className='text-white w-6 h-6' />
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
    </nav>
  );
};

export default Nav;
