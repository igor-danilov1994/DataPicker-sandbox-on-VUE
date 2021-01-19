<template>
  <div class="showComponent" >
    <input class="showInput" :value="propsToComponent.selectedDays" type="text"
           v-on:click="propsToComponent.toggleSetInputToCalendar(true)">

    <div class="addCalendar" v-on:click="propsToComponent.toggleSetInputToCalendar(true)">
      <span title="add calendar"></span>
    </div>
    <!-- /.addCalendar -->
    <Calendar v-show="propsToComponent.showCalendar"
              :propsToCalendar="propsToCalendar"/>
  </div>
  <!-- /.component -->


</template>

<script>

import Calendar from '../Calendar';

export default {
  name: 'Componente',
  props: ['propsToCalendar', 'propsToComponent'],
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


</style>
