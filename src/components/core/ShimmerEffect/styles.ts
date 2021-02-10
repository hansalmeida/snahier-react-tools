import { lighten } from "polished"
import styled, { css, keyframes } from "styled-components/macro"

const animations = {
  loading: keyframes`
    0% {
      left: -45%;
    }
    100% {
      left: 100%;
    }
  `,
}

interface ShimmerEffectProps {
  color: string
  circle: boolean
}

export const StyledShimmerEffect = styled.div<ShimmerEffectProps>`
  ${({ color, circle }) => css`
    position: relative;
    background-color: ${color};
    overflow: hidden;

    ${circle &&
    css`
      border-radius: 100%;
    `}
  `}
`
interface GradientProps {
  color: string
}
export const GradientWrapper = styled.div<GradientProps>`
  ${({ color }) => {
    return css`
      position: absolute;
      left: -50%;
      height: 100%;
      width: 50%;

      background: linear-gradient(
        to left,
        ${lighten(0.005, color)},
        ${lighten(0.03, color)},
        ${lighten(0.06, color)},
        ${lighten(0.03, color)},
        ${lighten(0.005, color)}
      );

      animation: ${animations.loading} 1.5s infinite;
      z-index: 45;
    `
  }}
`