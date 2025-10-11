export interface IconProps {
  id: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  className?: string;
}

const Icon = ({
  id,
  width = "24px",
  height = "24px",
  className = "",
  fill = "",
  stroke = "",
}: IconProps) => {
  return (
    <svg
      className={`${className}`}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use href={`/symbol-defs.svg#${id}`} />
    </svg>
  );
};

export default Icon;
