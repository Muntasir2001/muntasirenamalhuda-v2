const SupabaseIcon = ({
  width = 22,
  height = 22,
}: {
  width?: number | string;
  height?: number | string;
  color?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.457 21.6343C11.8977 22.3421 10.7635 21.9543 10.7501 21.0506L10.553 7.83252H19.3984C21.0005 7.83252 21.8941 9.69188 20.8978 10.9527L12.457 21.6343Z"
        fill="url(#paint0_linear_169_821)"
      />
      <path
        d="M12.457 21.6343C11.8977 22.3421 10.7635 21.9543 10.7501 21.0506L10.553 7.83252H19.3984C21.0005 7.83252 21.8941 9.69188 20.8978 10.9527L12.457 21.6343Z"
        fill="url(#paint1_linear_169_821)"
        fillOpacity="0.2"
      />
      <path
        d="M8.85963 0.365549C9.41898 -0.342298 10.5531 0.0455511 10.5666 0.949289L10.653 14.1673H1.91824C0.316051 14.1673 -0.57752 12.308 0.41877 11.0472L8.85963 0.365549Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id="paint0_linear_169_821"
          x1="10.553"
          y1="10.7633"
          x2="18.4257"
          y2="14.0494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_169_821"
          x1="7.0676"
          y1="5.96833"
          x2="10.6797"
          y2="12.7354"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SupabaseIcon;

SupabaseIcon.defaultProps = {
  width: 22,
  height: 22,
};
