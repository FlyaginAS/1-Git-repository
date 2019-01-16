'use strict';
function highLight() {
      const rows = document.querySelectorAll('table tbody tr');
      console.log(rows);

      for(let tr of rows) {
          const [,{textContent: age}, {textContent: gender}, statusCell] = tr.querySelectorAll('td');
          //console.log(statusCell,gender,ageCell);
          const status = statusCell.dataset.available;
          console.log(gender);
          Number(age) < 18
            ? tr.style. textDecoration= 'line-through'
              : null;
          switch (gender) {
              case 'm' : {
                  tr.classList.add('male');
                  break;
              }
              case 'f' : {
                  tr.classList.add('female');
                  break;
              }
          }

          switch (status) {
              case 'true' : {
                  tr.classList.add('available');
                  break;
              }
              case 'false' : {
                  tr.classList.add('unavailable');
                  break;
              }
              default : {
                  tr.setAttribute('hidden', true);
              }
          }
      }
}


highLight();
