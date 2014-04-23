/*
	Author: Graeme Boy (graemeboy@gmail.com)
	Github: https://github.com/graemeboy/
*/

jQuery(document).ready(function($) {
	function makeClock() {
		// CLOCK_CHARS: holds the characters for the clock face.
		var CLOCK_CHARS = [
			['i', 't', 'l', 'i', 's', 'b', 'f', 'a', 'm', 'p', 'm'],
			['a', 'c', 'q', 'u', 'a', 'r', 't', 'e', 'r', 'd', 'c'],
			['t', 'w', 'e', 'n', 't', 'y', 'f', 'i', 'v', 'e', 'x'],
			['h', 'a', 'l', 'f', 'b', 't', 'e', 'n', 'f', 't', 'o'],
			['p', 'a', 's', 't', 'e', 'r', 'u', 'n', 'i', 'n', 'e'],
			['o', 'n', 'e', 's', 'i', 'x', 't', 'h', 'r', 'e', 'e'],
			['f', 'o', 'u', 'r', 'f', 'i', 'v', 'e', 't', 'w', 'o'],
			['e', 'i', 'g', 'h', 't', 'e', 'l', 'e', 'v', 'e', 'n'],
			['s', 'e', 'v', 'e', 'n', 't', 'w', 'e', 'l', 'v', 'e'],
			['t', 'e', 'n', 's', 'e', 'o', 'c', 'l', 'o', 'c', 'k']
		]; // CLOCK_CHARS
		// HOUR_DIC: a dictionary of hour integers to number strings, e.g. 12 is twelve, but so is 0
		var HOUR_DIC = {
			0: 'twelve',
			1: 'one',
			2: 'two',
			3: 'three',
			4: 'four',
			5: 'five',
			6: 'six',
			7: 'seven',
			8: 'eight',
			9: 'nine',
			10: 'ten',
			11: 'eleven',
			12: 'twelve',
			13: 'one',
			14: 'two',
			15: 'three',
			16: 'four',
			17: 'five',
			18: 'six',
			19: 'seven',
			20: 'eight',
			21: 'nine',
			22: 'ten',
			23: 'eleven',
			24: 'twelve',
		}; // HOUR_DIC
		// MIN_DIC: similar to HOUR_DIC, hold a dictionary of integers to strings; e.g. 15 = quarter.
		var MIN_DIC = {
			00: '',
			05: 'five',
			10: 'ten',
			15: 'quarter',
			20: 'twenty',
			25: 'twentyfive',
			30: 'half',
		};
		// onVals: based on the clock characters array - which of those values will be shown? Initially, none.
		// By the way, we cannot use a dictionary here, even though it's intuitive. Can you see why not?
		var onVals = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ]; // onVals
		// Get current time (hour[24]:minutes:seconds)
		var d = new Date();
		var timeElements = d.toTimeString().split(' ')[0].split(':'); // e.g. 19:43:52 => [19,43,52]
		// We only care about the hour and minutes, leave the seconds.
		var hour = parseInt(timeElements[0]);
		var min = parseInt(timeElements[1]);
		// Now we can begin to compose a natural language statement based on this time.
		// Later, we will iterate over this natural sentence, and modify onVals appropriately.
		var naturalSentence = 'it is ';
		// Sometimes we will use the current hour (e.g. something past something)
		// Othertimes, we use the next hour (something to something)
		var hourToShow;
		// We will always need to know the difference of current minutes from hourToShow.
		var minDiff;
		// We also ought to know the minutes to the next hour.
		var minutesToNextHour;
		// Because we are using steps of 5 (five, ten, fifteen, twenty, etc.)
		// we will use a temporary variable when dividing minutes by 5.
		var roundedMin;
		/* 
		 *	The first case that we can test, if whether we would say
		 * 	that it is "[minute] to [the hour]", or "[minute] past [the hour]."
		 * 	This depends whether minute is >= 33.
		 */
		if (min >= 33) {
			minutesToNextHour = 60 - min;
			// We're going to say: [minutes] to [next hour]
			roundedMin = Math.floor(minutesToNextHour / 5) * 5;
			if (roundedMin != 0) { // if 0, then we don't say anything at all
				// We're not exactly on the hour, and we're saying [minutes] to [next hour]
				// Therefore, we will illuminate "to"
				onVals[3][9] = 1;
				onVals[3][10] = 1;
			} // roundedMin != 0
			else { // roundedMin == 0
				// if we're exactly on the hour, we add "o'clock" at the end. Don't we?
				onVals[9][5] = 1;
				onVals[9][6] = 1;
				onVals[9][7] = 1;
				onVals[9][8] = 1;
				onVals[9][9] = 1;
				onVals[9][10] = 1;
			} // roundedMin == 0
			// We're saying [minutes] to [the next hour], so we ought to show hour + 1.
			hourToShow = hour + 1;
			// The difference beween this hour and the next
			minDiff = (60 - min) - roundedMin;
		} // if min >= 33
		else { // min < 33
			// In this case, we say that it is "something past" the current hour.
			roundedMin = Math.floor(min / 5) * 5;
			minDiff = min - roundedMin;
			// Then we say, "something past"
			if (roundedMin != 0) { // if 0, then we don't say anything at all
				onVals[4][0] = 1;
				onVals[4][1] = 1;
				onVals[4][2] = 1;
				onVals[4][3] = 1;
			} else {
				onVals[9][5] = 1;
				onVals[9][6] = 1;
				onVals[9][7] = 1;
				onVals[9][8] = 1;
				onVals[9][9] = 1;
				onVals[9][10] = 1;
			}
			hourToShow = hour;
			minDiff = min - roundedMin;
		} // else, min < 33
	
		// we can now update the natural sentence that we have.
		naturalSentence += MIN_DIC[roundedMin];
		
		/*
		*	There can be ten for minutes or hours, so I will set this manually.
		*/
		if (hourToShow == 5 || hourToShow == 17) { // The hour is five
			onVals[6][4] = 1;
			onVals[6][5] = 1;
			onVals[6][6] = 1;
			onVals[6][7] = 1;
		} else if (hourToShow == 10 || hourToShow == 22) { // the hour is ten
			onVals[9][0] = 1;
			onVals[9][1] = 1;
			onVals[9][2] = 1;
		} else {
			naturalSentence +=  " " + HOUR_DIC[hourToShow];
		}
		
		// Split the sentence into words, in order to process it.
		var words = naturalSentence.split(' ');
		
		// Iterate over all the words in the sentence.
		for (var i = 0; i < words.length; i++) {
			var rowNum = 0;
			// Iterate over all of the rows in the CLOCK_CHAR array.
			for (var x = 0; x < CLOCK_CHARS.length; x++) {
				// find out if the word is contained in that array.
				var tempString = CLOCK_CHARS[x].join('');
				var foundAt = tempString.indexOf(words[i]);
				if (foundAt > -1) {
					for (var c = 0; c < words[i].length; c++) {
						onVals[x][foundAt + c] = 1;
					}
					break;
				}
			}
		}
		
		var qlockFace = "<div class='qlock-field qlock-min-" + minDiff + "'>";
		for (var i = 0; i < CLOCK_CHARS.length; i++) { // iterate over rows
			qlockFace += "<div class='qlock-row'>";
			for (var x = 0; x < CLOCK_CHARS[i].length; x++) {
				if (onVals[i][x] == 1) {
					qlockFace += "<div class='qlock-char qlock-on'>" + CLOCK_CHARS[i][x] + "</div>";
				} else {
					qlockFace += "<div class='qlock-char'>" + CLOCK_CHARS[i][x] + "</div>";
				}
			}
			qlockFace += '</div>';
		}
		
		// Don't forget AM and PM!
		var period = '';
	    if (hour < 12){
		    period = "AM";
	    } // if hour < 12
	    else if (hour > 12) {
	    	period = "PM";
	   } // else if hour > 12
	   // When hour == 12, we'll just leave this blank
	   qlockFace += '<div class="qlock-period">' + period + '</div>';
	   
	   qlockFace += '</div><div style="clear:both"></div>';
		
		
		
		$('.qlock').html(qlockFace);
	} // makeClock()
	
	makeClock();
	
	setInterval(makeClock, 3000);
});