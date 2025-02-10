import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Container, Flex, VStack } from "@yamada-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Flex width="full" height="full">
      <Sidebar />
      <VStack gap="0">
        <Navbar />
        <Container
          width="full"
          height="full"
          css={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <Outlet />
        </Container>
      </VStack>
    </Flex>
  );
}
