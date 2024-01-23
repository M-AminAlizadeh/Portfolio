import {Link} from 'react-router-dom'

const Navbar = () => {
  return(
    <div className='border mt-2 mx-3 flex'>
      {/* Name */}
      <h1>Amin Alizadeh</h1>
      {/* Links */}
      <nav>
        <ul className='flex'>
          <li><Link to='#projects'>Projects</Link></li>
          <li><Link to='#about-me'>About me</Link></li>
          <li><Link to='#contact-me'>contact me</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
      </nav>
      {/* Theme */}
      <div className='border flex'>
        <span>light</span>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 peer bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
        </label>
        <span>dark</span>
      </div>
    </div>
  )
}

export default Navbar;
