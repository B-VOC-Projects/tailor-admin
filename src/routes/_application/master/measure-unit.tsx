import { measurementUnitsColumn } from "@/data/columns/master";
import { createFileRoute } from "@tanstack/react-router";
import {
  Text,
  Heading,
  HStack,
  Button,
  Card,
  CardBody,
  VStack,
} from "@yamada-ui/react";
import { Table } from "@yamada-ui/table";
import { useMemo } from "react";

export const Route = createFileRoute("/_application/master/measure-unit")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = useMemo(
    () => [
      {
        name: "ドラゴンボール",
        unit: "1986年2月26日 - 1989年4月19日",
        episode: "全153話",
      },
      {
        name: "ドラゴンボールZ",
        unit: "1989年4月26日 - 1996年1月31日",
        episode: "全291話 + スペシャル2話",
      },
      {
        name: "ドラゴンボールGT",
        unit: "1996年2月7日 - 1997年11月19日",
        episode: "全64話 + 番外編1話",
      },
      {
        name: "ドラゴンボール改",
        unit: "2009年4月5日 - 2015年6月28日",
        episode: "全159話",
      },
      {
        name: "ドラゴンボール超",
        unit: "2015年7月5日 - 2018年3月25日",
        episode: "全131話",
      },
    ],
    []
  );

  return (
    <>
      <HStack justifyContent="space-between" mb="4">
        <VStack gapY="0">
          <Heading size="md">Measurement Unit</Heading>
          <Text textColor="neutral.300">Manage measurement units</Text>
        </VStack>
        <Button variant="solid">Create New</Button>
      </HStack>

      <Card bg="white">
        <CardBody>
          <Table size="lg" columns={measurementUnitsColumn} data={data} />
        </CardBody>
      </Card>
    </>
  );
}
