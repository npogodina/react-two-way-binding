import React from 'react';
import { Header, Container } from 'semantic-ui-react';

export default function UserOutput(props) {
  return (
    <Container>
      <Header>{props.username }</Header>
      <p>The Wheel of Time is a series of high fantasy novels written by American author James Oliver Rigney Jr., under his pen name of Robert Jordan. Originally planned as a six-book series, The Wheel of Time spanned fourteen volumes, in addition to a prequel novel and two companion books. Jordan began writing the first volume, The Eye of the World, in 1984, and it was published in January 1990.</p>
      <p>Jordan died in 2007 while working on what was planned to be the twelfth and final volume in the series. He prepared extensive notes so another author could complete the book according to his wishes. Fellow fantasy author and long-time Wheel of Time fan Brandon Sanderson was brought in to complete the final book, but during the writing process, it was decided that the book would be far too large to be published in one volume and would instead be published as three volumes: The Gathering Storm (2009), Towers of Midnight (2010), and A Memory of Light (2013).</p>
    </Container>
  )
}
