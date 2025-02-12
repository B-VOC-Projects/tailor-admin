import React from "react";
import {
  HStack,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Box,
} from "@yamada-ui/react";

interface PageLayoutProps {
  title: string;
  description: string;
  actionButton?: React.ReactNode;
  children: React.ReactNode;
}

function PageLayout({
  title,
  description,
  actionButton,
  children,
}: PageLayoutProps) {
  return (
    <VStack gapY="4">
      <HStack justifyContent="space-between" paddingX="4">
        <Box boxSize="13" flexShrink="0" bgColor="neutral.50" rounded="md">
          C
        </Box>
        <VStack gapY="0">
          <Heading size="lg" fontSize="x-large">
            {title}
          </Heading>
          <Text textColor="neutral.600">{description}</Text>
        </VStack>
        {actionButton}
      </HStack>
      <Card
        bg="Background"
        overflowY="auto"
        maxH="calc(100vh - 225px)"
        mt="4"
        variant="subtle"
      >
        <CardBody padding="8">{children}</CardBody>
      </Card>
    </VStack>
  );
}

export default PageLayout;
