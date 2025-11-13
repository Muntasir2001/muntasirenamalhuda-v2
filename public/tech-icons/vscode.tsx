const VscodeIcon = ({
  width = 20,
  height = 20,
}: {
  width?: number | string;
  height?: number | string;
  color?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0011 0.797707C15.0011 0.169879 14.2981 0.169872 13.9857 0.24835C14.4231 -0.0969571 14.936 -0.0132357 15.1182 0.0914L19.3421 2.16248C19.7445 2.35982 19.9998 2.77043 19.9998 3.22041V16.8451C19.9998 17.3011 19.7377 17.7161 19.3271 17.9102L15.3526 19.7896C15.0791 19.9072 14.4856 20.1976 13.9857 19.7895C14.6106 19.9073 14.949 19.4626 15.0011 19.1617V0.797707Z"
        fill="url(#paint0_linear_169_730)"
      />
      <path
        d="M14.0366 0.236967C14.3681 0.171445 15.0013 0.201831 15.0013 0.797646V5.48743L2.19542 15.1751C1.97159 15.3445 1.65657 15.3163 1.46592 15.11L0.146094 13.6819C-0.0606684 13.4582 -0.0462017 13.108 0.178303 12.9023L13.9859 0.248288L14.0366 0.236967Z"
        fill="url(#paint1_linear_169_730)"
      />
      <path
        d="M15.0013 14.5506L2.19542 4.86293C1.97159 4.6936 1.65657 4.7217 1.46592 4.928L0.146094 6.35614C-0.0606684 6.57986 -0.0462017 6.93007 0.178303 7.13586L13.9859 19.7898C14.6107 19.9075 14.9492 19.4628 15.0013 19.1619V14.5506Z"
        fill="url(#paint2_linear_169_730)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_169_730"
          x1="16.9928"
          y1="1.94904e-08"
          x2="16.9928"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32B5F1" />
          <stop offset="1" stopColor="#2B9FED" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_169_730"
          x1="15.0013"
          y1="2.52417"
          x2="0.729786"
          y2="14.5035"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0F6FB3" />
          <stop offset="0.270551" stopColor="#1279B7" />
          <stop offset="0.421376" stopColor="#1176B5" />
          <stop offset="0.618197" stopColor="#0E69AC" />
          <stop offset="0.855344" stopColor="#0F70AF" />
          <stop offset="1" stopColor="#0F6DAD" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_169_730"
          x1="0.825158"
          y1="5.70285"
          x2="15.0565"
          y2="17.4864"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1791D2" />
          <stop offset="1" stopColor="#1173C5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VscodeIcon;

VscodeIcon.defaultProps = {
  width: 20,
  height: 20,
};
