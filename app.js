import express from "express";

import { createProduct, getProduct, getProducts } from "./database.js";

const app = express();

app.use(express.json())

app.get("/produtos/:id", async (req, res) => {
    const id = req.params.id;
    const produto = await getProduct(id);
    res.send(produto);
});

app.get("/produtos", async (req, res) => {
    const products = await getProducts();
    res.send(products);
})

app.post("/produtos", async (req, res) => {
    const { nome, descricao, quantidade, valor_unitario } = req.body;
    const produto = await createProduct(nome, descricao, quantidade, valor_unitario);
    res.status(201).res.send(produto);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo de errado não está certo!');
})

app.listen(9090, () => {
    console.log('O servidor está rodando na porta 8080');
})