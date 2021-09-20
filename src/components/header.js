import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  h1 {
    cursor: pointer;
    font-size: 4rem;
    margin: 0;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1 onClick={(e) => window.location.reload()}>📸</h1>
    </HeaderContainer>
  );
};

export default Header;
