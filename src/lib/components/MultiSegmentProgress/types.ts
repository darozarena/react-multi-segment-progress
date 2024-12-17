export interface Segment {
  id: string;
  percentage: number;
  color: string;
  label?: string;
}

export interface MultiSegmentProgressProps {
  segments: Segment[];
  height?: number;
  showTooltips?: boolean;
  backgroundColor?: string;
  borderRadius?: number;
}
