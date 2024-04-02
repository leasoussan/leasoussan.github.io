import React, { useEffect, useState }  from 'react';
import moment from 'moment-timezone';


const TimeAndDate = ({ timezone }) => {
// console.log(moment.tz.names());
const [ date, SetDate] = useState(new Date())

useEffect(()=>{
const timer = setInterval(()=>{
    SetDate(new Date());
}, 1000);

return () => clearInterval(timer);
},[]);

const formattedDate = date.toLocaleDateString();
const formattedTime = date.toLocaleTimeString();
// const formattedDate = moment(date).tz(timezone).format('YYYY-MM-DD');
//   const formattedTime = moment(date).tz(timezone).format('h:mm:ss A');

   return (
    <div className='time_date_style'>
      <p> {formattedDate}</p>
      <p> {formattedTime}</p>
    </div>
  );
}

// const TimeAndDate = ({ timezone, date }) => {
//     let formattedDate;
//     let formattedTime;
//     try {
//       formattedDate = moment(date).tz(timezone).format('YYYY-MM-DD');
//       formattedTime = moment(date).tz(timezone).format('h:mm:ss A');
//     } catch (error) {
//       console.error('Error occurred while formatting date and time:', error);
//       formattedDate = '';
//       formattedTime = '';
//     }
  
//     return (
//       <div>
//         <div>a{formattedDate}</div>
//         <div>{formattedTime}</div>
//       </div>
//     );
//   };

export default TimeAndDate