import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'

import CraftCards from '@/components/templates/CraftCards';
import Craft from '@/models/Craft'
import CartBadge from '@/components/molecules/CartBadge';
import service from '@/services';
import LoginButton from '@/components/molecules/LoginButton';
import Button from '@/components/atoms/Button';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { populateCraft } from '@/features/craft/craftSlice';
import { useSession } from 'next-auth/react';

interface Props {
  crafts: Craft[];
}

const HomePage: React.FC<Props> = ({ crafts }) => {
  const dispatch = useAppDispatch()
  const { data: session } = useSession()
  const craftsFromStore = useAppSelector(state => state.craftSlice.crafts)

  useEffect(() => {
    dispatch(populateCraft(crafts))
  }, [crafts, dispatch])

  return (
    <Container className='mt-5 mb-5'>
      <Row>
        <Col>
          <CartBadge/>
        </Col>
        {
          session && <Col align="end">
            <Link href="/craft/new">
              <Button variant="primary">Add new Craft</Button>
            </Link>
            <Link href="/analytics">
              <Button variant="primary">Analytics</Button>
            </Link>
          </Col>
        }
      </Row>
      <Row>
        <CraftCards crafts={craftsFromStore || crafts} />
      </Row>
      <LoginButton/>
    </Container>
  );
};

export default HomePage;
export async function getServerSideProps() {
  const crafts: Craft[] | undefined = await service.getCrafts()

  return { props: { crafts: crafts ?? [] } }
}

