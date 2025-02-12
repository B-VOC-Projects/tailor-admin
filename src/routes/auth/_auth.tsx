import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Image, Box, HStack } from "@yamada-ui/react";

export const Route = createFileRoute("/auth/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <HStack
      width="full"
      height="full"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box width="full" height="full" display="grid" placeItems="center">
        <Outlet />
      </Box>
      <Box width="full" height="full" bg="secondary.400" pos="relative">
        <Image
          pos="absolute"
          inset="0"
          height="full"
          width="full"
          objectFit="cover"
          filter="brightness(0.5)"
          src="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg"
          backgroundColor="gray.500"
        />
      </Box>
    </HStack>
  );
}
