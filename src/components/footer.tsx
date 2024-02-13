import { Link } from '@nextui-org/react'
import { AcmeLogo } from '~/assets/Acmelogo'

const Footer = () => {
  return (
    <div className='mt-6'>
      <footer className='grid grid-cols-4 items-start'>
        <div className='flex items-center justify-center font-semibold'>
          <AcmeLogo />
          ACME shop
        </div>
        <div className='col-span-2 flex flex-col gap'>
          <Link href='/home' color='foreground'>
            Home
          </Link>
          <Link color='foreground' href='/shop'>
            Shop
          </Link>
          <Link color='foreground' href='/contact'>
            Contact
          </Link>
        </div>
        <div>Page Admin</div>
      </footer>
      <div className='border-t border-neutral-200 py-6 text-sm dark:border-neutral-700 mt-6 '>
        <div className='flex justify-between items-center container mx-auto'>
          <div className='container mx-auto text-neutral-200'>
            © 2023-2024 ACME, Inc. All rights reserved. Designed in California
          </div>
          <div className='flex items-center justify-center font-semibold text-neutral-200 min-w-max'>
            <AcmeLogo />
            <p> ACME shop</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
