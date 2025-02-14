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
  sideSection?: React.ReactNode;
  children: React.ReactNode;
}

function PageLayout({
  title,
  description,
  sideSection,
  children,
}: PageLayoutProps) {
  return (
    <VStack gapY="4">
      <HStack alignItems="center" justifyContent="space-between" paddingX="4">
        <Box
          boxSize="11"
          flexShrink="0"
          bgColor="secondary.100"
          rounded="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text textColor="secondary.800" fontSize="2xl" fontWeight="extrabold">
            {title.charAt(0)}
          </Text>
        </Box>
        <VStack gapY="0">
          <Heading size="md">{title}</Heading>
          <Text textColor="neutral.600" fontSize="sm">
            {description}
          </Text>
        </VStack>
        {sideSection}
      </HStack>
      <Card bg="Background" mt="4" variant="subtle">
        <CardBody padding="8">{children}</CardBody>
      </Card>
    </VStack>
  );
}

export default PageLayout;
