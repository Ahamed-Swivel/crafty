import { useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '@/app/hooks';

import OrderSummary from '@/components/templates/OrderSummary';
import { getAnalytics, getOrders } from '@/features/analytic/analyticSlice';
import CraftItem from '@/components/molecules/CraftItem';

const AnalyticsPage = () => {
  const analytics = useAppSelector(state => state.analyticSlice.analytics)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAnalytics())
    dispatch(getOrders())
  }, [dispatch])

  if (!analytics){
    return null
  }

  const popularCrafts = [...analytics]
  popularCrafts.sort((a, b) => b.totalQuantity - a.totalQuantity);
  const topThree = popularCrafts.slice(0, 3)

  return (
    <Container className='mt-4'>
      <h1>Analytics</h1>
      <Row>
        <Col md={{ span: 11, offset: 1 }}>
            <h3>Top Selling</h3>
            <Row>
              {
                topThree?.map((craft) =>
                  <CraftItem
                    key={craft._id}
                    isEditable={false}
                    craft={{
                      ...craft,
                      category: `Rs ${craft.price} x ${craft.totalQuantity}`,
                      price: craft.sumPrice ?? 0
                    }}
                  />
                )
              }
            </Row>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={{ span: 5, offset: 1 }}>
          <h3>Sales Summary</h3>
          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Craft Title</th>
                <th>Sold Qty</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {analytics.map((craft, index) => (
                <tr key={craft._id}>
                  <td>{++index}</td>
                  <td>{craft.title}</td>
                  <td>{craft.totalQuantity} x {craft.price}</td>
                  <td>Rs {craft.sumPrice?.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <OrderSummary/>
        </Col>
      </Row>
    </Container>
  );
};

export default AnalyticsPage;
