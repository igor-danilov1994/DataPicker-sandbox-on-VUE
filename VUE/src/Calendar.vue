<template>
  <div class="calendar" id="calendar">
    <table class="table">
      <thead>
      <tr>
        <td>
          <button v-on:click="decrease"> < </button>
        </td>

        <td colspan="5">
          {{ months[month] }} {{ year }}
        </td>

        <td>
          <button v-on:click="increase"> > </button>
        </td>
      </tr>
      <tr>
        <td :key="d" v-for="d in day">
          {{ d }}
        </td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="week in calendar()">
        <td v-for="day in week"
            :style="{'color': day.weekend, 'background-color': day.current}">
          {{ day.index }}
        </td>

      </tr>
      </tbody>
    </table>

    <div class="format-week">
      <h4>Format week</h4>
      <div>
        <input type="radio" value="1" v-model="dFirstMonth" id="customRadio1" name="customRadio"
               class="custom-control-input">
        <label for="customRadio1">Monday</label>
      </div>
      <div>
        <input type="radio" value="0" v-model="dFirstMonth" id="customRadio2" name="customRadio"
               class="custom-control-input">
        <label for="customRadio2">Sunday</label>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      dFirstMonth: '1',
      day: ["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      date: new Date(),
    }
  },
  methods: {
    calendar: function () {
      let days = [];
      let week = 0;
      days[week] = [];
      let dayLast = new Date(this.year, this.month + 1, 0).getDate();
      for (let i = 1; i <= dayLast; i++) {
        if (dayLast != this.dFirstMonth) {
          let a = { index: i };
          days[week].push(a);
          if (i === new Date().getDate() && this.year === new Date().getFullYear() && this.month === new Date().getMonth()) { a.current = '#747ae6' }
          if (new Date(this.year, this.month, i).getDay() === 6 || new Date(this.year, this.month, i).getDay() === 0) { a.weekend = '#ff0000' }
        }
        else {
          week++

          days[week] = [];
          let a = { index: i };
          days[week].push(a);
          if ((i === new Date().getDate()) && (this.year === new Date().getFullYear()) && (this.month === new Date().getMonth())) { a.current = '#747ae6' }
          if (new Date(this.year, this.month, i).getDay() === 6 || new Date(this.year, this.month, i).getDay() === 0) { a.weekend = '#ff0000' }
        }
      }

      if (days[0].length > 0) {
        for (let i = days[0].length; i < 7; i++) {
          days[0].unshift('');

        }
      }
      this.dayChange

      return days
    },
    increase() {
      this.month++;
      if (this.month > 11) {
        this.month = -1;
        this.month++;
        this.year++;
      }
    },
    decrease() {
      this.month--;
      if (this.month < 0) {
        this.month = 12;
        this.month--;
        this.year--;
      }
    },
  },
  computed: {
    dayChange () {
      if (this.dFirstMonth === 0) {
        this.day = ["Su", "Mn", "Tu", "We", "Th", "Fr", "Sa"]
      } else {
        this.day = ["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"]
      }
    },
  }
}
</script>

<style>
.days_disabled ul, .days_allocated ul {
  padding: 0 10px;
}

.days_disabled ul label, .days_allocated ul label {
  margin-left: 3px;
}

.table {
  border-collapse: collapse;
  float: left;
  width: 180px;
  table-layout: fixed;
}

.format-week {
  float: right;
}

.table thead tr:last-child {
  background-color: #dedada;
}
.table td {
  text-align: center;
}
.calendar {
  margin-top: 25px;
}

#calendar {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}


</style>
