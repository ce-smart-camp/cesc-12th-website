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
        <v-flex v-for="i in 2 " :key="i">
          <v-card-title>
            <span class="title">Question</span>
          </v-card-title>
          <v-card class="mx-auto">
            <v-card-text>Answer</v-card-text>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "FAQsPage"
};
</script>
<style scoped>
</style>


