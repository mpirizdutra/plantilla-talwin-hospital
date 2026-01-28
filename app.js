const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use('/js/alpine', express.static(path.join(__dirname, 'node_modules/alpinejs/dist')));
// Servir estáticos (CSS)
app.use(express.static(path.join(__dirname, 'src', 'public')));
// Decile a Express que las vistas están dentro de src/views
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
// El nombre del layout es relativo a la carpeta 'views'
app.set('layout', 'layouts/main');


app.get('/', (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard',
        currentPage: 'dashboard'
    });
});

app.get('/clientes', (req, res) => {
    res.render('clientes', {
        title: 'Clientes',
        currentPage: 'users' // Importante: debe coincidir con el 'id' en el sidebar
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
    console.log('Presiona Ctrl+C para detener');
});