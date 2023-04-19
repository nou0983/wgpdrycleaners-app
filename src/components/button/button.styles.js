import styled from "styled-components";

const Wrapper = styled.a`
  padding: 2.5rem 4rem;
  border-radius: 50px;
  position: relative;
  z-index: 1;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s linear; 

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50px;
    z-index: -1;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s linear;
  }

  &:hover {
    box-shadow: 0 6px 15px rgba(119, 119, 119, 0.6);
    transform: translateY(-2px);
  }

  &:hover::before {
    transform: scale(1.7);
    opacity: 0;
  }

  &.btn-white {
    color: #777;
    background-color: #fff;
  }

  &.btn-white::before {
    background-color: #fff;
  }

  &.btn-green {
    border: none;
    background-color: #55c57e;
    color: #fff;
  }

  &.btn-green::before {
    background-color: #55c57e;
  }
`;

export default Wrapper;
