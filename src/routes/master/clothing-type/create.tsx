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
  NumberInput,
} from "@yamada-ui/react";
import PageLayout from "@/components/PageLayout";
import { useForm } from "@tanstack/react-form";
import FormInput from "@/components/FormFields/Input";

export const Route = createFileRoute("/master/clothing-type/create")({
  component: RouteComponent,
});

type ClothingTypeForm = {
  title: string;
  gender: string;
  base_price: number;
  notes: string;
};

function RouteComponent() {
  const { Field } = useForm<ClothingTypeForm>({
    defaultValues: {
      base_price: 0,
      gender: "",
      notes: "",
      title: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <PageLayout
      title="Create Clothing Type"
      description="Create a new clothing type"
    >
      <Grid templateColumns="repeat(3, 1fr)" gap="md" width="full">
        <GridItem>
          <Field name="title">
            {(field) => (
              <FormControl
                helperMessage="Hello there"
                invalid={field.state.meta.errors.some((e) => !!e)}
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
                helperMessage="Hello there"
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
                helperMessage="Hello there"
                invalid={field.state.meta.errors.some((e) => !!e)}
                label="Base Price"
              >
                <NumberInput
                  id="base_price"
                  placeholder="Base Price"
                  onChange={(value) => field.handleChange(parseInt(value))}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                />
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
        <GridItem>
          <Field name="base_price">
            {(field) => (
              <>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Title" />
              </>
            )}
          </Field>
        </GridItem>
      </Grid>
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Name" />
    </PageLayout>
  );
}
