const App = {
	data() {
		return {
			type: {
				texIinput: true,
				component: false,
				embeddedInline: false,
				range: false,
			
			},
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
			month: new Date().getMonth(),    
			year: new Date().getFullYear(), 
			dFirstMonth: '1',
			day:["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			monthes:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			date: new Date(),
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
			console.log(this.resultDatepicker);
		},

		calendar: function () {
			let days = [];
			let week = 0;
			days[week] = [];
			let dlast = new Date(this.year, this.month + 1, 0).getDate();
			for (let i = 1; i <= dlast; i++) {
				if (new Date(this.year, this.month, i).getDay() != this.dFirstMonth) {
					a = { index: i };
					days[week].push(a);
					if (i == new Date().getDate() && this.year == new Date().getFullYear() && this.month == new Date().getMonth()) { a.current = '#747ae6' };
					if (new Date(this.year, this.month, i).getDay() == 6 || new Date(this.year, this.month, i).getDay() == 0) { a.weekend = '#ff0000' };
				}
				else {
					week++;

					days[week] = [];
					a = { index: i };
					days[week].push(a);
					if ((i == new Date().getDate()) && (this.year == new Date().getFullYear()) && (this.month == new Date().getMonth())) { a.current = '#747ae6' };
					if (new Date(this.year, this.month, i).getDay() == 6 || new Date(this.year, this.month, i).getDay() == 0) { a.weekend = '#ff0000' };
				}
			}

			if (days[0].length > 0) {
				for (let i = days[0].length; i < 7; i++) {
					days[0].unshift('');

				}
			}
			this.dayChange;
			//console.log(days);
			return days;
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
		dayChange(){
				if(this.dFirstMonth == 0){
						this.day = ["Su", "Mn", "Tu","We","Th","Fr","Sa"]
				} else {
						this.day = ["Mn", "Tu","We","Th","Fr","Sa", "Su"]
				}
		},
		exemple() {
			console.log("object");
		}
	},
	template: `
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
											<option v-for="option in  options.start">
													{{ option }}
											</option>
									</select>
							</li>
							<li>
									<label for="min mode">Min view mode</label>
									<select id="min mode" v-on:input="optionsChangeValue">
											<option v-for="option in  options.minMode">
													{{ option }}
											</option>
									</select>
							</li>
							<li>
									<label for="max mode">Max view mode</label>
									<select id="max mode" v-on:input="optionsChangeValue">
											<option v-for="option in  options.maxMode">
													{{ option }}
											</option>
									</select>
							</li>
							<li>
									<label for="today button">Today button</label>
									<select id="today button" v-on:input="optionsChangeValue">
											<option v-for="option in  options.todayButton">
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
									<select id="language" key="1" v-on:input="optionsChangeValue">
											<option v-for="(option, i) in options.language" :key="options.language">
													{{ option }}
											</option>

									</select>
							</li>
							<li>
									<label for="orientation">Orientation</label>
									<select id="orientation" v-on:input=" optionsChangeValue">
											<option v-for="option in  options.orientation">
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
									<input type="checkbox" id="Autoclose" v-on:input=" optionsChangeValue">
									<label for="Autoclose">Autoclose</label>
							</li>
							<li>
									<input type="checkbox" id="Today_highlight" v-on:input=" optionsChangeValue">
									<label for="Today_highlight">Today highlight</label>
							</li>
							<li>
									<input :checked="checked" type="checkbox" id=" Keyboard_navigation"
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

		<div class="calendar" id="calendar" v-show="type.texIinput"> decrease
			<table class="table">
					<thead>
							<tr>
									<td>
									<button v-on:click="decrease"> &lt </button>
									</td>

									<td colspan="5">
											{{monthes[month] }} {{year}}
									</td>

									<td>
											<button v-on:click="increase"> &gt </button>
									</td>
							</tr>
							<tr>
									<td v-for="d in day">
											{{d}}
									</td>
							</tr>
					</thead>
					<tbody>
							<tr v-for="week in calendar()">
									<td v-for="(day, index) in week"
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
		<!-- /.calendar -->
	` 
	
}


Vue.createApp(App).mount("#datepicker")

/*




function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}
*/
		




