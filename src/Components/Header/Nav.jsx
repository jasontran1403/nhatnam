import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="">
        <Link to="/">Home</Link>
      </li>


      <li className="menu-item">
        <Link to="/management" onClick={() => setMobileToggle(false)}>
          Management
        </Link>
      </li>
      <li className="menu-item">
        <Link to="/menu" onClick={() => setMobileToggle(false)}>
          Menu
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setMobileToggle(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/testimonial" onClick={() => setMobileToggle(false)}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
                Faq
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
    </ul>
  );
}
