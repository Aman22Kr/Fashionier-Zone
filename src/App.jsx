import { useMemo } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useStoredState } from './hooks/useStoredState'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { ProductDetail, About, Contact, FAQ, Designers, Account, Legal, NotFound } from './pages/InfoPages'
import { SearchPage, Favorites, Cart } from './pages/UtilityPages'
import './styles.css'
function AppShell(){
 const [favorites,setFavorites]=useStoredState('favorites',[])
 const [cart,setCart]=useStoredState('cart',[])
 const toggleFavorite=id=>setFavorites(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id])
 const addToCart=(id,size)=>setCart(old=>{const found=old.find(x=>x.id===id&&x.size===size);return found?old.map(x=>x.id===id&&x.size===size?{...x,quantity:x.quantity+1}:x):[...old,{id,size,quantity:1}]})
 const updateCart=(id,size,quantity)=>setCart(old=>old.map(x=>x.id===id&&x.size===size?{...x,quantity}:x))
 const removeFromCart=(id,size)=>setCart(old=>old.filter(x=>!(x.id===id&&x.size===size)))
 const cartCount=useMemo(()=>cart.reduce((n,x)=>n+x.quantity,0),[cart])
 const location=useLocation()
 return <div className="app-shell"><Header cartCount={cartCount} favoriteCount={favorites.length}/><div key={location.pathname} className="route-content"><Routes>
  <Route path="/" element={<Home favorites={favorites} toggleFavorite={toggleFavorite}/>}/>
  <Route path="/shop" element={<Navigate to="/shop/women" replace/>}/><Route path="/shop/:slug" element={<Shop favorites={favorites} toggleFavorite={toggleFavorite}/>}/>
  <Route path="/product/:id" element={<ProductDetail favorites={favorites} toggleFavorite={toggleFavorite} addToCart={addToCart}/>}/>
  <Route path="/search" element={<SearchPage favorites={favorites} toggleFavorite={toggleFavorite}/>}/><Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite}/>}/><Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} removeFromCart={removeFromCart}/>}/>
  <Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/faq" element={<FAQ/>}/><Route path="/designers" element={<Designers/>}/><Route path="/account" element={<Account/>}/>
  <Route path="/shipping" element={<Legal type="shipping"/>}/><Route path="/returns" element={<Legal type="returns"/>}/><Route path="/privacy" element={<Legal type="privacy"/>}/><Route path="/terms" element={<Legal type="terms"/>}/><Route path="*" element={<NotFound/>}/>
 </Routes></div><Footer/></div>
}
export default function App(){return <HashRouter><AppShell/></HashRouter>}
