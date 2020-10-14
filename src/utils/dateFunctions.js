  export function getLocalDate(dateAsNumber) {
    const dateAsDate = new Date(dateAsNumber);
    const localDate = new Date(
      dateAsDate.getFullYear(),
      dateAsDate.getMonth(),
      dateAsDate.getDate(),
      0,
      0,
      0
    );
    return localDate;
  }
  
  export function getTodayAsNumber() {
    const today = new Date();
    return getLocalDate(today.valueOf()).valueOf();
  }
  
  export function dateNumberToString(dateAsNumber) {
    const dateAsDate = new Date(dateAsNumber);
    return dateAsDate.toISOString().substr(0, 10);
  }
  
  export function getTodayAsYYYYMMDD() {
      return dateNumberToString(getTodayAsNumber());
  }