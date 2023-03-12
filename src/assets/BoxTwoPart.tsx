export interface model {
  className: string;
}
const BoxTwoPart = ({ className }: model) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="426"
    height="365"
    viewBox="0 0 426 365"
    fill="none"
    className={className}
  >
    <g filter="url(#filter0_f_58_4975)">
      <rect
        x="100.801"
        y="100.828"
        width="225"
        height="164"
        fill="url(#paint0_linear_58_4975)"
      />
    </g>
    <g filter="url(#filter1_ii_58_4975)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90 91H335V250.423C335 263.444 324.482 274 311.507 274H113.493C100.518 274 90 263.444 90 250.423V91ZM101.187 102.227V250.423C101.187 257.244 106.697 262.773 113.493 262.773H311.507C318.303 262.773 323.813 257.244 323.813 250.423V102.227H101.187Z"
        fill="black"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M90 91H335V250.423C335 263.444 324.482 274 311.507 274H113.493C100.518 274 90 263.444 90 250.423V91ZM101.187 102.227V250.423C101.187 257.244 106.697 262.773 113.493 262.773H311.507C318.303 262.773 323.813 257.244 323.813 250.423V102.227H101.187Z"
      stroke="url(#paint1_radial_58_4975)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M90 91H335V250.423C335 263.444 324.482 274 311.507 274H113.493C100.518 274 90 263.444 90 250.423V91ZM101.187 102.227V250.423C101.187 257.244 106.697 262.773 113.493 262.773H311.507C318.303 262.773 323.813 257.244 323.813 250.423V102.227H101.187Z"
      stroke="url(#paint2_radial_58_4975)"
    />
    <defs>
      <filter
        id="filter0_f_58_4975"
        x="0.80127"
        y="0.828125"
        width="425"
        height="364"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="50"
          result="effect1_foregroundBlur_58_4975"
        />
      </filter>
      <filter
        id="filter1_ii_58_4975"
        x="89.5"
        y="90.5"
        width="246"
        height="206"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="22" />
        <feGaussianBlur stdDeviation="20" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0392157 0 0 0 0 0.105882 0 0 0 0 0.298039 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_58_4975"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.512431 0 0 0 0 0.223529 0 0 0 0 0.572549 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_58_4975"
          result="effect2_innerShadow_58_4975"
        />
      </filter>
      <linearGradient
        id="paint0_linear_58_4975"
        x1="213.301"
        y1="100.828"
        x2="213.301"
        y2="264.828"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#833992" />
        <stop offset="1" stopColor="#5A318F" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_58_4975"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(310.737 257.42) rotate(-144.722) scale(108.53 188.626)"
      >
        <stop stopColor="#D9D9D9" />
        <stop offset="0.0001" stopColor="#D9D9D9" />
        <stop offset="1" stopColor="#833992" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint2_radial_58_4975"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(89.704 253.678) rotate(-24.3717) scale(63.4798 85.4283)"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#833992" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export default BoxTwoPart;
