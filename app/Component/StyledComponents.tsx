import styled from "styled-components";
import { css } from "styled-components";
import { keyframes } from "styled-components";

export const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
export const AppContainer = styled.div`
  width: 100%;
  color: #000000;
  overflow-x: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;
export const MarqueeGroup = styled.div`
  ${common}
`;
export const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  @media (max-width: 768px) {
    width: 1200px;
  }
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  &:hover ${MarqueeGroup} {
    animation-play-state: paused;
  }
`;
export const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 20vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 10vmin, 30rem) / 10);
`;
