import { Link } from 'react-router'
import { SIDEBAR_MENU } from '../../utils/constants'
import useCustom from './hooks'

interface SidebarProps {
  role?: 'manager' | 'student'
}

const Sidebar = ({ role = 'manager' }: SidebarProps) => {
  const { data, methods } = useCustom()

  return (
    <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[280px] my-[10px] ml-[10px] bg-[#060A23] overflow-hidden flex flex-1 rounded-[20px]">
      <div className="scroll-container flex w-full overflow-y-scroll hide-scrollbar">
        <nav className="flex flex-col w-full h-fit p-[30px] gap-10 z-10">
          <Link to="index.html">
            <img src="/assets/images/logos/logo.svg" alt="logo" />
          </Link>
          {SIDEBAR_MENU.map((section, index) => (
            <ul key={index} className="flex flex-col gap-4">
              <p className="font-semibold text-xs leading-[18px] text-white">
                {section.title}
              </p>
              {section.items
                .filter((item) => item.roles.includes(role))
                .map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    onClick={() => methods.toggleMenu(item.title)}
                  >
                    <Link to={item.path}>
                      <div
                        className={`flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] ${
                          item.title === data.activeMenu
                            ? 'bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]'
                            : 'bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]'
                        }`}
                      >
                        <img
                          src={item.icon}
                          className="w-6 h-6"
                          alt={`${item.title} icon`}
                        />
                        <span className="font-semibold text-white">
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          ))}
        </nav>
      </div>
      <img
        src="/assets/images/backgrounds/sidebar-glow.png"
        className="absolute object-contain object-bottom bottom-0"
        alt="background"
      />
    </aside>
  )
}

export default Sidebar
