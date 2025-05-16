
export function obtainDate(evalDate) {

  const day = new Date(evalDate)
  const options = {
     day: 'numeric' ,month: 'long'
  };
  const date = day.toLocaleDateString(undefined, options)

  return date


}

export function getWeekRange(date = new Date()) {
  const day = date.getDay(); // 0 (domingo) a 6 (sábado)
  const diffToMonday = day === 0 ? -6 : 1 - day; // Si es domingo, retrocede 6 días
  const monday = new Date(date);
  monday.setDate(date.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  return { start: monday, end: sunday };
}

export function isInCurrentMonth(dateString) {
  const visitDate = new Date(dateString);
  const now = new Date();

  return (
    visitDate.getMonth() === now.getMonth() &&
    visitDate.getFullYear() === now.getFullYear()
  );
}