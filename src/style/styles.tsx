import styled from "styled-components"

export const Container = styled.div`
    max-width: 800px;
    height: 70vh;
    overflow-y: scroll;
    margin: auto;
    padding: 20px;
    background-color: ${({ color }) => color};
    color: black;
    border: #DFD3C3 1px solid;
`;