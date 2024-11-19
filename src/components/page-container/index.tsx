import styled from "styled-components";

const PageContainer = styled.div<{
  $centeredVertically?: boolean;
  $centeredHorizontally?: boolean;
}>` 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  padding: ${(props) => props.$centeredHorizontally ? "0" : "2rem"}; 
  justify-content: ${(props) => props.$centeredHorizontally ? "center" : "start"}; 
  align-items: ${(props) => (props.$centeredVertically ? "center" : "start")};
  gap: 1rem;

  a {
    text-decoration: none; 
    font-weight: bold;
    font-size: 0.9rem;
    cursor: pointer;
    margin-bottom: 10px;
    transition: 0.5s;

    &: hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`;

export default PageContainer;
