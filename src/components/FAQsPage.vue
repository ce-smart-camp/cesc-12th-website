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
        <v-flex v-for="question in Questions " :key="question">
          <v-textarea outline :value="question.question"></v-textarea>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "FAQsPage",
  data() {
    return {
      Questions: [{ question: "question" },],
      Answers: [{ answer: "answer" }]
    };
  }
};
</script>
<style scoped>
</style>


