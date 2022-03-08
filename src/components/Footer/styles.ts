import styled from 'styled-components'

export const Container = styled.div`
display: flex
justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.colors.primary};
width: 100vw;
height: 240px;
`