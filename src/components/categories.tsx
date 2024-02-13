import { Link } from '@tanstack/react-router'

const Categories = () => {
  return (
    <div>
      <h6 className='text-xs text-neutral-500'>Categories</h6>
      <ul className='flex flex-col text-sm'>
        <li>
          <Link to='/shop'>All</Link>
        </li>
        <li>
          <Link to='/shop'>Bags</Link>
        </li>
        <li>
          <Link to='/shop'>Footwear</Link>
        </li>
        <li>
          <Link to='/shop'>Hoodies</Link>
        </li>
        <li>
          <Link to='/shop'>Shirts</Link>
        </li>
      </ul>
    </div>
  )
}

export default Categories
