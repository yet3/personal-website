
import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> { }

export default function LinkIcon(props: Props) {
  return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M18 14L28 4M21.3333 4H28V10.6667M28 18.6667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H13.3333"
          stroke="inherit"
          strokeWidth={2.66667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  )
}
