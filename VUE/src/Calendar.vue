<template>
  <div class="calendar" id="calendar">
    <table class="table">
      <thead>
      <tr>
        <td>
          <button v-on:click="decrease"> <</button>
        </td>

        <td colspan="5">
         {{ selectLanguageMonths() /*(months[this.month])*/ }} {{ year }}
        </td>

        <td>
          <button v-on:click="increase"> ></button>
        </td>
      </tr>

      <tr>
        <td :key="d" v-for="d in selectLanguageDay() ">
          {{ d }}
        </td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="week in calendar()">

        <td class="calendar_day" v-on:click="changeData( day.index, (month + 1), year )" v-for="day in week"
            :style="{'color': day.weekend, 'background-color': todayHighlight ? day.current : '' }">
          {{ day.index }}
        </td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  props: ['changeData', 'todayHighlight', 'language'],
  data() {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      dFirstMonth: '1',
      day: ["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      languageMonths: {
        en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Nnovembre', 'Décembre'],
        ro: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
        ua: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липня', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
        de: ['Januar', 'Februar', 'März', 'April', 'Kann', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],

      },
      languageDay: {
        en: ["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        ua: ["По", "Вi", "Се", "Че", "П'я", "Сб", "Не"],
        fr: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
        ro: ["Lu", "Ma", "Mi", "Jo", "Vi", "Sâ", "Du"],
        de: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      },
      date: new Date(),
    }
  },
  methods: {
    calendar() {
      var days = [];
      var week = 0;
      days[week] = [];
      var dayLast = new Date(this.year, this.month + 1, 0).getDate();
      for (let i = 1; i <= dayLast; i++) {
        if (new Date(this.year, this.month, i).getDay() != this.dFirstMonth) {
          let a = {index: i};
          days[week].push(a);
          if (i === new Date().getDate() && this.year === new Date().getFullYear() && this.month === new Date().getMonth()) {
            a.current = '#747ae6'
          }
          if (new Date(this.year, this.month, i).getDay() === 6 || new Date(this.year, this.month, i).getDay() === 0) {
            a.weekend = '#ff0000'
          }
        } else {
          week++;

          days[week] = [];
          let a = {index: i};
          days[week].push(a);
          if ((i === new Date().getDate()) && (this.year === new Date().getFullYear()) && (this.month === new Date().getMonth())) {
            a.current = '#747ae6'
          }
          if (new Date(this.year, this.month, i).getDay() === 6 || new Date(this.year, this.month, i).getDay() === 0) {
            a.weekend = '#ff0000'
          }
        }
      }

      if (days[0].length > 0) {
        for (let i = days[0].length; i < 7; i++) {
          days[0].unshift('')

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
    selectLanguageMonths() {
      switch (this.language) {
        case 'ru': {
            return this.languageMonths.ru[this.month]
        }
        case 'en': {
           return this.languageMonths.en[this.month]
        }
        case 'fr': {
          return this.languageMonths.fr[this.month]
        }
        case 'ro': {
          return this.languageMonths.ro[this.month]
        }
        case 'ua': {
          return this.languageMonths.ua[this.month]
        }
        case 'de': {
          return this.languageMonths.de[this.month]
        }
        default:
          return this.months[this.month]
      }
    },
    selectLanguageDay() {
      switch (this.language) {
        case 'ru': {
          return this.languageDay.ru
        }
        case 'en': {
          return this.languageDay.en
        }
        case 'fr': {
          return this.languageDay.fr
        }
        case 'ro': {
          return this.languageDay.ro
        }
        case 'ua': {
          return this.languageDay.ua
        }
        case 'de': {
          return this.languageDay.de
        }
        default:
          return this.languageDay.en
      }
    }
  },
  computed: {
    dayChange() {
      if (this.dFirstMonth === 0) {
        this.day = ["Su", "Mn", "Tu", "We", "Th", "Fr", "Sa"]
      } else {
        this.day = ["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"]
      }
    },

  },






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

  .table thead tr:last-child {
    background-color: #dedada;
  }

  .table td {
    text-align: center;
  }

  .calendar {
    position: absolute;
    left: 0;
    bottom: 30px;
    background-color: #ffffff;
    border: solid 1px #000000;
    border-radius: 5px;
    padding: 10px;
    height: 145px;
  }
  .calendar_day:hover {
    color: #ffffff;
    background-color: cornflowerblue;
    cursor: pointer;
  }
  button {
    cursor: pointer;
    border: none;
  }


</style>
