import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, IconButton, Box, Flex } from "@chakra-ui/react";

export const DarkModeSwitch = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex {...props} align="center" justifyContent="flex-end">
      <IconButton
        aria-label="Toggle Dark Mode"
        onClick={toggleColorMode}
        variant="ghost"
        icon={!isDark ? <MoonIcon /> : <SunIcon />}
      />
    </Flex>
  );
};
