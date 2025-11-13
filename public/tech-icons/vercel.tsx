const VercelIcon = ({
  width,
  height,
}: {
  width?: number | string;
  height?: number | string;
  color?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.8121 0L19.6242 17H0L9.8121 0Z" fill="#F6F6F6" />
    </svg>
  );
};

export default VercelIcon;

VercelIcon.defaultProps = {
  width: 20,
  height: 17,
};

