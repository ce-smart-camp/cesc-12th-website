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
        <div v-for="question in FAQs" :key="question">
          <p>{{question}}</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "FAQsPage",
  data() {
    return {
      FAQs: {
        questions: ["q1", "q2", "q3"],
        answers: ["a1", "a2", "a3"]
      }
    };
  }
};
</script>
<style scoped>
</style>


