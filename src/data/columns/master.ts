import { Column } from "@yamada-ui/table";

type MeasurementUnitColumn = {
  name: string;
  unit: string;
};

export const measurementUnitsColumn: Column<MeasurementUnitColumn>[] = [
  { header: "Name", accessorKey: "name" },
  { header: "Unit", accessorKey: "unit" },
];
