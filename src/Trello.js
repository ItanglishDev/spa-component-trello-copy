import Container from './Container'
import { productBacklog, parkingLot } from './data'
import React from 'react'

function Trello() {


  return (
    <div>
      <Container title='Product Backlog' array={productBacklog} />
      <Container title='Parking Lot' array={parkingLot} />
      {/* <Container title='List of Cards' array={listOfCards} /> */}

    </div>
  );
}

export default Trello;