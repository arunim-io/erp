<script setup lang="ts">
import { Button } from "$src/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "$src/components/ui/form";
import { Input } from "$src/components/ui/input";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { z } from "zod";

const formSchema = toTypedSchema(z.object({
  username: z.string(),
  password: z.string(),
}));

const form = useForm({ validationSchema: formSchema });

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <div class="py-10 space-y-5 container">
    <h1 class="font-semibold text-3xl">
      Login Page
    </h1>
    <form class="space-y-2.5" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input type="text" placeholder="johndoe@gmail.com" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" placeholder="**********" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">
        Login
      </Button>
    </form>
  </div>
</template>
