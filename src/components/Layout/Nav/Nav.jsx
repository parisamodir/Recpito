import '../../../app-asset/scss/nav/nav.scss';
import { CgMenuLeftAlt, CgChevronDown } from 'react-icons/cg';
const Nav = () => {
  return (
    <nav className='flex flex-row  justify-around bg-main-100 h-24 items-center shadow-md text-xl '>
      <div className=' text-white text-4xl'>
        <CgMenuLeftAlt />
      </div>
      <div className='flex flex-row px-5 py-1 bg-orange-800 rounded-full items-center border-gray-300'>
        <div className=' text-gray-500 '>Lunch</div>
        <CgChevronDown className='text-gray-400' />
      </div>
      <div className=' font-serif italic text-gray-300'>RECIPTO</div>
    </nav>
  );
};

export default Nav;
