const SubMenu = (props) => {
  return (
    <li className='px-4 text-center py-3 text-white text-base font-bold border-b border-yellow-400 w-24'>
      {props.text}
    </li>
  );
};

export default SubMenu;
