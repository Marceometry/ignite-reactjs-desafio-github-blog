import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  padding-left: 2.5rem;
  margin-top: -5.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    a {
      color: ${(props) => props.theme['blue-300']};
      font-size: 0.75rem;
      font-weight: 700;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-10']};
  }

  footer {
    flex: 1;
    display: flex;
    align-items: flex-end;
    gap: 1.5rem;

    a {
      color: ${(props) => props.theme['gray-100']};

      svg {
        color: ${(props) => props.theme['gray-400']};
      }
    }
  }
`
