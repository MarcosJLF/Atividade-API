import {expect, test} from "vitest"
import request  from "supertest"
import app from "../index";

test("GET Todos produtos devem ser resgatado com sucesso", async () => {
    const res = await request(app).get("/produto");
    expect(res.status).toBe(200)
})

/// teste - erro // 

test("GET (erro) Todos produtos devem ser resgatado com sucesso ", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(404)
})

test("GET produto deve ser pego por id", async () => {
    const res = await request(app).get("/produto/id/?id=22");
    expect(res.status).toBe(200);
});

       /// teste de erro ///

test("GET (erro) produto deve ser pego por id", async () => {
    const res = await request(app).get("/produto/id/?id=");
    expect(res.status).toBe(404);
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

 //// teste de erro /// 

test("POST (erro) produto deve ser criado com sucesso", async () => {
    const novoProduto = {
    }
    const res = await request(app).post("/produto/write").send(novoProduto)
    expect(res.status).toBe(201); 
});



test("GET deletar um produto", async () => {
const res = await request(app).get(`/produto/delete/:?delete=${3} `);
    expect(res.status).toBe(200)
})


//// teste de erro /// 

test("GET (erro) deletar um produto", async () => {
    const res = await request(app).get(`/produto/delete/:?delete= `);
        expect(res.status).toBe(400)
    })


test("Post produto deve ser atualizado com sucesso", async () => {
    const produtoToUpdate = {
        id: 2,
        nome: "moletom updated",
        descricao: "Camiseta de algodão updated",
        preco: 35,
        categoria_id: 2,
        imagem: "camiseta_updated.jpg"
    }
    const res = await request(app).post("/produto/update/?id=2").send(produtoToUpdate)
    expect(res.status).toBe(200); 
});


///// teste - erro ///

test("Post (erro) produto deve ser atualizado com sucesso", async () => {
    const produtoToUpdate = {
    }
    const res = await request(app).post("/produto/update/?id=").send(produtoToUpdate)
    expect(res.status).toBe(400); 
});




////////////////  teste - clientes ///////////////////



test("GET cliente devem ser resgatado com sucesso", async () => {
    const res = await request(app).get("/cliente");
    expect(res.status).toBe(200)
})

//// teste - erro /// 

test("GET (erro) cliente devem ser resgatado com sucesso", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(404)
})


test("GET cliente devem ser pego por id", async () => {
    const res = await request(app).get("/cliente/id/?id=201");
    expect(res.status).toBe(200);
});

/// teste - erro ///

test("GET (erro) cliente devem ser pego por id", async () => {
    const res = await request(app).get("/cliente/id/?id=");
    expect(res.status).toBe(404);
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

//// teste - erro /// 

test("POST (erro) cliente deve ser criado com sucesso", async () => {
    const novoProduto = {
      id: 201,
      nome:"",
      Email: "marcos@gmail.com",
      senha: "123354678"
    }
    const res = await request(app).post("/cliente/write").send(novoProduto)
    expect(res.status).toBe(400); 
});

test("GET deletar um cliente", async () => {
const res = await request(app).get(`/cliente/delete/?delete=${201} `);
    expect(res.status).toBe(200)
})

//// teste - erro /// 

test("GET (erro) deletar um cliente", async () => {
    const res = await request(app).get(`/cliente/delete/?delete= `);
        expect(res.status).toBe(400)
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

//// teste - erro ///

test("Post (erro) cliente deve ser atualizado com sucesso", async () => {
    const produtoToUpdate = {
        id: null,
        nome: "asd",
        Email: "marcos@gmail.com",
        senha: "123354678"
      }
    const res = await request(app).post("/produto/update/?id=10").send(produtoToUpdate)
    expect(res.status).toBe(404); 
});
