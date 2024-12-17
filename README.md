# React Multi Segment Progress

![Demo](https://github.com/user-attachments/assets/01a66846-9e83-4644-a9a0-fecae90ffc29)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/darozarena)

A React progress bar component that supports multiple segments with overlapping effect. Perfect for showing multiple progress states in a single bar.

## Installation

```bash
npm install react-multi-segment-progress
```

## Usage

```tsx
import { MultiSegmentProgress } from "react-multi-segment-progress";

const MyComponent = () => {
  const segments = [
    { id: "completed", percentage: 30, color: "#52c41a", label: "Completed" },
    {
      id: "in-progress",
      percentage: 20,
      color: "#fa8c16",
      label: "In Progress",
    },
    { id: "pending", percentage: 50, color: "#d9d9d9", label: "Pending" },
  ];

  return (
    <MultiSegmentProgress
      segments={segments}
      height={12}
      borderRadius={6}
      backgroundColor="#f5f5f5"
      showTooltips
    />
  );
};
```

## Props

| Prop              | Type        | Default     | Description                                 |
| ----------------- | ----------- | ----------- | ------------------------------------------- |
| `segments`        | `Segment[]` | required    | Array of segments to display                |
| `height`          | `number`    | `12`        | Height of the progress bar in pixels        |
| `backgroundColor` | `string`    | `'#E4E5E6'` | Background color of the progress bar        |
| `showTooltips`    | `boolean`   | `true`      | Whether to show tooltips on hover           |
| `borderRadius`    | `number`    | `0`         | Border radius of the progress bar in pixels |

### Segment Type

```typescript
interface Segment {
  id: string; // Unique identifier for the segment
  percentage: number; // Percentage of the total width (0-100)
  color: string; // Background color of the segment
  label?: string; // Optional label for tooltip
}
```

## Features

- 🎨 Customizable colors and dimensions
- 🔄 Overlapping segments with smooth transitions
- 💡 Tooltips on hover
- 🎯 Rounded corners support
- 📱 Responsive design

## Examples

### Basic Usage

```tsx
const segments = [
  { id: "1", percentage: 40, color: "#52c41a", label: "Completed" },
  { id: "2", percentage: 60, color: "#d9d9d9", label: "Remaining" },
];

<MultiSegmentProgress segments={segments} />;
```

### With Custom Styling

```tsx
const segments = [
  { id: "1", percentage: 30, color: "#722ed1", label: "Phase 1" },
  { id: "2", percentage: 45, color: "#1890ff", label: "Phase 2" },
  { id: "3", percentage: 25, color: "#13c2c2", label: "Phase 3" },
];

<MultiSegmentProgress
  segments={segments}
  height={20}
  borderRadius={10}
  backgroundColor="#f0f0f0"
/>;
```

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## License

MIT © [David Arozarena](https://github.com/darozarena)
