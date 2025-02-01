<script setup lang="ts">
import type { PrimitiveProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from ".";
import { cn } from "$src/utils";
import { Link } from "@inertiajs/vue3";
import { Primitive } from "radix-vue";
import { buttonVariants } from ".";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    :as="variant === 'link' ? Link : as" :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
