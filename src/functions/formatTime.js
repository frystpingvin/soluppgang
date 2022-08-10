export default function formatTime(date) {
  return Intl.DateTimeFormat("sv", {
		hour: "numeric",
		minute: "numeric",
	}).format(date);
}