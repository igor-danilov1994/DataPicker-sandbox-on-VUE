<template>
  <div ref="datepicker" id="datepicker" class="container datepicker">
    <form class="datepicker_form" action="#"  @click="closeCalendar">
      <div class="type">
        <span>Type:</span>
        <ul>
          <li>
            <input v-on:click="isChecked" :checked="type.textInput"
                    id="textInput" type="radio">
            <label for="textInput">Text input</label>
          </li>
          <li>
            <input id="component" type="radio" :checked="type.component" v-on:click="isChecked">
            <label for="component">Component</label>
          </li>
          <li>
            <input id="embeddedInline" type="radio" :checked="type.embeddedInline"
                   v-on:click="isChecked">
            <label for="embeddedInline">Embedded / inline</label>
          </li>
          <li>
            <input id="range" type="radio" :checked="type.range"
                   v-on:click="isChecked">
            <label for="range">Range</label>
          </li>
        </ul>
      </div>
      <!-- /.type -->

      <div class="options">
        <span>Options: </span>
        <ul>
          <li>
            <label for="format">Format</label>
            <input type="text" v-model="options.format" id="format"
           placeholder="mm/dd/yyyy">

          </li>
          <li>
            <label for="weekStart">Week start</label>
            <input id="weekStart" type="text" placeholder="0"
                   v-model="options.weekStart">
          </li>
          <li>
            <label for="startDate">Start date</label>
            <input id="startDate" type="text" placeholder="-Infinity" v-model="options.startDate">
          </li>
          <li>
            <label for="endDate">End date</label>
            <input id="endDate" type="text" placeholder="+Infinity" v-model="options.endDate">
          </li>
          <li>
            <label for="start">Start view</label>
            <select id="start" v-on:input="optionsChangeValue">
              <option :key="option" v-for="option in  options.start">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="minMode">Min view mode</label>
            <select id="minMode" v-on:input="optionsChangeValue">
              <option :key="option" v-for="option in  options.minMode">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="maxMode">Max view mode</label>
            <select id="maxMode" v-on:input="optionsChangeValue">
              <option :key="option" v-for="option in  options.maxMode">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="todayButton">Today button</label>
            <select id="todayButton" v-on:input="optionsChangeValue">
              <option :key="option" v-for="option in  options.todayButton">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="clearButton">Clear button</label>
            <select id="clearButton" v-on:input="optionsChangeValue">
              <option value="false">disabled</option>
              <option value="true">enabled</option>
            </select>
          </li>
          <li>
            <label for="language">Language</label>
            <select id="language" v-on:input="optionsChangeValue">
              <option :key="option" v-for="option in options.language">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="orientation">Orientation</label>
            <select id="orientation" v-on:input=" options.language">
              <option :key="option" v-for="option in  options.orientation">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="multiDate">Multidate </label>
            <input id="multiDate" type="text" placeholder="false" v-on:input=" optionsChangeValue">
          </li>
          <li>
            <label for="multiDateSeparator">Multidate separator </label>
            <input id="multiDateSeparator" type="text" placeholder=","
                   v-on:input=" optionsChangeValue">
          </li>
        </ul>
        <div class="days_disabled">
          <p>Days of week disabled:</p>
          <ul>
            <li>
              <input type="checkbox" id="disabled0" v-on:input=" optionsChangeValue">
              <label for="disabled0">0</label>
            </li>
            <li>
              <input type="checkbox" id="disabled1" v-on:input=" optionsChangeValue">
              <label for="disabled1">1</label>
            </li>
            <li>
              <input type="checkbox" id="disabled2" v-on:input=" optionsChangeValue">
              <label for="disabled2">2</label>
            </li>
            <li>
              <input type="checkbox" id="disabled13" v-on:input=" optionsChangeValue">
              <label for="disabled13">3</label>
            </li>
            <li>
              <input type="checkbox" id="disabled14" v-on:input=" optionsChangeValue">
              <label for="disabled14">4</label>
            </li>
            <li>
              <input type="checkbox" id="disabled15" v-on:input=" optionsChangeValue">
              <label for="disabled15">5</label>
            </li>
            <li>
              <input type="checkbox" id="disabled16" v-on:input=" optionsChangeValue">
              <label for="disabled16">6</label>
            </li>
          </ul>
        </div>
        <!-- /.days_disabled -->
        <div class="days_allocated">
          <p>Days of week highlighted:</p>
          <ul>
            <li>
              <input type="checkbox" id="allocated0" v-on:input=" optionsChangeValue">
              <label for="allocated0">0</label>
            </li>
            <li>
              <input type="checkbox" id="allocated1" v-on:input=" optionsChangeValue">
              <label for="allocated1">1</label>
            </li>
            <li>
              <input type="checkbox" id="allocated2" v-on:input=" optionsChangeValue">
              <label for="allocated2">2</label>
            </li>
            <li>
              <input type="checkbox" id="allocated3" v-on:input=" optionsChangeValue">
              <label for="allocated3">3</label>
            </li>
            <li>
              <input type="checkbox" id="allocated4" v-on:input=" optionsChangeValue">
              <label for="allocated4">4</label>
            </li>
            <li>
              <input type="checkbox" id="allocated5" v-on:input=" optionsChangeValue">
              <label for="allocated5">5</label>
            </li>
            <li>
              <input type="checkbox" id="allocated6" v-on:input=" optionsChangeValue">
              <label for="allocated6">6</label>
            </li>
          </ul>
        </div>
        <!-- /.days_allocated -->
        <ul>
          <li>
            <input type="checkbox" id="Calendar weeks" v-on:input="optionsChangeValue">
            <label for="Calendar weeks" v-on:input="optionsChangeValue">Calendar weeks</label>
          </li>
          <li>
            <input type="checkbox" id="AutoСlose" v-on:input=" optionsChangeValue">
            <label for="AutoСlose">Auto Close</label>
          </li>
          <li>
            <input type="checkbox" id="Today_highlight" v-on:input=" optionsChangeValue">
            <label for="Today_highlight">Today highlight</label>
          </li>
          <li>
            <input :checked="checked" type="checkbox" id="Keyboard_navigation"
                   v-on:input=" optionsChangeValue">
            <label for="Keyboard_navigation">Keyboard navigation</label>
          </li>
          <li>
            <input :checked="checked" type="checkbox" id="Force_parse">
            <label for="Force_parse">Force parse</label>
          </li>
          <li>
            <input type="checkbox" id="day_callback" v-on:input=" optionsChangeValue">
            <label for="day_callback">Before-show-day callback</label>
          </li>
          <li>
            <input type="checkbox" id="month_callback" v-on:input=" optionsChangeValue">
            <label for="month_callback">Before-show-month callback</label>
          </li>
          <li>
            <input type="checkbox" id="year_callbac" v-on:input=" optionsChangeValue">
            <label for="year_callbac">Before-show-year callback</label>
          </li>
          <li>
            <input type="checkbox" id="datesDisabled" v-on:input=" optionsChangeValue">
            <label for="datesDisabled">datesDisabled</label>
          </li>
          <li>
            <input type="checkbox" id="Toggle_Active" v-on:input=" optionsChangeValue">
            <label for="Toggle_Active">Toggle Active</label>
          </li>
          <li>
            <input type="checkbox" id=" DefaultViewDate_option" v-on:input=" optionsChangeValue">
            <label for=" DefaultViewDate_option"> DefaultViewDate option</label>
          </li>
        </ul>
      </div>
      <!-- /.options -->
    </form>

    <div class="showCalendar">


      <div class="showTextInput" v-show="type.textInput">
        <input class="showInput" :value="selectedDay" v-show="showInput" type="text"
               v-on:click="showCalendar = true">
        <Calendar :changeData="changeData" v-show="showCalendar" />
      </div>
      <!-- /.showTextInput -->

      <div class="showComponent" v-show="type.component">
        <input class="showInput" :value="selectedDay" v-show="showInput"  type="text"
               v-on:click="showCalendar = true">
        <div v-show="addCalendar" v-on:click="showCalendar = true" class="addCalendar">
          <span title="add calendar"></span>
        </div>
        <!-- /.addCalendar -->
        <Calendar :changeData="changeData" v-show="showCalendar" />
      </div>
      <!-- /.component -->

      <div class="showEmbeddedInline" v-show="type.embeddedInline">
        <Calendar :changeData="changeData" v-show="showCalendar" />
      </div>
      <!-- /.showEmbeddedInline -->

      <div class="showRange" v-show="type.range">

        <div class="calendar-start">
          <input class="showInput" :value="selectedDayStart" v-show="showInput" type="text"
                 @focus="showCalendarStart = true, showCalendarEnd = false" >
          <Calendar :changeData="changeData" v-show="showCalendarStart" />
        </div>

        <span>to</span>

        <div class="calendar-end">
          <input class="showInput" :value="selectedDayEnd" v-show="showInput" type="text"
                 @focus="showCalendarEnd = true, showCalendarStart = false ">
          <Calendar class="calendar" :changeData="changeData" v-show="showCalendarEnd" />
        </div>

      </div>
      <!-- /.showRange -->



    </div>
  <!-- /.showCalendar -->
  </div>
  <!-- /.container -->
