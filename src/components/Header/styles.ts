import styled from 'styled-components'
import { coverImg } from '../../assets'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 4rem 2rem 8.375rem;
  display: grid;
  place-items: center;
  background-image: url(${coverImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
