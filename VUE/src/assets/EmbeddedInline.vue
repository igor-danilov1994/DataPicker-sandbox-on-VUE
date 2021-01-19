<template>
  <div class="showEmbedded" >
      <Calendar style="top: 0" :propsToCalendar="propsToCalendar"
      />
  </div>
  <!-- /.component -->


</template>

<script>

import Calendar from '../Calendar';

export default {
  name: 'Embedded',
  props: ['propsToCalendar'],
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
  .showEmbedded {
    position: relative;
  }
</style>
