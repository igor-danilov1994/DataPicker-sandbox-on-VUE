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
}


Vue.createApp(App).mount("#datepicker")

/*




function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}
*/
		




