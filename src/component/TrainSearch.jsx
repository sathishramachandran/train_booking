import React from "react";
import styled from "styled-components";
import { locations } from "../utils";

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export default function TrainSearch({ searchState, setSearchState }) {
    return (
        <>
            <Container>
                <h2>Search for trains</h2>
                <div className="tsearchbar">
                    <form
                        className="form-lable-tsearchbar"
                        value={searchState.from}
                        onChange={(e) =>
                            setSearchState((prevState) => ({
                                ...prevState,
                                from: e.target.value,
                            }))
                        }
                        {locations.map((data) => (
                            <option key={`${data}-source`} value={data}>
                                {data}
                            </option>
                        ))}
                    ></form>
                </div>
            </Container>
        </>
    );
}
