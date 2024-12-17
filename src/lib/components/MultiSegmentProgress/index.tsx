import { CSSProperties } from "react";
import { type MultiSegmentProgressProps } from "./types";

export const MultiSegmentProgress = ({
  segments,
  height = 12,
  backgroundColor = "#E4E5E6",
  showTooltips = true,
  borderRadius = 0,
}: MultiSegmentProgressProps) => {
  const wrapperStyle: CSSProperties = {
    position: "relative",
    display: "flex",
    width: "100%",
    overflow: "hidden",
    height: `${height}px`,
    borderRadius: `${borderRadius ? borderRadius : 0}px`,
    backgroundColor,
  };

  return (
    <div style={wrapperStyle}>
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
          ? `${borderRadius}px`
          : `0 ${borderRadius}px ${borderRadius}px 0`;

        const segmentStyle: CSSProperties = {
          position: "absolute",
          cursor: "pointer",
          height: "100%",
          transition: "all 0.3s ease",
          left: `${prevPercentages}%`,
          width: `calc(${segment.percentage}% + ${extension}px)`,
          backgroundColor: segment.color,
          zIndex: segments.length - index,
          borderRadius: segmentBorderRadius,
        };

        return (
          <div
            key={segment.id}
            style={segmentStyle}
            title={showTooltips && segment.label ? segment.label : undefined}
          />
        );
      })}
    </div>
  );
};
