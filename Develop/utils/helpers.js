module.exports = {

    // generates a pie chart with recieved mood data
    gen_chart: (data) => {
        let ag = f = s = b = ax = h = e = 0;

        for (let i = 0; i < data.length; i++) {

            // checks which mood the piece of data has
            switch (data[i].mood_name) {
                case 'Angry':
                    ag++;
                    break;
                case 'Frustrated': 
                    f++;
                    break;
                case 'Sad':
                    s++;
                    break;
                case 'Blah':
                    b++
                    break;
                case 'Anxious':
                    ax++;
                    break;
                case 'Happy':
                    h++;
                    break;
                case 'Excited':
                    e++;
                    break; 
            }
        }

        // generates using billboard.js
        var chart = bb.generate({
            bindto: "#chart",
            title: {
                text: "Past 30 days"
            },
            size: {
                height: 360,
                width: 720
            },
            data: {
                type: "pie",
                columns: [
                    ["angry", ag,],
                    ["frustrated", f,],
                    ["sad", s,],
                    ["blah", b,],
                    ["anxious", ax,],
                    ["happy", h,],
                    ["excited", e,],    
                ],
                colors: {
                    angry: "#f87171",
                    frustrated: "#ca8a04",
                    sad: "#facc15",
                    blah: "gray",
                    anxious: "teal",
                    happy: "#34d399",
                    excited: "green",
                }
            }
        });
    },

    // generates a calendar with the users monthly mood data
    gen_calendar: (data) => {
        const calendar = document.getElementById('calendar');
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // data for testing because this is a work in progress
        data = [{
            date: "10/8/2022",
            mood_id: "1",
        }, 
        {
            date: "10/12/2022",
            mood_id: "3",
        },
        {
            date: "10/20/2022",
            mood_id: "4",
        },
        {
            date: "10/24/2022",
            mood_id: "6"
        }]
            const dt = new Date();
            const month = dt.getMonth();
            const year = dt.getFullYear();

            // finds the first day of the month as well as how many days in the month
            const firstDay = new Date(year, month, 1);
            const daysPerMonth = new Date(year, month + 1, 0).getDate();

            const dateString = firstDay.toLocaleDateString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
         });
            const dayPadding = weekdays.indexOf(dateString.split(', ')[0]);

            // creates the classes for each individual box per day 
        for(let i = 1; i <= dayPadding + daysPerMonth; i++) {
            const daySquare = document.createElement('div');
            daySquare.classList.add('day');
            daySquare.classList.add('border-black');
            daySquare.classList.add('border-b');
            daySquare.classList.add('border-r');
                
            for (let v = 0; v <= data.length; v++) {
                
                // work in progress to check each day through the loop and assign a mood related
                // background color to them
                if (data[v].date == (month + 1) + "/" + (i - dayPadding) + "/" + year) {
                switch (data.mood_id) {
                    case "1": 
                        daySquare.classList.add('bg-green-500')
                        break;
                    case "2":
                        daySquare.classList.add('bg-emerald-400')
                        break;
                    case "3":
                        daySquare.classList.add('bg-teal-300')
                        break;
                    case "4":
                        daySquare.classList.add('bg-gray-300')
                        break;
                    case "5":
                        daySquare.classList.add('bg-yellow-400')
                        break;
                    case "6":
                        daySquare.classList.add('bg-yellow-600')
                        break;
                    case "7":
                        daySquare.classList.add('bg-red-400')
                        break;
                    default:
                        break;
                }
              }
            }
        
            // numbers each boxes taking in to count the previously determined "padding days"
            // to start the month on the correct day
            if (i > dayPadding) {
            daySquare.innerText = i - dayPadding;

            }
            // constructs each square appending them on to each other
            calendar.appendChild(daySquare);
        }
    },
};