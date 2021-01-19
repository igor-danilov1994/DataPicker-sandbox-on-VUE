<template>
  <div class="showRange">
    <div class="calendar-start showEmbeddedInline">
      <input class="showInput" :value="selectedDayStart" type="text"
              @click="toggleSetInputToCalendar(true, false)">
      <Calendar v-show="showCalendarStart"
                :propsToCalendar="propsToCalendar"
        />
    </div>
    <span>to</span>
    <div class="calendar-end showEmbeddedInline">
      <input class="showInput" :value="selectedDayEnd"  type="text"
             @click="toggleSetInputToCalendar(false, true)">

      <Calendar v-show="showCalendarEnd"
                :propsToCalendar="propsToCalendar"
        />
    </div>
  </div>
  <!-- /.showRange -->
</template>
<script>

import Calendar from '../Calendar';

export default {
  name: 'Embedded',
  props: ['selectedDayEnd', 'selectedDayStart', 'toggleSetInputToCalendar', 'propsToCalendar',
              'showCalendarStart', 'showCalendarEnd'],
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
  .showRange {
    display: flex;
  }
  .showRange span{
    margin: 0 5px;
  }
  .showEmbeddedInline{
    position: relative;
  }
  .calendar-end {
    right: 0;
  }

</style>
