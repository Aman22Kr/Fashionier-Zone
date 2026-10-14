export const categories = [
  { name: 'Lehengas', image: 'photo-1610030469983-98e550d6193c', slug: 'lehengas' },
  { name: 'Sarees', image: 'photo-1610030469983-98e550d6193c', slug: 'sarees' },
  { name: 'Kurta Sets', image: 'photo-1583391733956-6c78276477e7', slug: 'kurta-sets' },
  { name: 'Gowns', image: 'photo-1595777457583-95e059d581b8', slug: 'gowns' },
  { name: 'Jewellery', image: 'photo-1617038220319-276d3cfab638', slug: 'jewellery' },
  { name: 'Menswear', image: 'photo-1617137968427-85924c800a22', slug: 'menswear' }
]

const photos = {
  lehenga: 'photo-1610030469983-98e550d6193c', saree: 'photo-1610030469983-98e550d6193c', kurta: 'photo-1583391733956-6c78276477e7', gown: 'photo-1595777457583-95e059d581b8', jewelry: 'photo-1617038220319-276d3cfab638', mens: 'photo-1617137968427-85924c800a22'
}
const p = (id, name, designer, price, category, image, color, tag='New Season') => ({ id, name, designer, price, category, image, color, tag, description: `A considered expression of Indian craftsmanship, this ${name.toLowerCase()} brings thoughtful detailing and a modern silhouette to your occasion wardrobe.` })
export const products = [
 p('fz101','Rose Gold Embroidered Lehenga','Aarohi Studio',42800,'Lehengas',photos.lehenga,'Rose','Bestseller'),
 p('fz102','Ivory Garden Saree','Mira by Design',26500,'Sarees','photo-1610030469983-98e550d6193c','Ivory'),
 p('fz103','Mulberry Silk Kurta Set','House of Riwaaz',18900,'Kurta Sets',photos.kurta,'Mulberry','Just In'),
 p('fz104','Midnight Bloom Evening Gown','Studio Vanya',35900,'Gowns',photos.gown,'Midnight'),
 p('fz105','Temple Bloom Statement Earrings','Aarna Jewels',6800,'Jewellery',photos.jewelry,'Gold'),
 p('fz106','Ivory Textured Sherwani','The Darzi Edit',32900,'Menswear',photos.mens,'Ivory'),
 p('fz107','Crimson Celebration Lehenga','Aarohi Studio',51700,'Lehengas','photo-1597089542047-b9873d82d3ae','Crimson','Limited Edition'),
 p('fz108','Sage Chanderi Co-ord Set','Mira by Design',14200,'Kurta Sets','photo-1583391733956-6c78276477e7','Sage'),
 p('fz109','Champagne Draped Saree','Studio Vanya',29900,'Sarees','photo-1610030469983-98e550d6193c','Champagne','Bestseller'),
 p('fz110','Pearl Cascade Necklace','Aarna Jewels',9200,'Jewellery','photo-1617038220319-276d3cfab638','Pearl'),
 p('fz111','Rose Tulle Occasion Gown','House of Riwaaz',38500,'Gowns','photo-1595777457583-95e059d581b8','Rose'),
 p('fz112','Midnight Bandhgala Set','The Darzi Edit',27900,'Menswear','photo-1617137968427-85924c800a22','Midnight','Just In')
]
export const designers = ['Aarohi Studio','Mira by Design','House of Riwaaz','Studio Vanya','Aarna Jewels','The Darzi Edit','Iraaya','Label Noor']
export const imageUrl = (id, width=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`
