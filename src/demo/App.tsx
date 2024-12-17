import { MultiSegmentProgress } from "../lib";

const demoSegments = [
  {
    id: "known",
    percentage: 20,
    color: "#0ABB87",
    label: "Known (20%)",
  },
  {
    id: "revised",
    percentage: 15,
    color: "#FEB816",
    label: "Revised (15%)",
  },
  {
    id: "summarised",
    percentage: 25,
    color: "#616EEB",
    label: "Summarized (25%)",
  },
  {
    id: "studied",
    percentage: 10,
    color: "#848A8F",
    label: "Studied (10%)",
  },
  {
    id: "seen",
    percentage: 20,
    color: "#4EB1E4",
    label: "Seen (20%)",
  },
  {
    id: "not_started",
    percentage: 10,
    color: "#CBCCCE",
    label: "Not Started (10%)",
  },
];

const App = () => {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Multi Segment Progress Bar Demo</h1>

      <div>
        <h3>Default bar</h3>
        <MultiSegmentProgress segments={demoSegments} borderRadius={8} />
      </div>

      <div>
        <h3>Taller bar (height: 40px, borderRadius: 24px)</h3>
        <MultiSegmentProgress
          segments={demoSegments}
          height={40}
          borderRadius={24}
        />
      </div>

      <div>
        <h3>Without tooltips</h3>
        <MultiSegmentProgress
          segments={demoSegments}
          showTooltips={false}
          borderRadius={8}
        />
      </div>

      <div>
        <h3>Without rounded corners</h3>
        <MultiSegmentProgress segments={demoSegments} />
      </div>
    </div>
  );
};

export default App;
