import React from "react";
import { Button, HStack, IconButton, Input, Stack } from "@yamada-ui/react";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  return (
    <HStack justifyContent="space-between" as="header" padding="4">
      <IconButton
        size="sm"
        icon={<BiMenu />}
        display={{ base: "none", md: "grid" }}
      />
      <Input placeholder="Search..." variant="filled" />
    </HStack>
  );
}

export default Navbar;
