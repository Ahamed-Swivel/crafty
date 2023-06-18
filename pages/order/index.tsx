import { Container } from 'react-bootstrap';

import OrderForm from '@/components/templates/OrderForm';

const HomePage: React.FC = () => {
  return (
    <Container className='mt-5 mb-5'>
      <OrderForm/>
    </Container>
  );
};

export default HomePage;
