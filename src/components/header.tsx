import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { Link, useNavigate } from '@tanstack/react-router'
import { ShoppingCart } from 'lucide-react'
import { AcmeLogo } from '~/assets/Acmelogo'

export default function Header() {
  const navigate = useNavigate()

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
          <Link className='text-foreground [&.active]:font-bold [&.active]:text-primary' to={'/contact'}>
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
          <Button
            isIconOnly
            onPress={() => {
              navigate({ to: '/cart' })
            }}
          >
            <ShoppingCart />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
