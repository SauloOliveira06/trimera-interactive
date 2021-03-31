import React from "react";
import styled from "styled-components";

const explore = () => {
  return (
    <>
      <section id="explore" className="block aboutBlock">
        <div className="container-fluid">
          <div className="explore-title">
            <h2>Explore Our Universe</h2>
          </div>
          <h3>
            Dive in to the expansive lore of our game and see all that Trimera
            has to offer.
          </h3>
          <div className="btn-dive-in">
            <ButtonDiveIn>Dive In</ButtonDiveIn>
          </div>
        </div>
      </section>
    </>
  );
};

const ButtonDiveIn = styled.div`
  font-family: "Titilium", sans-serif;
  background: #10869b;
  float: right;
  color: #fff;
  cursor: pointer;
  font-size: 1.3em;
  padding: 0.5rem;
  border: 0;
  transition: all 0.3s;
  border-radius: 3px;

  position: relative;
  text-align: center;

  &:hover {
    background: #045766;
    transition: all 0.3s;
    border-radius: 5px;
    box-shadow: 0px 2px 5px #045766;
  }
`;

export default explore;
