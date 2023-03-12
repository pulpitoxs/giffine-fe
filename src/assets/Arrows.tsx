export interface model {
  className: string;
}
const Arrow = ({ className }: model) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    className={className}
  >
    <path
      d="M10.1 15C11.7167 15 13.104 14.475 14.262 13.425C15.4207 12.375 16 11.0667 16 9.5C16 7.93333 15.4207 6.625 14.262 5.575C13.104 4.525 11.7167 4 10.1 4H3.8L6.4 1.4L5 0L0 5L5 10L6.4 8.6L3.8 6H10.1C11.15 6 12.0623 6.33333 12.837 7C13.6123 7.66667 14 8.5 14 9.5C14 10.5 13.6123 11.3333 12.837 12C12.0623 12.6667 11.15 13 10.1 13H3V15H10.1Z"
      fill="#4c4f64"
    />
  </svg>
);

export default Arrow;
