import * as React 								from "react";
import { getSunrise, getSunset } 	from 'sunrise-sunset-js';
import formatTime 								from "../functions/formatTime";
import getMinutes 								from "../functions/getMinutes";

export default function SunInfo(props) {
	const todaysDate 		= new Date();
	const todaysSunrise = getSunrise(props.lat, props.long, todaysDate);
	const todaysSunset 	= getSunset(props.lat, props.long, todaysDate);
	const todaysSunTime = todaysSunset.getTime() - todaysSunrise.getTime();
	
	const yesterdaysDate = new Date();
	yesterdaysDate.setDate(yesterdaysDate.getDate() - 1); // subtract one day to get yesterdays date
	const yesterdaysSunrise 			= getSunrise(props.lat, props.long, yesterdaysDate);
	const yesterdaysSunset 				= getSunset(props.lat, props.long, yesterdaysDate);
	const yesterdaysSunTime 			= yesterdaysSunset.getTime() - yesterdaysSunrise.getTime();
	const sunTimeDiffToYesterday 	= yesterdaysSunTime - todaysSunTime;
	
	function diffToYesterday (timeDiffMilliseconds) {
		const timeDiffMinutes = getMinutes(timeDiffMilliseconds);
		
		if (timeDiffMinutes > 0) {
			return `${timeDiffMinutes} minuter längre än igår`
		}
		else if (timeDiffMinutes < 0) {
			return `${Math.abs(timeDiffMinutes)} minuter kortare än igår`
		}
		else {
			return "ungefär samma som igår"
		}
	}
	
	function getHoursAndMinutes(milliseconds){
			var minutes = 	milliseconds / 1000 / 60;
			var hours 	= 	Math.floor(minutes/60);
			minutes 		-= 	hours*60;
			minutes 		= 	Math.round(minutes);
	
			if (hours !== 0 && minutes !== 0) {
				return `${hours} timmar och ${minutes} minuter`;	
			}
			else if (hours === 0 && minutes !== 0) {
				return `${minutes} minuter`;
			}
			else if (hours !== 0 && minutes === 0) {
				return `${hours} timmar`;
			}
	}
	
	return (
		<>
			<h1>
				Solen i Stockholm gick idag upp <strong>{formatTime(todaysSunrise)}</strong> och ner <strong>{formatTime(todaysSunset)}</strong>.
				</h1>
			<h2>
				Idag var solen uppe i {getHoursAndMinutes(todaysSunTime)}, {diffToYesterday(sunTimeDiffToYesterday)}.
			</h2>
		</>
	)
}