</template>

<script>

import Calendar from './Calendar.vue';

export default {
  name: 'app',
  data() {
    return {
      type: {
        textInput: true,
        component: false,
        embeddedInline: false,
        range: false,
        checked: true,
      },
      addCalendar: false,
      showCalendar: false,
      showCalendarStart: false,
      selectedDayStart: '',
      showCalendarEnd: false,
      selectedDayEnd: '',
      showInput: true,
      checked: true,
      options: {
        selected: true,
        format: '',
        weekStart: '',
        startDate: '',
        endDate: '',
        start: ['0 / days', '1 / months', '2 / years', '3 / decades', '4 / centuries',],
        minMode: [' 0 / days', '1 / months', '2 / years', '3 / decades', '4 / centuries',],
        maxMode: [' 0 / days', ' 1 / months', '2 / years', '3 / decades', '4 / centuries'],
        todayButton: ['disabled', 'enabled (unlinked)', 'linked'],
        clearButton: '',
        orientation: ['auto', 'bottom auto', 'auto left', 'top left', 'bottom left', 'auto right', 'top right', 'bottom right',],
        language: ['en', 'fg', 'ty', 'ui', 'qw', 'er', 'vbn', 'hj', 'hp', 'vb', 'kw', 'zp', 'vb-RT', 'zm', 'by', 'mp'],
        DaysOfQWeekDisabled: [],
      },
      resultDatepicker: [],
      selectedDay: '',

    }
  },
  methods: {
    optionsChangeValue(event) {
      let type = event.target.type
      let currentValue = event.target.value
      let inputId = event.currentTarget.id
      let nodeName = event.currentTarget.nodeName

      let total = inputId + ': ' + currentValue

      if (nodeName === "SELECT") {
        this.resultDatepicker.push(total)

      } else if (nodeName === "INPUT") {

        if (type === "checkbox") {
          let inputChecked = event.currentTarget.checked
          let total = inputId + ': ' + inputChecked

          this.resultDatepicker.push(total)
        } else {
          this.resultDatepicker.push(total)
        }
      }
      console.log(this.resultDatepicker)
    },
    isChecked(event){
      let typeCurrent = event.currentTarget.id

      this.type.textInput = false
      this.type.component = false
      this.type.embeddedInline = false
      this.type.range = false

      this.type[typeCurrent] = true

      if (typeCurrent === 'embeddedInline') {
        this.showInput = false
        this.addCalendar = false
        this.showCalendar = true
      } else if (typeCurrent === 'textInput') {
        this.showInput = true
        this.addCalendar = false
      } else if(typeCurrent === 'component') {
        this.showInput = true
        this.addCalendar = true
      } else if (typeCurrent === 'range') {
        this.showInput = true
      }
    },
    changeData(day, month, year) {
      let date = day + '/' + (month < 10 ?  '0' : '')  + month + '/' + year
      this.selectedDay = date

      if(this.showCalendarStart) {
        this.selectedDayStart = date
      } else {
        this.selectedDayEnd = date
      }

    },
    closeCalendar() {
      this.showCalendar = false
      this.showCalendarStart = false
      this.showCalendarEnd = false
    }
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
  .datepicker {
    border: solid 1px red;
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
  }
  .showEmbeddedInline {
    position: relative;
  }
  .showRange {
    display: flex;
  }
  .calendar-end  {
    position: relative;

    right: 0;
  }

</style>
