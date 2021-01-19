<template>
  <div class="showComponent" >
    <input class="showInput" :value="selectedDays" type="text"
           v-on:click="toggleSetInputToCalendar(true)">

    <div v-on:click="toggleSetInputToCalendar(true)" class="addCalendar">
      <span title="add calendar"></span>
    </div>
    <!-- /.addCalendar -->

      <Calendar v-show="showCalendar"
                :changeData="changeData"
                :daysOfWeekHighlighted="daysOfWeekHighlighted"
                :daysOfQWeekDisabled="daysOfQWeekDisabled"
                :todayHighlight="todayHighlight"
                :language="language"
      />


  </div>
  <!-- /.component -->


</template>

<script>

import Calendar from '../Calendar';

export default {
  name: 'Componente',
  props: ['changeData', 'todayHighlight', 'daysOfQWeekDisabled', 'toggleSetInputToCalendar',
    'daysOfWeekHighlighted', 'showCalendar', 'selectedDays', 'language'],
  data() {
    return {
    }
  },
  methods: {

  },
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

.addCalendar {
  background-color: #c2b5b5;
  cursor: pointer;
  top: 0;
  padding: 6px 12px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
}

.addCalendar span {
  text-align: center;
  position: relative;
}

.showComponent {
  display: flex;
  position: relative;
}

.calendar-end {
  position: relative;
  right: 0;
}

.E-Line {
  position: relative;
  bottom: 0;
}

</style>
