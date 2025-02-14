import { createFileRoute, Link } from "@tanstack/react-router";
import { HStack, Button, IconButton } from "@yamada-ui/react";
import { Column } from "@yamada-ui/table";
import { Table } from "@yamada-ui/table";
import { useMemo } from "react";
import { clothingTypeData, ClothingTypeList } from "@/data/master";
import { BiFullscreen, BiPencil, BiTrash } from "react-icons/bi";
import PageLayout from "@/components/PageLayout";

export const Route = createFileRoute("/_application/master/measurement/")({
  component: RouteComponent,
});

function RouteComponent() {
  const columns = useMemo<Column<ClothingTypeList>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Gender",
        accessorKey: "gender",
      },
      {
        header: "Price",
        accessorKey: "base_price",
      },
      {
        header: "Created At",
        accessorKey: "created_at",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          return (
            <HStack>
              <IconButton
                size="sm"
                title="View"
                as={Link}
                to={`${row.id}/view`}
              >
                <BiFullscreen />
              </IconButton>
              <IconButton size="sm">
                <BiPencil />
              </IconButton>
              <IconButton size="sm" variant="solid" colorScheme="danger">
                <BiTrash />
              </IconButton>
            </HStack>
          );
        },
      },
    ],
    []
  );

  const data = useMemo(() => clothingTypeData, []);

  return (
    <PageLayout
      title="Manage Measurements"
      description="List of all measurements available"
      sideSection={
        <Button
          as={Link}
          to="create"
          colorScheme="primary"
          variant="solid"
          size="lg"
        >
          Create New
        </Button>
      }
    >
      <Table
        headerGroupProps={{
          position: "sticky",
          top: "0",
          bgColor: "Background",
          zIndex: 10,
        }}
        withFooter
        size="lg"
        columns={columns}
        data={data}
      />
    </PageLayout>
  );
}
