import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Grid from '@material-ui/core/Grid';

const Container = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'PMH',
    },
    {
      id: 2,
      text: 'PSH',
    },
    {
      id: 3,
      text: 'Medications',
    },
    {
      id: 4,
      text: 'Social History',
    },
    {
      id: 5,
      text: 'Wellness',
    },
    {
      id: 6,
      text: 'Plan/Orders',
    },
    {
      id: 7,
      text: 'Providers',
    },
    {
      id: 8,
      text: 'Notes',
    },
    {
      id: 9,
      text: 'Message/Task',
    },
    {
      id: 10,
      text: 'Family History',
    },
  ])
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex]
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      )
    },
    [cards],
  )
  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    )
  }
  return (
    <FuseScrollbars className="flex-grow overflow-x-auto">
      <Grid container spacing={1}>{cards.map((card, i) => renderCard(card, i))}</Grid>
    </FuseScrollbars>
  )
}

export default Container