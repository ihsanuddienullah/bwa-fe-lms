import { Link } from 'react-router'
import useCustom from './hooks'

const Header = () => {
  const { data, methods } = useCustom()

  return (
    <div id="TopBar" className="flex items-center justify-between gap-[30px]">
      <form
        action=""
        className="flex items-center w-full max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
      >
        <input
          type="text"
          name="search"
          id="search"
          className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D]"
          placeholder="Search course, student, other file..."
        />
        <img
          src="/assets/images/icons/search-normal.svg"
          className="w-6 h-6"
          alt="icon"
        />
      </form>
      <div className="relative flex items-center justify-end gap-[14px]">
        <div className="text-right">
          <p className="font-semibold capitalize">{data.userData?.name}</p>
          <p className="text-sm leading-[21px] text-[#838C9D] capitalize">
            {data.userData?.role}
          </p>
        </div>
        <button
          type="button"
          id="profileButton"
          className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={methods.toggleDropdown}
        >
          <img
            src="/assets/images/photos/photo-1.png"
            className="w-full h-full object-cover"
            alt="profile photos"
          />
        </button>
        <div
          id="ProfileDropdown"
          className={`absolute top-full z-10 ${
            data.profileDropdown ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col w-[200px] rounded-[20px] border border-[#CFDBEF] p-5 gap-4 bg-white mt-4">
            <li className="font-semibold">
              <Link to="#">My Account</Link>
            </li>
            <li className="font-semibold">
              <Link to="#">Subscriptions</Link>
            </li>
            <li className="font-semibold">
              <Link to="#">Settings</Link>
            </li>
            <li
              className="cursor-pointer font-semibold"
              onClick={methods.handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
