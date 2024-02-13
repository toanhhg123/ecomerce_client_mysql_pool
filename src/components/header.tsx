import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { Link } from '@tanstack/react-router'
import { ShoppingCart } from 'lucide-react'
import { AcmeLogo } from '~/assets/Acmelogo'

export default function Header() {
  return (
    <Navbar position='static'>
      <NavbarBrand>
        <AcmeLogo />
        <p className='font-bold text-inherit'>ACME</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link className='text-foreground [&.active]:font-bold [&.active]:text-primary' to={'/'}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/shop' className='[&.active]:font-bold [&.active]:text-primary'>
            Shop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-foreground [&.active]:font-bold [&.active]:text-primary' to={'/'}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        {/* <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem> */}
        <NavbarItem>
          <Button isIconOnly>
            <ShoppingCart />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
