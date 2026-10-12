import { useAppDispatch } from "../../../../core/hooks";
import { setProjectView } from "../../Portfolio/projectViewSlice";
import { Figure, Portrait, Half, Photo, Badge, Divider, Hint } from "./styled";

interface SplitPortraitProps {
  src: string;
  name: string;
}

const halves = [
  {
    side: "developer",
    badge: "Code",
    label: "See my projects from the developer side",
  },
  {
    side: "tester",
    badge: "Test",
    label: "See my projects from the tester side",
  },
] as const;

// One photo drawn twice: the left half in black and white (developer, build),
// the right half in colour (tester, protect). Each half is a link that opens
// Projects in its view, so it works by click, tap and keyboard.
export const SplitPortrait = ({ src, name }: SplitPortraitProps) => {
  const dispatch = useAppDispatch();

  return (
    <Figure>
      <Portrait role="group" aria-label={`${name}: pick a side`}>
        {halves.map(({ side, badge, label }) => (
          <Half
            key={side}
            href="#projects"
            $side={side}
            aria-label={label}
            title={label}
            onClick={() => dispatch(setProjectView(side))}
          >
            <Photo src={src} alt="" $side={side} />
            <Badge $side={side} aria-hidden="true">
              {badge}
            </Badge>
          </Half>
        ))}
        <Divider aria-hidden="true" />
      </Portrait>
      <Hint aria-hidden="true">
        Click a side: my projects as a tester or a developer
      </Hint>
    </Figure>
  );
};
