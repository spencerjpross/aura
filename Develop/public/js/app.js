console.log('Script successfully loaded!');

async function moodSelect(clicked_id) {
    let moodID = clicked_id;
    console.log(moodID);

    const response = await fetch(`/api/quiz/${moodID}`, {
        method: 'GET',
    })
    
    if (response.ok) {
        document.location.replace('/api/journal');
    } else {
        alert('Please select a mood');
    }
};

// const express =  require('express');
// const app =  express();
// const port = 3002;

// const handlebars = require('express-handlebars');

// app.set('view engine', 'handlebars');

// app.engine('handlebars', handlebars({
//         layoutsDir: `${__dirname}/views/`
// }));

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.render('main', {layout: 'login'});
// });

// app.listen(port, () => {
//     console.log(`App listening to port ${port}`);
// });
