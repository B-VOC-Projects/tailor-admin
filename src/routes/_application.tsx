import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Container, Flex, VStack } from "@yamada-ui/react";

export const Route = createFileRoute("/_application")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Flex width="full" height="full">
      <Sidebar />
      <VStack
        gap="0"
        overflowY="auto"
        backgroundColor="blackAlpha.50"
        _dark={{ backgroundColor: "whiteAlpha.50" }}
      >
        <Navbar />
        <Container width="full" height="full">
          <Outlet />
        </Container>
      </VStack>
    </Flex>
  );
}
