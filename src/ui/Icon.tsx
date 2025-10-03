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
      className={`${fill} ${stroke} ${className}`}
      width={width}
      height={height}
    >
      <use href={`/symbol-defs.svg#${id}`} />
    </svg>
  );
};

export default Icon;
