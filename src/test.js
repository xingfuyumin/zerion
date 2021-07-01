import moment from  'moment';

export const getTestData = (type, rang) => {
  let result = [];
  let endDate = moment();
  let startDate = moment().subtract(type, 1);
  while(endDate >= startDate) {
    result.push({
      date: `${startDate.format('MM/DD/YYYY HH:mm')}`,
      momey: Number((Math.random() * rang * (Math.random() > 0.5 ? 1 : -1)).toFixed(2)),
    });
    if (type === 'month' || type === 'year') {
      startDate.add('day', 1);
    } else {
      startDate.add('minutes', 5);
    }
  }
  return result;

}

export const walleticon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADuElEQVR4Xu3dMU4cQRBG4V45d0xK6MMQgoR8B0sOnDrwQcgQEoTcgRNY4h52bGHtFfhWqm3xyGtneP3Pq+6Z1szh999vb2vw78+vT3T0r18eqF6L719v6Sc+//xH9Vp8KACGsAAYv5UBMgBFqBZA+FYtwPitWgACrAXUAihCtQDCVwswfKsWoABrAbUAylAtgPDVAgxfLUD5dSOoW8E9C+CrCH6gG0EA71jajSAE2CqgVQBFqFUA4VuHy7sL2g/wfH1DZ6AGmH6ePn3+V0+PxL8AEL7FqxgNcAEYXkZlgFoAOSQD4J5ABUijt2oBq0mg3cjSADcHaA5AEmsVQPhqAbWA4TlMLaAWQA6rBRC+WkAtoBbQswCRSMvA4StIBu9Y263gbgVThjJABqAA8TLw5cd32g+gCVaFEr0zKJ7mdygAsykoANgCZofPj14ACgClSFtoLYDwe3EGyACUogxA+OaLM0AGoBRmAMI3X5wBMgClMAMQvvniDJABKIUZgPDNF2eADEApzACEb744A2QASuG4AXZ/QQPRX2vt/v/zw6DdARQA3BFUAPb+YkkGQAXsfgEUgAJgm0J3vwJw/JsEFoDmAHoRUb2+qZMO3jJw/3VwAWgZSBnYvQW2CqDh39+ABaAAtAyUDNQCNv94swz+sbYAFADNENXrMrg5AOHPAKxATfDuCtbzV37jBtB/QAGiAPibQXr+yq8AYAJ0AArA6y0NgQKkg5/gq2F6/hrADIAJ0AEoABmAIqgBzACE3z8cmQEyAEUwA2x+JzIDZIAMIAT0CpJjH2tVwXr+evwmgZgAHYACUAugCGoAMwDhrwX0NHDYYBmgZSA5bPsWQP/9GRQ3CUSFnsEY0ikUgAJAAfrwcwCidwbFGSADUAwzAOGbL84AGYBSmAEI33xxBsgAlMIMQPjmizNABqAUZgDCN1+cATIApTADEL754gyQASiFGYDwzRePG+Dy7uJtHsP7z+D5+ub9xSeovHp6PMGvzP3EoQAY/AJg/Lg6AxjCDGD8VgZAgFqeAYxgBjB+GQD5cXkGMIQZwPhlAOTH5RnAEGYA45cBkB+XZwBDmAGMXwZAflyeAQxhBjB+GQD5cXkGMIQZwPjtb4AX/Gwc8uM3jOxuAN3Ro/z5BRF6ArojpgDYCBQA48ctIAPgO34ygCU4Axi/DID8mgQOb4vPAJhg3RLWHKA5AEbQyjOA8WsOgPyaAzQHeKAMtQwkfKsWYPxqAcivFlALqAXoRST1tQCht1YtAPnVAoZbwH/5gHQtIW9S/wAAAABJRU5ErkJggg==';
