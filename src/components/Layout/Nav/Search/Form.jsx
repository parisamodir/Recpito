import { VscClose } from 'react-icons/vsc';
const Form = (props) => {
  return (
    <div className='flex flex-row w-full items-center justify-around animate__fadeIn animate__animated  '>
      <div className='flex flex-row'>
        <input
          type='text'
          placeholder='Search..'
          name='search'
          className='rounded-full px-4 '
        ></input>
        <div onClick={props.CloseSearch} className='px-4'>
          <VscClose className='text-white' />
        </div>
      </div>
    </div>
  );
};

export default Form;
