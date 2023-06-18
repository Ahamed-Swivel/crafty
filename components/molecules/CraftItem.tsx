import { Card, Col } from 'react-bootstrap'

import Craft from '@/models/Craft'
import Button from '@/components/atoms/Button'
import { addToCart } from '@/features/order/orderSlice';
import { useAppDispatch } from '@/app/hooks';


interface Props {
  craft: Craft;
}

const CraftItem: React.FC<Props> = ({ craft }) => {
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({...craft, quantity: 1}))
  }

  return (
    <Col md={3} className='mt-3'>
      <Card>
        <Card.Img height={200} className="object-fit-cover" variant="top" src={craft.imageUrl} />
        <Card.Body>
          <Card.Subtitle>{craft.category}</Card.Subtitle>
          <Card.Title>{craft.title}</Card.Title>
          <Card.Text>Rs {craft.price}</Card.Text>
          <Button variant='secondary' onClick={handleAddToCart}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )}

export default CraftItem
