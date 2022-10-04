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