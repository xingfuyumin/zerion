import moment from  'moment';

export const getTestData = (type, rang) => {
  let result = [];
  let endDate = moment();
  let startDate = moment().subtract(type, 1);
  while(endDate >= startDate) {
    result.push({
      date: `${startDate.format('MM/DD/YYYY hh:mm')}`,
      momey: (Math.random() * rang * (Math.random() > 0.5 ? 1 : -1)).toFixed(2),
    });
    startDate.add('minutes', 5);
  }
  return result;

}
