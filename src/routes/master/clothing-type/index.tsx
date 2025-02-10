import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Text,
  Heading,
  HStack,
  Button,
  Card,
  CardBody,
  VStack,
  IconButton,
} from '@yamada-ui/react'
import { Column } from '@yamada-ui/table'
import { Table } from '@yamada-ui/table'
import { useMemo } from 'react'
import { clothingTypeData, ClothingTypeList } from '../../../../data/master'
import { BiPencil, BiTrash } from 'react-icons/bi'

export const Route = createFileRoute('/master/clothing-type/')({
  component: RouteComponent,
})

function RouteComponent() {
  const columns = useMemo<Column<ClothingTypeList>[]>(
    () => [
      {
        header: 'Title',
        accessorKey: 'name',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
      },
      {
        header: 'Base Price',
        accessorKey: 'base_price',
      },
      {
        header: 'Created At',
        accessorKey: 'created_at',
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: () => {
          return (
            <HStack>
              <IconButton size="sm">
                <BiPencil />
              </IconButton>
              <IconButton size="sm" variant="solid" colorScheme="danger">
                <BiTrash />
              </IconButton>
            </HStack>
          )
        },
      },
    ],
    [],
  )

  const data = useMemo(() => clothingTypeData, [])

  return (
    <>
      <HStack justifyContent="space-between">
        <VStack gapY="0">
          <Heading size="md">Clothing Type</Heading>
          <Text textColor="neutral.300">Manage Clothing Types</Text>
        </VStack>
        <Button as={Link} to="create" colorScheme="primary" variant="solid">
          Create New
        </Button>
      </HStack>
      <Card
        bg="Background"
        overflowY="auto"
        maxH="calc(100vh - 225px)"
        variant="subtle"
      >
        <CardBody>
          <Table
            headerGroupProps={{
              position: 'sticky',
              top: '0',
              bgColor: 'Background',
              zIndex: 10,
            }}
            withFooter
            size="lg"
            columns={columns}
            data={data}
          />
        </CardBody>
      </Card>
    </>
  )
}
