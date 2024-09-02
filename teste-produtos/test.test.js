import {expect, test} from "vitest"
import request  from "supertest"
import app from "../index";

test("GET produtos devem ser resgatado com sucesso", async () => {
    const res = await request(app).get("/produto");
    expect(res.status).toBe(200)
})

test("GET produtos devem ser pego por id", async () => {
    const res = await request(app).get("/produto/id/:?id=2");
    expect(res.status).toBe(200);
});

test("POST produto deve ser criado com sucesso", async () => {
    const novoProduto = {
        id: 20,
        nome: "moletom",
        descricao: "Camiseta de algodão",
        preco: 30,
        categoria_id: 2,
        imagem: "camiseta.jpg"
    }
    const res = await request(app)
        .post("/produto/write")
        
    expect(res.status).toBe(200); 
});

test("GET deletar um produto", async () => {
    const res = await request(app).get("/produto/delete/:?delete=1");
    expect(res.status).toBe(200)
})







test("GET clientes devem ser resgatado com sucesso", async () => {
    const res = await request(app).get("/cliente");
    expect(res.status).toBe(200)
})


test("POST para pegar o nome do cliente", async () => {
    const novoProduto = {
        nome: "marcos"

    }
    const res = await request(app)
        .post("/cliente/email")
    expect(res.status).toBe(200); 
});
