async function createNewEntry(e){
    e.preventDefault();

    const response = await fetch(`/`, {
        method: 'GET',

    })
     if (response.ok) {
        document.location.replace('/quiz');
     } else {
        alert('something went wrong!')
     }
};

async function viewAllEntries(e){
   e.preventDefault();

   const response = await fetch('/', {
      method: 'GET'
   })
   if (response.ok) {
      document.location.replace('/entries');
   } else {
      alert('something went wrong!');
   }
}


async function pastWeekEntries(e){
   e.preventDefault();

   const response = await fetch('/week', {
      method: 'GET'
   })
   if (response.ok) {
      document.location.replace('/entries');
   } else {
      alert('something went wrong!');
   }
}

async function pastMonthEntries(e){
   e.preventDefault();

   const response = await fetch('/month', {
      method: 'GET'
   })
   if (response.ok) {
      document.location.replace('/entries');
   } else {
      alert('something went wrong!');
   }
}

document.querySelector('#create-entry').addEventListener('click', createNewEntry);
document.querySelector('#all-entries').addEventListener('click', viewAllEntries);
document.querySelector('#past-week').addEventListener('click', pastWeekEntries);
document.querySelector('#past-month').addEventListener('click', pastMonthEntries);
