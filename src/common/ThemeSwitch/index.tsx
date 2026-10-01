import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { selectDarkTheme, toggleTheme } from "../themeSlice";
import { Wrapper, Button, Text, Box, IconWrapper, Icon } from "./styled";

export const ThemeSwitch = () => {
  const isDarkTheme = useAppSelector(selectDarkTheme);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Box>
          <IconWrapper $moveToRight={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  );
};
