import styled from "styled-components"

export const Container = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: ${({ color }) => color};
    color: black;
`;