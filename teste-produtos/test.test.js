import {expect, test} from "vitest"
import request  from "supertest"
import app from "../index";

test("GET produtos devem ser resgatado com sucesso", async () => {
    const res = await request(app).get("/produto");
    expect(res.status).toBe(200)
})

test("GET produtos devem ser pego por id", async () => {
    const res = await request(app).get("/produto/id/?id=22");
    expect(res.status).toBe(200);
});

test("POST produto deve ser criado com sucesso", async () => {
    const novoProduto = {
        nome: "ferrari",
        descricao: "Camiseta de algodão",
        preco: 30,
        categoria_id: 2,
        imagem: "camiseta.jpg"
    }
    const res = await request(app).post("/produto/write").send(novoProduto)
    expect(res.status).toBe(201); 
});

test("GET deletar um produto", async () => {
const res = await request(app).get(`/produto/delete/:?delete=${4} `);
    expect(res.status).toBe(200)
})

test("Post produto deve ser atualizado com sucesso", async () => {
    const produtoToUpdate = {
        id: 5,
        nome: "moletom updated",
        descricao: "Camiseta de algodão updated",
        preco: 35,
        categoria_id: 2,
        imagem: "camiseta_updated.jpg"
    }
    const res = await request(app).post("/produto/update/?id=5").send(produtoToUpdate)
    expect(res.status).toBe(200); 
});


////////////////  teste - clientes ///////////////////



test("GET cliente devem ser resgatado com sucesso", async () => {
    const res = await request(app).get("/cliente");
    expect(res.status).toBe(200)
})

test("GET cliente devem ser pego por id", async () => {
    const res = await request(app).get("/cliente/id/?id=201");
    expect(res.status).toBe(200);
});

test("POST cliente deve ser criado com sucesso", async () => {
    const novoProduto = {
      id: 201,
      nome: "Marcosss",
      Email: "marcos@gmail.com",
      senha: "123354678"
    }
    const res = await request(app).post("/cliente/write").send(novoProduto)
    expect(res.status).toBe(201); 
});

test("GET deletar um cliente", async () => {
const res = await request(app).get(`/cliente/delete/?delete=${201} `);
    expect(res.status).toBe(200)
})

test("Post cliente deve ser atualizado com sucesso", async () => {
    const produtoToUpdate = {
        id: 2,
        nome: "Marcosss",
        Email: "marcos@gmail.com",
        senha: "123354678"
      }
    const res = await request(app).post("/produto/update/?id=2").send(produtoToUpdate)
    expect(res.status).toBe(200); 
});
