import { type MultiSegmentedProgressBarProps } from "./types";
import "./styles.css";

export const MultiSegmentedProgressBar = ({
  segments,
  height = 12,
  backgroundColor = "#E4E5E6",
  showTooltips = true,
  borderRadius = 0,
}: MultiSegmentedProgressBarProps) => {
  const wrapperStyle = {
    height: `${height}px`,
    borderRadius: `${borderRadius ? borderRadius : 0}px`,
    backgroundColor,
  };

  return (
    <div className="multi-segmented-progress-wrapper" style={wrapperStyle}>
      {segments.map((segment, index) => {
        const prevPercentages = segments
          .slice(0, index)
          .reduce((acc, curr) => acc + curr.percentage, 0);

        const extension =
          index === segments.length - 1 || segment.percentage === 0
            ? 0
            : borderRadius;

        const isFirst = index === 0;

        const segmentBorderRadius = isFirst
          ? `${borderRadius}px ${borderRadius}px ${borderRadius}px ${borderRadius}px`
          : `0 ${borderRadius}px ${borderRadius}px 0`;

        const segmentStyle = {
          left: `${prevPercentages}%`,
          width: `calc(${segment.percentage}% + ${extension}px)`,
          backgroundColor: segment.color,
          zIndex: segments.length - index,
          borderRadius: segmentBorderRadius,
        };

        return (
          <div
            key={segment.id}
            className="progress-segment"
            style={segmentStyle}
            title={showTooltips && segment.label ? segment.label : undefined}
          />
        );
      })}
    </div>
  );
};
