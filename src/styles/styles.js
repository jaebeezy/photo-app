import styled, { keyframes } from "styled-components";

export const ViewingArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const skScaleOut = keyframes`
0% { 
  -webkit-transform: scale(0);
  transform: scale(0);
} 100% {
  -webkit-transform: scale(1.0);
  transform: scale(1.0);
  opacity: 0;
}`;

export const LoadingAnimation = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: ${skScaleOut} 1s infinite ease-in-out;
  animation: ${skScaleOut} 1s infinite ease-in-out;
`;
