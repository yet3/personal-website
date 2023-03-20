import type { JSX } from "solid-js";

export const FigmaSvg = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 128 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32 192C49.664 192 64 177.664 64 160V128H32C14.336 128 0 142.336 0 160C0 177.664 14.336 192 32 192Z"
      fill="#0ACF83"
    />
    <path
      d="M0 96C0 78.336 14.336 64 32 64H64V128H32C14.336 128 0 113.664 0 96Z"
      fill="#A259FF"
    />
    <path
      d="M0 32C0 14.336 14.336 0 32 0H64V64H32C14.336 64 0 49.664 0 32Z"
      fill="#F24E1E"
    />
    <path
      d="M64 0H96C113.664 0 128 14.336 128 32C128 49.664 113.664 64 96 64H64V0Z"
      fill="#FF7262"
    />
    <path
      d="M128 96C128 113.664 113.664 128 96 128C78.336 128 64 113.664 64 96C64 78.336 78.336 64 96 64C113.664 64 128 78.336 128 96Z"
      fill="#1ABCFE"
    />
  </svg>
);
