import { createFileRoute } from '@tanstack/react-router'
import CardProduct from '~/components/card-product'
import Categories from '~/components/categories'

const products = [
  {
    name: 'Acme ship on shoes',
    price: '200.00',
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&w=1080&q=75'
  },
  {
    name: 'Acme T-Shirts',
    price: '123.00',
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75'
  },
  {
    name: 'Acme Drawing Bag',
    price: '165.00',
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=1080&q=75'
  },
  {
    name: 'Acme Keyboard',
    price: '231.00',
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&w=1080&q=75'
  },
  {
    name: 'Acme Prisma T-Shirts',
    price: '290.00',
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fsticker.png%3Fv%3D1690003619&w=1080&q=75'
  },
  {
    name: 'Acme Sticker',
    price: '300.00',
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fsticker-rainbow.png%3Fv%3D1690003602&w=1080&q=75'
  },
  {
    name: 'Acme Pacifier',
    price: '111.00',
    image:
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&w=1080&q=75'
  }
]

const Shop = () => {
  return (
    <div className='grid grid-cols-12 gap-8'>
      <div className='col-span-2'>
        <Categories />
      </div>
      <div className='col-span-10 grid grid-cols-3 gap-4'>
        {products.map((product) => (
          <CardProduct {...product} key={product.name} />
        ))}
      </div>
    </div>
  )
}

export const Route = createFileRoute('/shop')({
  component: Shop
})

export default Shop
