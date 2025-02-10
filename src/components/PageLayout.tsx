import React from "react";
import {
  HStack,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
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
      <HStack justifyContent="space-between">
        <VStack gapY="0">
          <Heading size="md">{title}</Heading>
          <Text textColor="neutral.300">{description}</Text>
        </VStack>
        {actionButton}
      </HStack>
      <Card
        bg="Background"
        overflowY="auto"
        maxH="calc(100vh - 225px)"
        variant="subtle"
      >
        <CardBody>{children}</CardBody>
      </Card>
    </VStack>
  );
}

export default PageLayout;
