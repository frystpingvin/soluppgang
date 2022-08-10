export default function getHoursAndMinutes(milliseconds){
		var minutes = 	milliseconds / 1000 / 60;
		var hours 	= 	Math.floor(minutes/60);
		minutes 		-= 	hours*60;
		minutes 		= 	Math.round(minutes);

		return { "hours": hours, "minutes": minutes };
}