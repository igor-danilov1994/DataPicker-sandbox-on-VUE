<template>
  <div class="showRange">
    <div class="calendar-start showEmbeddedInline">
      <input class="showInput" :value="selectedDayStart" type="text"
              @click="toggleSetInputToCalendar(true, false)">
      <Calendar v-show="showCalendarStart"
                :changeData="changeData"
                :daysOfWeekHighlighted="daysOfWeekHighlighted"
                :daysOfQWeekDisabled="daysOfQWeekDisabled"
                :todayHighlight="todayHighlight"
                :language="language"
        />
    </div>
    <span>to</span>
    <div class="calendar-end showEmbeddedInline">
      <input class="showInput" :value="selectedDayEnd"  type="text"
             @click="toggleSetInputToCalendar(false, true)">

      <Calendar v-show="showCalendarEnd"
                :changeData="changeData"
                :daysOfWeekHighlighted="daysOfWeekHighlighted"
                :daysOfQWeekDisabled="daysOfQWeekDisabled"
                :todayHighlight="todayHighlight"
                :language="language"
        />
    </div>
  </div>
  <!-- /.showRange -->
</template>
<script>
import Calendar from '../Calendar';
export default {
  name: 'Embedded',
  props: ['changeData', 'todayHighlight', 'daysOfQWeekDisabled', 'selectedDayEnd', 'selectedDayStart',
    'toggleSetInputToCalendar',
    'daysOfWeekHighlighted', 'language', 'showCalendarStart', 'showCalendarEnd'],
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


.showEmbeddedInline {
  position: relative;
}

.showRange {
  display: flex;
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
