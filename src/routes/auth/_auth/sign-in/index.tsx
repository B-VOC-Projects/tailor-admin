import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import {
  Button,
  Container,
  FormControl,
  Heading,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@yamada-ui/react";
import { Link as TanstackLink } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/_auth/sign-in/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { Field } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container maxW="2xl">
      <Image src="https://img.logoipsum.com/346.svg" width="20" height="20" />
      <VStack gapY="0">
        <Heading size="lg">Welcome back!</Heading>
        <Text fontWeight="semibold" color="gray.600">
          Sign in to your account to continue
        </Text>
      </VStack>
      <VStack gapY="4">
        <Field name="email">
          {(field) => (
            <FormControl
              invalid={
                field.state.meta.errors.length > 0 &&
                !!field.state.meta.isTouched
              }
              label="Email"
            >
              <Input
                variant="filled"
                placeholder="johndoe@example.com"
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                value={field.state.value}
              />
            </FormControl>
          )}
        </Field>
        <Field name="email">
          {(field) => (
            <FormControl
              invalid={
                field.state.meta.errors.length > 0 &&
                !!field.state.meta.isTouched
              }
              label="Password"
            >
              <Input
                variant="filled"
                type="password"
                placeholder="******"
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                value={field.state.value}
              />
            </FormControl>
          )}
        </Field>
      </VStack>
      <Button colorScheme="primary">Sign In to your Account</Button>

      <VStack alignItems="center" gapY={2}>
        <Text color="gray.600">Don't have an account?</Text>
        <Link
          as={TanstackLink}
          href="../sign-up"
          colorScheme="primary"
          _hover={{ fontWeight: "semibold" }}
        >
          Sign Up
        </Link>
      </VStack>
    </Container>
  );
}
