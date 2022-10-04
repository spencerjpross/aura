<<<<<<< Updated upstream
const express =  require('express');
const app =  express();
const port = 3002;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
        layoutsDir: `${__dirname}/views/`
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', {layout: 'login'});
});

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});
=======
console.log("Script was successfully loaded!");

function moodSelect(clicked_id){
    let moodID = clicked_id;
    console.log(moodID);

    switch(mood){
        case '7':
            document.getElementById('suggestionText').innerHTML = "You have been angry today!";
            console.log('Angry was selected');
            break;
        case '6':
            document.getElementById('suggestionText').innerHTML = "We all get fustrated at times.";
            console.log('Fustrated was selected');
            break;
        case '5':
            document.getElementById('suggestionText').innerHTML = "Dont be sad today!";
            console.log('Sad was selected');
            break;
        case '4':
            document.getElementById('suggestionText').innerHTML = "Not feeling likke anything today.";
            console.log('Blah was selected');
            break;
        case '3':
            document.getElementById('suggestionText').innerHTML = "Anxious you are, but calm you must remain!";
            console.log('Anxious was selected');
            break;
        case '2':
            document.getElementById('suggestionText').innerHTML = "Today brought happiness";
            console.log('Happy was selected');
            break;
        case '1':
            document.getElementById('suggestionText').innerHTML = "Excited today you were!";
            console.log('Excited was selected');
    };
};
>>>>>>> Stashed changes
