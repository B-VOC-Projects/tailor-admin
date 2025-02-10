import React from "react";
import { Box, For, Image, Stack, Text, Link } from "@yamada-ui/react";
import { BiGridAlt } from "react-icons/bi";
import { MASTER_ROUTES, STAFF_ROUTES } from "../constants/sidebar-menu";
import { Link as RouterLink } from "@tanstack/react-router";

function Sidebar() {
  return (
    <Box
      as="section"
      borderRight="1px solid"
      borderColor="gray.50"
      flex="0 0 auto"
      width="68"
      display={{ base: "block", md: "none" }}
    >
      <Box paddingX="4">
        <Image src="/logo.svg" boxSize="20" />
      </Box>
      <Stack gap="4" paddingX="4">
        <Link
          as={RouterLink}
          to="/"
          activeOptions={{
            exact: true,
          }}
          display="flex"
          gapX="2"
          alignItems="center"
          textColor="neutral.500"
          fontWeight="normal"
          _hover={{ bg: "blackAlpha.50", textColor: "black" }}
          __css={{
            "&.active": {
              bg: "secondary.100",
              textColor: "secondary.700",
              fontWeight: "bold",
            },
          }}
          padding="1.5"
          borderRadius="md"
          cursor="pointer"
        >
          <BiGridAlt size="20" />
          <Text fontWeight="semibold">Dashboard</Text>
        </Link>

        <Stack gap="1">
          <Text
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            textColor="neutral.600"
          >
            Master
          </Text>
          <For each={MASTER_ROUTES}>
            {({ name, path, icon: Icon }) => (
              <Link
                as={RouterLink}
                to={path}
                activeOptions={{
                  exact: true,
                }}
                display="flex"
                gapX="2"
                alignItems="center"
                textColor="neutral.500"
                _hover={{ bg: "blackAlpha.50", textColor: "black" }}
                css={{
                  "&.active": {
                    backgroundColor: "var(--ui-colors-secondary-100)",
                    color: "var(--ui-colors-secondary-800)",
                    fontWeight: "600",
                  },
                }}
                padding="1.5"
                borderRadius="md"
                cursor="pointer"
              >
                <Icon size="20" />
                <Text>{name}</Text>
              </Link>
            )}
          </For>
        </Stack>
        <Stack gap="1">
          <Text
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            textColor="neutral.600"
          >
            Staff
          </Text>
          <For each={STAFF_ROUTES}>
            {({ name, path, icon: Icon }) => (
              <Link
                as={RouterLink}
                to={path}
                activeOptions={{
                  exact: true,
                }}
                display="flex"
                gapX="2"
                alignItems="center"
                textColor="neutral.500"
                _hover={{ bg: "blackAlpha.50", textColor: "black" }}
                css={{
                  "&.active": {
                    backgroundColor: "var(--ui-colors-secondary-100)",
                    color: "var(--ui-colors-secondary-800)",
                    fontWeight: "600",
                  },
                }}
                padding="1.5"
                borderRadius="md"
                cursor="pointer"
              >
                <Icon size="20" />
                <Text>{name}</Text>
              </Link>
            )}
          </For>
        </Stack>

        <Text
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          textColor="neutral.600"
        >
          Customers
        </Text>
      </Stack>
    </Box>
  );
}

export default Sidebar;
