<script setup lang="ts">

import { ref, onMounted } from 'vue'

interface IProps {
  name: string
  age?: number[]
}

const props = withDefaults(defineProps<IProps>(), {
  name: 'Template Button',
  age: () => [18]
})

const buttonRef = ref<HTMLButtonElement | null>(null)

onMounted(() => {
  console.log('buttonRef', buttonRef.value)
})

</script>

<template>
  <button ref="buttonRef">{{ props.name }}</button>
</template>
