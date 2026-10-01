import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { selectDarkTheme, toggleTheme } from "../themeSlice";
import { Wrapper, Button, Box, IconWrapper, Icon } from "./styled";

export const ThemeSwitch = () => {
  const isDarkTheme = useAppSelector(selectDarkTheme);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Button
        aria-label="Dark mode"
        aria-pressed={isDarkTheme}
        onClick={() => dispatch(toggleTheme())}
      >
        <Box>
          <IconWrapper $moveToRight={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  );
};
