export default function getMinutes(milliseconds) {
	var minutes = milliseconds / 1000 / 60;
	
	return Math.round(minutes);
}