import React from "react";
import { HStack, Icon, IconButton, Input } from "@yamada-ui/react";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  return (
    <HStack
      justifyContent="space-between"
      position="sticky"
      top="0"
      as="header"
      padding="4"
      zIndex="zarbon"
      backgroundColor="Background"
      borderBottom="1px solid"
      borderBottomColor="gray.50"
    >
      <IconButton
        icon={<Icon as={BiMenu} fontSize="large" />}
        display={{ base: "none", md: "block" }}
        variant="solid"
      />
      <Input placeholder="Search..." />
    </HStack>
  );
}

export default Navbar;
