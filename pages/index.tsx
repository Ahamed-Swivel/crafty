import { Container, Row } from 'react-bootstrap';

import CraftCards from '@/components/templates/CraftCards';
import Craft from '@/models/Craft'
import CartBadge from '@/components/molecules/CartBadge';
import service from '@/services';

interface Props {
  crafts: Craft[];
}

const HomePage: React.FC<Props> = ({ crafts }) => {
  return (
    <Container className='mt-5 mb-5'>
      <CartBadge/>
      <Row>
        <CraftCards crafts={crafts} />
      </Row>
    </Container>
  );
};

export default HomePage;
export async function getServerSideProps() {
  const crafts: Craft[] | undefined = await service.getCrafts()

  return { props: { crafts: crafts ?? [] } }
}

