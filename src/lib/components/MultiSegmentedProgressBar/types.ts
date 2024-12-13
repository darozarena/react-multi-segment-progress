export interface Segment {
  id: string;
  percentage: number;
  color: string;
  label?: string;
}

export interface MultiSegmentedProgressBarProps {
  segments: Segment[];
  height?: number;
  showTooltips?: boolean;
  backgroundColor?: string;
  borderRadius?: number;
}
