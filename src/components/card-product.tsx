import { Button, Card, CardFooter, Image } from '@nextui-org/react'

interface Props {
  image: string
  price: string
  name: string
}

const CardProduct = ({ name, price, image }: Props) => {
  return (
    <Card
      isFooterBlurred
      radius='lg'
      className=' cursor-pointer hover:border-1.5 border-1.5 border-black hover:border-blue-500'
    >
      <Image alt='Woman listing to music' className='object-cover hover:scale-105 hover:transition-all ' src={image} />
      <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
        <p className='text-tiny text-white/80'>{name}</p>
        <Button className='text-tiny text-white bg-black/20' variant='flat' color='default' radius='lg' size='sm'>
          ${price}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardProduct
