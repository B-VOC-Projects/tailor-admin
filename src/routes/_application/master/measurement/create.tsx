import { createFileRoute } from "@tanstack/react-router";

import {
  Grid,
  GridItem,
  Input,
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
import { YupValidator, yupValidator } from "@tanstack/yup-form-adapter";
import { measurementSchema } from "@/lib/form-schema";

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
    title: string;
    unit: string;
    position: number;
  }[];
};

function RouteComponent() {
  const { Field, handleSubmit } = useForm<ClothingTypeForm, YupValidator>({
    defaultValues: {
      base_price: 0,
      gender: "",
      notes: "",
      title: "",
      measurements: [{ title: "", unit: "", position: 0 }],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values.value, null, 2));
    },
    validatorAdapter: yupValidator(),
  });

  return (
    <PageLayout
      title="Create Measurement"
      description="Fill in the form below to create a new measurement"
      sideSection={
        <Button onClick={handleSubmit} colorScheme="primary" variant="solid">
          Save
        </Button>
      }
    >
      <Heading size="md">Basic Information</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="md" width="full">
        <GridItem>
          <Field
            name="title"
            validators={{ onChange: measurementSchema.title }}
          >
            {(field) => (
              <FormControl
                invalid={
                  field.state.meta.errors.length > 0 &&
                  !!field.state.meta.isTouched
                }
                errorMessage={field.state.meta.errors.join(", ")}
                errorMessageProps={{
                  textTransform: "capitalize",
                }}
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
          <Field
            name="gender"
            validators={{ onChange: measurementSchema.gender }}
          >
            {(field) => (
              <FormControl
                invalid={
                  field.state.meta.errors.length > 0 &&
                  !!field.state.meta.isTouched
                }
                errorMessage={field.state.meta.errors.join(", ")}
                errorMessageProps={{
                  textTransform: "capitalize",
                }}
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
          <Field
            name="base_price"
            validators={{ onChange: measurementSchema.price }}
          >
            {(field) => (
              <FormControl
                invalid={
                  field.state.meta.errors.length > 0 &&
                  !!field.state.meta.isTouched
                }
                errorMessage={field.state.meta.errors.join(", ")}
                errorMessageProps={{
                  textTransform: "capitalize",
                }}
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
          <Field
            name="notes"
            validators={{ onChange: measurementSchema.notes }}
          >
            {(field) => (
              <FormControl
                invalid={
                  field.state.meta.errors.length > 0 &&
                  !!field.state.meta.isTouched
                }
                errorMessage={field.state.meta.errors.join(", ")}
                errorMessageProps={{
                  textTransform: "capitalize",
                }}
                label="Notes"
              >
                <Textarea
                  placeholder="Some notes about the measurement"
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                />
              </FormControl>
            )}
          </Field>
        </GridItem>
      </Grid>
      <Field
        name="measurements"
        mode="array"
        validators={{ onChange: measurementSchema.measurements }}
      >
        {(field) => (
          <>
            <HStack width="full" justifyContent="space-between">
              <Heading size="md">Measurement Information</Heading>
              <Button
                size="sm"
                onClick={() =>
                  field.pushValue({
                    position: field.state.value.length,
                    title: "",
                    unit: "",
                  })
                }
              >
                <Text>Add New</Text>
              </Button>
            </HStack>
            {field.state.value.map((_, index) => (
              <HStack width="full" alignItems="flex-end">
                <Field name={`measurements[${index}].title`}>
                  {(subField) => (
                    <FormControl
                      invalid={
                        field.state.meta.errors.length > 0 &&
                        !!field.state.meta.isTouched
                      }
                      errorMessageProps={{
                        textTransform: "capitalize",
                      }}
                      label="Measurement Title"
                    >
                      <Input
                        id="title"
                        placeholder="Title"
                        onChange={(e) => subField.handleChange(e.target.value)}
                        onBlur={subField.handleBlur}
                        value={subField.state.value}
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name={`measurements[${index}].unit`}>
                  {(subField) => (
                    <FormControl
                      invalid={
                        field.state.meta.errors.length > 0 &&
                        !!field.state.meta.isTouched
                      }
                      label="Unit Title"
                    >
                      <NativeSelect
                        onChange={(e) => subField.handleChange(e.target.value)}
                        onBlur={subField.handleBlur}
                        value={subField.state.value}
                        placeholder="Select Unit"
                      >
                        <NativeOption value="mm">Millimeters (mm)</NativeOption>
                        <NativeOption value="cm">Centimeters (cm)</NativeOption>
                        <NativeOption value="in">Inches (in)</NativeOption>
                        <NativeOption value="ft">Feet (ft)</NativeOption>
                        <NativeOption value="yd">Yards (yd)</NativeOption>
                        <NativeOption value="m">Meters (m)</NativeOption>
                      </NativeSelect>
                    </FormControl>
                  )}
                </Field>

                <HStack>
                  <IconButton>
                    <BiChevronUp />
                  </IconButton>
                  <IconButton>
                    <BiChevronDown />
                  </IconButton>
                </HStack>
                <Button
                  disabled={field.state.value.length === 1}
                  onClick={() => field.removeValue(index)}
                  px="8"
                  colorScheme="danger"
                >
                  <Text>Remove</Text>
                </Button>
              </HStack>
            ))}
          </>
        )}
      </Field>
    </PageLayout>
  );
}
