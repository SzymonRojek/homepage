import { Group, Option } from "./styled";

import type { ProjectView } from "../projectViewSlice";

export type { ProjectView };

const views: { view: ProjectView; label: string }[] = [
  { view: "tester", label: "Tester" },
  { view: "developer", label: "Developer" },
  { view: "both", label: "Both" },
];

interface LensSwitchProps {
  view: ProjectView;
  onChange: (view: ProjectView) => void;
}

// A segmented control: one pressed button at a time, so screen readers hear
// which view is on.
export const LensSwitch = ({ view, onChange }: LensSwitchProps) => (
  <Group role="group" aria-label="View projects as">
    {views.map(({ view: option, label }) => (
      <Option
        key={option}
        type="button"
        $view={option}
        aria-pressed={view === option}
        onClick={() => onChange(option)}
      >
        {label}
      </Option>
    ))}
  </Group>
);
