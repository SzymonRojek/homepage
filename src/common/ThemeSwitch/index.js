import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleTheme } from "../themeSlice";
import { Wrapper, Button, Text, Box, IconWrapper, Icon } from "./styled";

export const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Box>
          <IconWrapper moveToRight={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  );
};
