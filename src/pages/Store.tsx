import storeItems from "../data/items.json"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import StoreItem from "../components/StoreItem"

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem
              id={item.id}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store
