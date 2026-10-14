import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Instagram, Facebook, ArrowRight } from 'lucide-react'
export default function Footer() {
 const [email,setEmail] = useState(''); const [sent,setSent] = useState(false)
 return <>
  <section className="newsletter"><div><p className="eyebrow">THE FASHIONIER LETTER</p><h2>A little inspiration,<br/><em>delivered.</em></h2><p>New collections, designer stories and considered edits — in your inbox.</p></div><form onSubmit={e=>{e.preventDefault();if(email.includes('@'))setSent(true)}}><label htmlFor="newsletter-email">YOUR EMAIL ADDRESS</label><div className="email-field"><input id="newsletter-email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/><button aria-label="Subscribe"><ArrowRight/></button></div><small>{sent ? 'Thank you — your demo subscription has been saved for this session.' : 'By subscribing, you agree to receive updates from fashionierZone.'}</small></form></section>
  <footer className="footer"><div className="footer-brand"><Link to="/" className="wordmark footer-logo"><span>fashionier</span><i>Zone</i></Link><p>Indian design, beautifully considered. Discover pieces for the moments that matter — and the ones that are simply yours.</p><div className="socials"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram/></a><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook/></a></div></div>
   <div className="footer-column"><h4>EXPLORE</h4><Link to="/shop/women">Women</Link><Link to="/shop/menswear">Men</Link><Link to="/shop/lehengas">Wedding edit</Link><Link to="/shop/new-arrivals">New arrivals</Link><Link to="/designers">Designers</Link></div>
   <div className="footer-column"><h4>HELP & INFORMATION</h4><Link to="/about">Our story</Link><Link to="/contact">Contact us</Link><Link to="/faq">FAQs</Link><Link to="/shipping">Shipping & delivery</Link><Link to="/returns">Returns & exchanges</Link></div>
   <div className="footer-column"><h4>YOUR ACCOUNT</h4><Link to="/account">Account & preferences</Link><Link to="/favorites">Saved pieces</Link><Link to="/cart">Shopping bag</Link><Link to="/privacy">Privacy policy</Link><Link to="/terms">Terms of use</Link></div>
   <div className="footer-bottom"><span>© 2026 fashionierZone. A style destination for every story.</span><span>INDIA · ENGLISH · INR ₹</span><span>Secure demo shopping experience</span></div>
  </footer>
  <aside className="ad-slot"><span>ADVERTISEMENT</span><div>Space for a carefully selected brand partner</div></aside>
 </>
}
