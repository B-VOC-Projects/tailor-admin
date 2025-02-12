import { createFileRoute } from "@tanstack/react-router";

import {
  Grid,
  GridItem,
  Input,
  Label,
  FormControl,
  Textarea,
  NativeSelect,
  NativeOption,
  Heading,
  Button,
  InputGroup,
  InputLeftAddon,
  HStack,
  IconButton,
  Text,
} from "@yamada-ui/react";
import PageLayout from "@/components/PageLayout";
import { useForm } from "@tanstack/react-form";

import { BiChevronDown, BiChevronUp, BiRupee } from "react-icons/bi";

export const Route = createFileRoute("/_application/master/measurement/create")(
  {
    component: RouteComponent,
  }
);

type ClothingTypeForm = {
  title: string;
  gender: string;
  base_price: number;
  notes: string;
  measurements: {
    id: string;
    title: string;
    unit: string;
    position: number;
  }[];
};

function RouteComponent() {
  const { Field, handleSubmit, pushFieldValue } = useForm<ClothingTypeForm>({
    defaultValues: {
      base_price: 0,
      gender: "",
      notes: "",
      title: "",
      measurements: [],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <PageLayout
      title="Create Measurement"
      description="Fill in the form below to create a new measurement"
      actionButton={
        <Button onClick={handleSubmit} colorScheme="primary" variant="solid">
          Save
        </Button>
      }
    >
      <Heading size="md">Basic Information</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="md" width="full">
        <GridItem>
          <Field name="title">
            {(field) => (
              <FormControl
                invalid={
                  field.state.meta.errors.length > 0 &&
                  !!field.state.meta.isTouched
                }
                label="Title"
              >
                <Input
                  id="title"
                  placeholder="Title"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                />
              </FormControl>
            )}
          </Field>
        </GridItem>
        <GridItem>
          <Field name="gender">
            {(field) => (
              <FormControl
                invalid={field.state.meta.errors.some((e) => !!e)}
                label="Gender"
              >
                <NativeSelect placeholder="Select A Gender">
                  <NativeOption value="male">Male</NativeOption>
                  <NativeOption value="female">Female</NativeOption>
                  <NativeOption value="other">Other</NativeOption>
                </NativeSelect>
              </FormControl>
            )}
          </Field>
        </GridItem>
        <GridItem>
          <Field name="base_price">
            {(field) => (
              <FormControl
                invalid={field.state.meta.errors.some((e) => !!e)}
                label="Stiching charges"
              >
                <InputGroup>
                  <InputLeftAddon>
                    <BiRupee />
                  </InputLeftAddon>
                  <Input
                    id="base_price"
                    type="number"
                    placeholder="750.00"
                    onChange={(evt) =>
                      field.handleChange(parseInt(evt.target.value))
                    }
                    onBlur={field.handleBlur}
                    value={field.state.value}
                  />
                </InputGroup>
              </FormControl>
            )}
          </Field>
        </GridItem>
        <GridItem>
          <Field name="notes">
            {(field) => (
              <FormControl
                helperMessage="Hello there"
                invalid={field.state.meta.errors.some((e) => !!e)}
                label="Notes"
              >
                <Textarea
                  id="title"
                  placeholder="Title"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                />
              </FormControl>
            )}
          </Field>
        </GridItem>
      </Grid>
      <Heading size="md">Measurement Information</Heading>
      <Field name="measurements" mode="array">
        {(field) => (
          <div>
            {field.state.value.map((measurement) => (
              <>{JSON.stringify(measurement)}</>
            ))}
            <Button
              onClick={() =>
                field.pushValue({
                  id: new Date().toString(),
                  position: 0,
                  title: "asdfs",
                  unit: "sdf",
                })
              }
            >
              Add Sample Measurement
            </Button>
          </div>
        )}
      </Field>
      <HStack width="full">
        <Input width="full" placeholder="Measurement Title" />
        <NativeSelect placeholder="Select Unit">
          <NativeOption value="mm">Millimeters (mm)</NativeOption>
          <NativeOption value="cm">Centimeters (cm)</NativeOption>
          <NativeOption value="in">Inches (in)</NativeOption>
          <NativeOption value="ft">Feet (ft)</NativeOption>
          <NativeOption value="yd">Yards (yd)</NativeOption>
          <NativeOption value="m">Meters (m)</NativeOption>
        </NativeSelect>
        <HStack>
          <IconButton>
            <BiChevronUp />
          </IconButton>
          <IconButton>
            <BiChevronDown />
          </IconButton>
        </HStack>
        <Button px="8" colorScheme="primary">
          <Text>Add</Text>
        </Button>
      </HStack>
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Name" />
    </PageLayout>
  );
}
