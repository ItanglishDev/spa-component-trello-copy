import Container from './Container'
import { productBacklog } from './data'

function trello() {


  return (
    <div>
      <Container title='Product Backlog' array={productBacklog} />
      <Container title='Parking Lot' array={parkingLot} />
      <Container title='List of Cards' array={listOfCards} />

    </div>
  );
}

export default trello;