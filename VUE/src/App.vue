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
            <input type="text" v-model="selectedOption.format" id="format"
           placeholder="mm/dd/yyyy">

          </li>
          <li>
            <label for="weekStart">Week start</label>
            <input id="weekStart" type="text" placeholder="0"
                   v-model="selectedOption.weekStart">
          </li>
          <li>
            <label for="startDate">Start date</label>
            <input id="startDate" type="text" placeholder="-Infinity" v-model="selectedOption.startDate">
          </li>
          <li>
            <label for="endDate">End date</label>
            <input id="endDate" type="text" placeholder="+Infinity"  v-model="selectedOption.endDate">
          </li>
          <li>
            <label for="startView">Start view</label>
            <select id="startView" v-model="selectedOption.startView">
              <option :key="option" :value="index"
                      v-for="(option, index) in options.start">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="minMode">Min view mode</label>
            <select id="minMode"  v-model="selectedOption.minMode">
              <option :key="option" :value="options.minMode[index]"
                      v-for="(option, index) in  options.minMode">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="maxMode">Max view mode</label>
            <select id="maxMode"  v-model="selectedOption.maxMode">
              <option :key="option" :value="options.maxMode[index]"
                      v-for="(option, index) in  options.maxMode">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="todayButton">Today button</label>
            <select id="todayButton" v-model="selectedOption.todayButton">
              <option :key="option" :value="options.todayButton[index]"
                      v-for="(option, index) in options.todayButton">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="clearButton">Clear button</label>
            <select id="clearButton" v-model="selectedOption.clearButton">
              <option value="false">disabled</option>
              <option value="true">enabled</option>
            </select>
          </li>
          <li>
            <label for="language">Language</label>
            <select id="language" v-model="selectedOption.language">
              <option :key="option" :value="options.language[index]"
                      v-for="(option, index) in options.language">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="orientation">Orientation</label>
            <select id="orientation" v-model="selectedOption.orientation">
              <option :key="option" :value="options.orientation[index]"
                      v-for="(option, index) in  options.orientation">
                {{ option }}
              </option>
            </select>
          </li>
          <li>
            <label for="multiDate">Multidate </label>
            <input id="multiDate" type="text" placeholder="false"
                   v-model="selectedOption.multiDate">
          </li>
          <li>
            <label for="multiDateSeparator">Multidate separator </label>
            <input id="multiDateSeparator" type="text" placeholder=","
                   v-model="selectedOption.multiDateSeparator">
          </li>
        </ul>
        <div class="days_disabled">
          <p>Days of week disabled:</p>
          <ul>
            <li>
              <input type="checkbox" id="0" value="0" v-model="selectedOption.daysOfQWeekDisabled">
              <label for="0">0</label>
            </li>
            <li>
              <input type="checkbox" id="1" value="1" v-model="selectedOption.daysOfQWeekDisabled">
              <label for="1">1</label>
            </li>
            <li>
              <input type="checkbox" id="2" value="2" v-model="selectedOption.daysOfQWeekDisabled">
              <label for="2">2</label>
            </li>
            <li>
              <input type="checkbox" id="3" value="3" v-model="selectedOption.daysOfQWeekDisabled">
              <label for="3">3</label>
            </li>
            <li>
              <input type="checkbox" id="4" value="4" v-model="selectedOption.daysOfQWeekDisabled">
              <label for="4">4</label>
            </li>
            <li>
              <input type="checkbox" id="5" value="5" v-model="selectedOption.daysOfQWeekDisabled">
              <label for="5">5</label>
            </li>
            <li>
              <input type="checkbox" id="6" value="6" v-model="selectedOption.daysOfQWeekDisabled">
              <label for="6">6</label>
            </li>
          </ul>
        </div>
        <!-- /.days_disabled -->
        <div class="days_allocated">
          <p>Days of week highlighted:</p>
          <ul>
            <li>
              <input type="checkbox" id="allocated-0" value="0" v-model="selectedOption.daysOfWeekHighlighted">
              <label for="allocated-0">0</label>
            </li>
            <li>
              <input type="checkbox" id="allocated-1" value="1" v-model="selectedOption.daysOfWeekHighlighted">
              <label for="allocated-1">1</label>
            </li>
            <li>
              <input type="checkbox" id="allocated-2" value="2" v-model="selectedOption.daysOfWeekHighlighted">
              <label for="allocated-2">2</label>
            </li>
            <li>
              <input type="checkbox" id="allocated-3" value="3" v-model="selectedOption.daysOfWeekHighlighted">
              <label for="allocated-3">3</label>
            </li>
            <li>
              <input type="checkbox" id="allocated-4" value="4" v-model="selectedOption.daysOfWeekHighlighted">
              <label for="allocated-4">4</label>
            </li>
            <li>
              <input type="checkbox" id="allocated-5" value="5" v-model="selectedOption.daysOfWeekHighlighted">
              <label for="allocated-5">5</label>
            </li>
            <li>
              <input type="checkbox" id="allocated-6" value="6" v-model="selectedOption.daysOfWeekHighlighted">
              <label for="allocated-6">6</label>
            </li>
          </ul>
        </div>
        <!-- /.days_allocated -->
        <ul>
          <li>
            <input type="checkbox" id="calendarWeeks" v-model="selectedOption.calendarWeeks">
            <label for="calendarWeeks">Calendar weeks</label>
          </li>
          <li>
            <input type="checkbox" id="closeAuto" v-model="selectedOption.closeAuto">
            <label for="closeAuto">Auto Close</label>
          </li>
          <li>
            <input type="checkbox" id="todayHighlight" v-model="selectedOption.todayHighlight">
            <label for="todayHighlight">Today highlight</label>
          </li>
          <li>
            <input :checked="checked" type="checkbox" id="keyboardNavigation"
                   v-model="selectedOption.keyboardNavigation">
            <label for="keyboardNavigation">Keyboard navigation</label>
          </li>
          <li>
            <input :checked="checked" type="checkbox" id="forceParse"
                   v-model="selectedOption.forceParse">
            <label for="forceParse">Force parse</label>
          </li>
          <li>
            <input type="checkbox" id="dayCallback" v-model="selectedOption.dayCallback">
            <label for="dayCallback">Before-show-day callback</label>
          </li>
          <li>
            <input type="checkbox" id="monthCallback" v-model="selectedOption.monthCallback">
            <label for="monthCallback">Before-show-month callback</label>
          </li>
          <li>
            <input type="checkbox" id="yearCallback" v-model="selectedOption.yearCallback">
            <label for="yearCallback">Before-show-year callback</label>
          </li>
          <li>
            <input type="checkbox" id="datesDisabled" v-model="selectedOption.datesDisabled">
            <label for="datesDisabled">datesDisabled</label>
          </li>
          <li>
            <input type="checkbox" id="toggleActive" v-model="selectedOption.toggleActive">
            <label for="toggleActive">Toggle Active</label>
          </li>
          <li>
            <input type="checkbox" id=" defaultViewDate" v-model="selectedOption.defaultViewDate">
            <label for=" defaultViewDate"> DefaultViewDate option</label>
          </li>
        </ul>
      </div>
      <!-- /.options -->
    </form>
    <div class="showCalendar">

      <div class="showTextInput" v-if="type.textInput">
        <input class="showInput" :value="selectedDay" v-show="showInput" type="text"
               v-on:click="showCalendar = true">
        <Calendar :language="selectedOption.language" :todayHighlight="selectedOption.todayHighlight"
                  :changeData="changeData" v-show="showCalendar" />
      </div>
      <!-- /.showTextInput -->

      <div class="showComponent" v-if="type.component">
        <input class="showInput" :value="selectedDay" v-show="showInput"  type="text"
               v-on:click="showCalendar = true">
        <div v-show="addCalendar" v-on:click="showCalendar = true" class="addCalendar">
          <span title="add calendar"></span>
        </div>
        <!-- /.addCalendar -->
        <Calendar :todayHighlight="selectedOption.todayHighlight" :changeData="changeData" v-show="showCalendar" />
      </div>
      <!-- /.component -->

      <div class="showEmbeddedInline" v-if="type.embeddedInline">
        <div class="E-Line">
          <Calendar :todayHighlight="selectedOption.todayHighlight" style="top: 0" :changeData="changeData"/>
        </div>
        <!-- /.showCalendar -->
      </div>
      <!-- /.showEmbeddedInline -->

      <div class="showRange" v-if="type.range">
        <div class="calendar-start">
          <input class="showInput" :value="selectedDayStart" v-show="showInput" type="text"
                 @focus="showCalendarStart = true, showCalendarEnd = false" >
          <Calendar :language="selectedOption.language" :todayHighlight="selectedOption.todayHighlight" :changeData="changeData" v-show="showCalendarStart" />
        </div>
        <span>to</span>
        <div class="calendar-end">
          <input class="showInput" :value="selectedDayEnd" v-show="showInput" type="text"
                 @focus="showCalendarEnd = true, showCalendarStart = false ">
          <Calendar :language="selectedOption.language" :todayHighlight="selectedOption.todayHighlight" class="calendar" :changeData="changeData" v-show="showCalendarEnd" />
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
        start: ['0 / days', '1 / months', '2 / years', '3 / decades', '4 / centuries',],
        minMode: [' 0 / days', '1 / months', '2 / years', '3 / decades', '4 / centuries',],
        maxMode: [' 0 / days', ' 1 / months', '2 / years', '3 / decades', '4 / centuries'],
        todayButton: ['disabled', 'enabled (unlinked)', 'linked'],
        orientation: ['auto', 'bottom auto', 'auto left', 'top left', 'bottom left', 'auto right', 'top right', 'bottom right',],
        language: ['en', 'fr', 'ro', 'ua', 'de',],
      },
      selectedOption: {
        format: '',
        weekStart: '',
        startDate: '',
        endDate: '',
        startView: '',
        minMode: '',
        maxMode: '',
        todayButton: '',
        clearButton: '',
        language: '',
        orientation: '',
        multiDate: '',
        multiDateSeparator: '',
        daysOfQWeekDisabled: [],
        daysOfWeekHighlighted: [],
        calendarWeeks: false,
        closeAuto: false,
        todayHighlight: false,
        keyboardNavigation: true,
        forceParse: true,
        dayCallback: false,
        monthCallback: false,
        yearCallback: false,
        datesDisabled: false,
        toggleActive: false,
        defaultViewDate: false,
      },
      selectedDay: '',
      resultDatepicker: [],

    }
  },
  methods: {
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
  .E-Line {
    position: relative;
    bottom: 0;
  }

</style>
