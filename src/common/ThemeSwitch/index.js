import { Wrapper, Button, Text, Box, IconWrapper, Icon } from "./styled";

export const ThemeSwitch = () => {
  return (
    <Wrapper>
      <Button>
        <Text>Dark mode</Text>
        <Box>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  );
};
