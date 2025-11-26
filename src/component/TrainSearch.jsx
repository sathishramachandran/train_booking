import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export default function TrainSearch() {
  return (
    <>
      <Container>
        <h2>Search for trains</h2>
      </Container>
    </>
  );
}
