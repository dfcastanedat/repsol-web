import express from "express";

const app = express()
const port = 3000

app.get('/', (_, res) => {
    res.sendFile('index.html', { root: './front' })
})

app.get('/css/normalize.css', (_, res) => {
    res.sendFile('normalize.css', { root: './front/css' })
})

app.get('/css/estilo.css', (_, res) => {
    res.sendFile('estilo.css', { root: './front/css' })
})

app.get('/Recursos/esbigi.svg', (_, res) => {
    res.sendFile('esbigi.svg', { root: './front/Recursos' })
})
///
app.get('/Recursos/img1.jpg', (_, res) => {
    res.sendFile('img1.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/img2.jpg', (_, res) => {
    res.sendFile('img2.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/img3.jpg', (_, res) => {
    res.sendFile('img3.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/img4.jpg', (_, res) => {
    res.sendFile('img4.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/img5.jpg', (_, res) => {
    res.sendFile('img5.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/img6.jpg', (_, res) => {
    res.sendFile('img6.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/man.jpg', (_, res) => {
    res.sendFile('man.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/mundo.jpg', (_, res) => {
    res.sendFile('mundo.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/mundonasa.jpg', (_, res) => {
    res.sendFile('mundonasa.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/R.png', (_, res) => {
    res.sendFile('R.png', { root: './front/Recursos' })
})

app.get('/Recursos/refineria.jpg', (_, res) => {
    res.sendFile('refineria.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/Reunion.jpg', (_, res) => {
    res.sendFile('Reunion.jpg', { root: './front/Recursos' })
})

app.get('/Recursos/womantestimony.jpg', (_, res) => {
    res.sendFile('womantestimony.jpg', { root: './front/Recursos' })
})

app.listen(port)