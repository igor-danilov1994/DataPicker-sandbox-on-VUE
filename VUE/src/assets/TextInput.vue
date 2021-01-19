<template>
  <div class="showTextInput" >
    <input class="showInput" :value="selectedDays" type="text"
           v-on:click="toggleSetInputToCalendar(true) ">

      <Calendar v-show="showCalendar"
                :changeData="changeData"
                :daysOfWeekHighlighted="daysOfWeekHighlighted"
                :daysOfQWeekDisabled="daysOfQWeekDisabled"
                :todayHighlight="todayHighlight"
                :language="language"
      />
  </div>
</template>

<script>

import Calendar from "../Calendar";

export default {
  name: 'TextInput',
  props: ['changeData','todayHighlight', 'toggleSetInputToCalendar', 'language',
    'daysOfQWeekDisabled', 'daysOfWeekHighlighted', 'closeCalendar', 'selectedDays', 'showCalendar'],
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
  ul {
    padding: 0
  }

  ul li {
    list-style: none;
  }

  label {
    font-weight: bold;
  }

  .container {
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .datepicker_form {
    padding: 25px;
    border: solid 1px #9e9a9a;
    background-color: #f0e7e7;
  }

  .type ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .type ul li {
    margin-right: 25px;
  }

  .options ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  input {
    outline: none;
  }

  .options ul li {
    margin-right: 25px;
  }

  .showCalendar {
    margin-top: 25px;
    position: relative;
    max-width: 180px;
    display: flex;
  }
  .showTextInput {
    position: relative;
  }

</style>
