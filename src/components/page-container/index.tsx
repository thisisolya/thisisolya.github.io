import styled from "styled-components";

const PageContainer = styled.main<{
  $centeredVertically?: boolean;
  $centeredHorizontally?: boolean;
  $height?: number;
}>`
  display: flex;
  flex-direction: column;
  min-height: ${({ $height }) => ($height ? `${$height}px` : "100%")};
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: ${({ $centeredHorizontally }) => $centeredHorizontally ? "0" : "2rem"};
  justify-content: ${({ $centeredHorizontally }) => $centeredHorizontally ? "center" : "flex-start"};
  align-items: ${({ $centeredVertically }) => $centeredVertically ? "center" : "flex-start"};
  gap: 1rem;

  a,
  button {
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9rem;
    cursor: pointer;
    margin-bottom: 10px;
    transition: transform 0.3s ease;
    transform-origin: left;

    &:hover {
      transform: scale(1.1);
    }
  }

  .linkToLegalPage {
    font-size: 0.6rem;
    transform-origin: center;
  }
`;

export default PageContainer;
