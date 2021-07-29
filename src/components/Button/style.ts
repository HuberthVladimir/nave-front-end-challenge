import styled from 'styled-components'

export const Container = styled.button`
   width: 11rem;
   height: 2.5rem;
   padding: 0;
   border: 1px solid #212121;
   background-color: ${props => props.color === 'black' ? '#212121' : '#FFFFFF'};
   color: ${props => props.color === 'black' ? '#FFFFFF' : '#212121'};
`