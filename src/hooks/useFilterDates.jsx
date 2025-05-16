import React from 'react'
import { getWeekRange, isInCurrentMonth, obtainDate } from './useDates';

export default function useFilterDates(usersData) {


      const today = obtainDate(Date.now());

  // Filtra solo las asignaciones para hoy
  const assignmentsForToday = usersData.filter(user => {
    const visitDate = obtainDate(user.nxtvisit);
    return visitDate === today;
  });

  const { start, end } = getWeekRange();

  const assignmentsThisWeek = usersData.filter(user => {

    if (!user.nxtvisit) return false;
    const visitDate = new Date(user.nxtvisit);
    return visitDate >= start && visitDate <= end;
  });

  const assignmentsThisMonth = usersData.filter(user => {
    return user.nxtvisit && isInCurrentMonth(user.nxtvisit);
  });

  return [today, assignmentsForToday, assignmentsThisWeek, assignmentsThisMonth]
}
