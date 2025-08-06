import { Link } from 'react-router'

interface NavbarProps {
  additionalLinks?: React.ReactNode
}

const Navbar = ({ additionalLinks }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between p-[30px]">
      <div className="flex items-center gap-[60px]">
        <img
          src="/assets/images/logos/logo.svg"
          className="flex shrink-0"
          alt="logo"
        />
        <ul className="flex items-center gap-10">
          <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
            <Link to="pricing.html">Pricing</Link>
          </li>
          <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
            <Link to="#">Features</Link>
          </li>
          <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
            <Link to="#">Testimonials</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">{additionalLinks}</div>
    </nav>
  )
}

export default Navbar
