<template>
  <div>
    <v-alert color="blue" variant="outlined" v-bind="$attrs">
      <v-row>
        <v-col cols="12">
          <v-progress-circular
            indeterminate
            color="blue"
            class="mr-2"
            size="25"
          ></v-progress-circular>
          Indexing in progess. Some data may be out of date.
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>
