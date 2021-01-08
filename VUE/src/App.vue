<template>
  <div class="container">
    <form class="datepicker_form" action="#">
			<div class="type">
					<span>Type:</span>
					<ul>
							<li>
									<input :checked="type.texIinput" id="text_input" type="radio"
											v-on:click="type.component = false, type.texIinput = true">
									<label for="text_input">Text input</label>
							</li>
							<li>
									<input id="component" type="radio" :checked="type.component"
											v-on:click="!type.texIinput" >
									<label for="component">Component</label>
							</li>
							<li>
									<input id="embedded inline" type="radio" :checked="type.embeddedInline"
											v-on:click="type.component = false">
									<label for="embedded inline">Embedded / inline</label>
							</li>
							<li>
									<input id="range" type="radio" :checked="type.range"
											v-on:click="type.embeddedInline = false">
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
									<input v-on:input="optionsChangeValue" type="text" id="format" placeholder="mm/dd/yyyy">
							</li>
							<li>
									<label for="week start">Week start</label>
									<input id="week start" type="text" placeholder="0" v-on:input=" optionsChangeValue">
							</li>
							<li>
									<label for="start date">Start date</label>
									<input id="start date" type="text" placeholder="-Infinity" v-on:input=" optionsChangeValue">
							</li>
							<li>
									<label for="end date">End date</label>
									<input id="end date" type="text" placeholder="+Infinity" v-on:input=" optionsChangeValue">
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
									<label for="min mode">Min view mode</label>
									<select id="min mode" v-on:input="optionsChangeValue">
											<option :key="option" v-for="option in  options.minMode">
													{{ option }}
											</option>
									</select>
							</li>
							<li>
									<label for="max mode">Max view mode</label>
									<select id="max mode" v-on:input="optionsChangeValue">
											<option :key="option" v-for="option in  options.maxMode">
													{{ option }}
											</option>
									</select>
							</li>
							<li>
									<label for="today button">Today button</label>
									<select id="today button" v-on:input="optionsChangeValue">
											<option :key="option" v-for="option in  options.todayButton">
													{{ option }}
											</option>
									</select>
							</li>
							<li>
									<label for="clear button">Clear button</label>
									<select id="clear button" v-on:input="optionsChangeValue">
											<option value="false">disabled</option>
											<option value="true">enabled</option>
									</select>
							</li>
							<li>
									<label for="language">Language</label>
									<select id="language"  v-on:input="optionsChangeValue">
											<option :key="option"  v-for="option in options.language">
													{{ option }}
											</option>
									</select>
							</li>
							<li>
									<label for="orientation">Orientation</label>
									<select id="orientation" v-on:input=" optionsChangeValue">
											<option :key="option"  v-for="option in  options.orientation">
													{{ option }}
											</option>
									</select>
							</li>
							<li>
									<label for="multidate">Multidate </label>
									<input id="multidate" type="text" placeholder="false" v-on:input=" optionsChangeValue">
							</li>
							<li>
									<label for="multidate separator">Multidate separator </label>
									<input id="multidate separator" type="text" placeholder=","
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

    <input type="text" v-on:click="showCalendar = true">
    <Calendar v-show="showCalendar"></Calendar>

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
				texInput: true,
				component: false,
				embeddedInline: false,
				range: false,

			},
      showCalendar: false,
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
				language: ['en' ,'fg' ,'ty' ,'ui' ,'qw' ,'er' ,'vbn' ,'hj' ,'hp' ,'vb' ,'kw' ,'zp' ,'vb-RT' ,'zm' ,'by' ,'mp'],
				DaysOfQWeekDisabled: [],
			},
			resultDatepicker: [],

  }
  },
  methods: {
    optionsChangeValue(event) {
      let type =  event.target.type
      let currentValue = event.target.value
      let inputId = event.currentTarget.id
      let nodeName = event.currentTarget.nodeName

      let total = inputId + ': ' + currentValue

      if (nodeName === "SELECT") {
        this.resultDatepicker.push(total)

      } else if(nodeName === "INPUT") {

        if (type === "checkbox") {
          let inputChecked = event.currentTarget.checked
          let total = inputId + ': ' + inputChecked

          this.resultDatepicker.push(total)
        } else {
          this.resultDatepicker.push(total)
        }

      }
      console.log(this.resultDatepicker)
    }
  },
  components: {
    Calendar
  }
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

  .options ul input {
    outline: none;
  }

  .options ul li {
    margin-right: 25px;
  }

</style>
