<script setup>
</script>
<template>
  <div>
    <h1>Below text is reversed</h1>
  </div>
  <h1> {{ $reverse("Was it a car or a cat I saw") }}</h1>
  <h1>{{ $reverse("Mr. Owl ate my metal worm") }}</h1>
  <ReportUsModal/>
</template>
