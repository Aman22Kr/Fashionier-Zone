import { Heart, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { imageUrl } from '../data/catalog'
export default function ProductCard({ product, favorites, toggleFavorite }) {
 const saved = favorites.includes(product.id)
 return <article className="product-card"><div className="product-image-wrap"><Link to={`/product/${product.id}`}><img src={imageUrl(product.image,700)} alt={product.name} loading="lazy" onError={e=>{e.currentTarget.src='https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80'}}/></Link><span className="product-tag">{product.tag}</span><button className={`favorite-btn ${saved?'is-saved':''}`} aria-label={saved?'Remove from saved':'Save item'} onClick={()=>toggleFavorite(product.id)}><Heart size={18} fill={saved?'currentColor':'none'}/></button><Link className="quick-view" to={`/product/${product.id}`}>DISCOVER <ArrowUpRight size={15}/></Link></div><div className="product-meta"><span>{product.designer}</span><Link to={`/product/${product.id}`}>{product.name}</Link><strong>₹{product.price.toLocaleString('en-IN')}</strong></div></article>
}
