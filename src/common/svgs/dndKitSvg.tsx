import type { JSX } from "solid-js";

export const DndKitSvg = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fill-rule="evenodd">
      <rect fill="#000" height="64" rx="6" width="64" />
      <g fill="#fff" fill-rule="nonzero">
        <path
          d="m18 16v9.4330958h2.776849v-4.8323683l8.7373131 8.4803536 1.9633154-1.9055864-8.7373132-8.4803536h4.9788068v-2.6951411zm24.2810289 0v2.6951411h4.9788068l-8.7373132 8.4803536 1.9633154 1.9055864 8.7373131-8.4803536v4.8323683h2.776849v-9.4330958zm-12.7668668 19.9189189-8.7373131 8.4803026v-4.8323682h-2.776849v9.4331467h9.7189711v-2.6951921h-4.9788068l8.7373132-8.4803026zm1.858972-8.9189189-2.0398008 1.8706685 17.8880639 17.4045967h-5.0191805v2.7247348h9.7977833v-9.5365462h-2.7993667v4.8853373z"
          transform="translate(-2,0)"
        />
      </g>
    </g>
  </svg>
);
