// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment

//ATHLET 1
const numRaces1 = data.response.data.NM372.races.length
const date1 = new Date(data.response.data.NM372.races[numRaces1-1].date);
const day1 = date1.getDate();
const month1 = MONTHS[date1.getMonth()];
const year1 = date1.getFullYear();

//FORMATING LABS TOTAL TIME

const time1 = data.response.data.NM372.races[numRaces1-1].time
let labsTime1 = 0;

for (let i = 0;i<4;i++) {
    labsTime1 += time1[i]
}

const labsHours1 = parseInt(labsTime1/60);
const labsMinutes1 = labsTime1 % 60;

//ADDING ELEMENTS AND TIME
const athlet1 = document.querySelector('[data-athlete="NM372"]');
athlet1.innerHTML = `
<h2>NM372</h2>
<dl>
    <dt>Athlete:</dt>
    <dd>${data.response.data.NM372.firstName} ${data.response.data.NM372.surname}</dd>

    <dt>Total Races:</dt>
    <dd>${numRaces1}</dd>

    <dt>Event Date (Latest):</dt>
    <dd>${day1} ${month1} ${year1}</dd>

    <dt>Total Time (Latest):</dt>
    <dd>${(labsHours1.toString()).padStart(2,'0')}:${labsMinutes1}</dd>
</dl>`

//ATHLET 2
const numRaces2 = data.response.data.SV782.races.length
const date2 = new Date(data.response.data.SV782.races[numRaces2-1].date);
const day2 = date2.getDate();
const month2 = MONTHS[date2.getMonth()];
const year2 = date2.getFullYear();

//FORMATING LABS TOTAL TIME

const time2 = data.response.data.SV782.races[numRaces2-1].time
let labsTime2 = 0;

for (let i = 0;i<4;i++) {
    labsTime2 += time2[i]
}

const labsHours2 = parseInt(labsTime2/60);
const labsMinutes2 = labsTime2 % 60;

//ADDING ELEMENTS AND UPDATING TEXT

const athlet2 = document.querySelector('[data-athlete="SV782"]');
athlet2.innerHTML = `
<h2>SV782</h2>
<dl>
    <dt>Athlete:</dt>
    <dd>${data.response.data.SV782.firstName} ${data.response.data.SV782.surname}</dd>

    <dt>Total Races:</dt>
    <dd>${data.response.data.SV782.races.length}</dd>

    <dt>Event Date (Latest):</dt>
    <dd>${day2} ${month2} ${year2}</dd>

    <dt>Total Time (Latest):</dt>
    <dd>${(labsHours2.toString()).padStart(2,'0')}:${labsMinutes2}</dd>
</dl>`