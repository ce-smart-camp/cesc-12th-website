<template>
  <v-container bg fill-height>
    <v-layout column>
      <v-flex xs12 sm12 md12>
        <v-text-field
          v-model="search"
          type="text"
          label="FAQs"
          hint="For example, [WIP]"
          outline
          clearable
        ></v-text-field>
      </v-flex>
      <ul id="example">
        <li v-for="item in items" :key="item">{{item.message}}</li>
      </ul>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "FAQsPage",
  data() {
    return { items: [{ message: "Foo" }, { message: "Bar" }] };
  }
};
</script>
<style scoped>
</style>


