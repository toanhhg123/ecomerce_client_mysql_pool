import { createLazyFileRoute } from '@tanstack/react-router'
import CardProduct from '~/components/card-product'

export const Route = createLazyFileRoute('/')({
  component: Index
})

function Index() {
  return (
    <div className='grid grid-cols-5 gap-8'>
      <div className='col-span-3'>
        <CardProduct
          image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&w=1920&q=75'
          name='Suilt Clothing'
          price='123'
        />
      </div>

      <div className='col-span-2 grid gap-8'>
        <CardProduct
          image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75'
          name='Suilt Clothing'
          price='123'
        />
        <CardProduct
          image='https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1080&q=75'
          name='Suilt Clothing'
          price='123'
        />
      </div>
    </div>
  )
}

export default Index
