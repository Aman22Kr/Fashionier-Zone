import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Heart, ShoppingBag, Menu, X, UserRound, ChevronDown } from 'lucide-react'
import { categories } from '../data/catalog'
export default function Header({ cartCount, favoriteCount }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const submit = e => { e.preventDefault(); navigate(`/search?q=${encodeURIComponent(query)}`); setSearchOpen(false); setMobileOpen(false) }
  const nav = <>
    <Link to="/shop/women" onClick={() => setMobileOpen(false)}>WOMEN</Link>
    <Link to="/shop/menswear" onClick={() => setMobileOpen(false)}>MEN</Link>
    <Link to="/shop/lehengas" onClick={() => setMobileOpen(false)}>WEDDING</Link>
    <Link to="/shop/new-arrivals" onClick={() => setMobileOpen(false)}>NEW ARRIVALS</Link>
    <Link to="/designers" onClick={() => setMobileOpen(false)}>DESIGNERS</Link>
  </>
  return <>
    <div className="announcement">A little more extraordinary — complimentary shipping on orders over ₹15,000</div>
    <header className="site-header">
      <div className="header-main">
        <button className="icon-btn mobile-toggle" aria-label="Open menu" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
        <button className="icon-btn desktop-search" aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}><Search/></button>
        <Link to="/" className="wordmark"><span>fashionier</span><i>Zone</i><small>THE ART OF INDIAN DRESSING</small></Link>
        <div className="header-actions">
          <Link to="/account" aria-label="Account"><UserRound/></Link>
          <Link to="/favorites" aria-label="Saved items" className="count-link"><Heart/><span>{favoriteCount}</span></Link>
          <Link to="/cart" aria-label="Shopping bag" className="count-link"><ShoppingBag/><span>{cartCount}</span></Link>
        </div>
      </div>
      <nav className="desktop-nav">{nav}</nav>
      {mobileOpen && <nav className="mobile-nav">{nav}<Link to="/about">OUR STORY</Link><Link to="/contact">CONTACT</Link><Link to="/faq">HELP & FAQ</Link><form onSubmit={submit} className="mobile-search"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search designer, style..."/><button><Search size={17}/></button></form></nav>}
      {searchOpen && <form className="search-strip" onSubmit={submit}><Search size={18}/><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search designer, occasion or style"/><button type="submit">SEARCH</button><button type="button" className="icon-btn" onClick={()=>setSearchOpen(false)}><X size={18}/></button></form>}
    </header>
  </>
}
