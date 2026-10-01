import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { selectDarkTheme, toggleTheme } from "../themeSlice";
import { Wrapper, Button, Text, Box, IconWrapper, Icon } from "./styled";

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
        <Text aria-hidden>Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Box>
          <IconWrapper $moveToRight={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  );
};
