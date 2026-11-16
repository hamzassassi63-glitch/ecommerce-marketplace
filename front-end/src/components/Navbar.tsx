import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/" aria-label="MarketplaceHome">
        <span>Marketplace</span>
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/account">Account</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;