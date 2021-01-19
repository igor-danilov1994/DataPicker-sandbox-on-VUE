<template>
  <div class="showTextInput" >
    <input class="showInput"
           :value="propsToComponent.selectedDays" type="text"
           v-on:click="propsToComponent.toggleSetInputToCalendar(true) ">

      <Calendar v-show="propsToComponent.showCalendar"
                :propsToCalendar="propsToCalendar"/>
  </div>
</template>

<script>

import Calendar from "../Calendar";

export default {
  name: 'TextInput',
  props: ['propsToComponent', 'propsToCalendar'],
  data() {
    return {

    }
  },
  methods: {
  },
  computed: {},
  components: {
    Calendar
  },
}
</script>

<style scoped>

  .showTextInput {
    position: relative;
  }

</style>
