# API Desenvolvida para fins didáticos 

**API CRUD feito em Node, utilizando Array de Objetos. Para a consolidação de estudos do capítulo 03 do livro Node Essencial**

# Funcionalidades

* **Get Users**
```
> GET http://localhost:3333/users/
- Lista todos os usuarios cadastrados no Array.
```

* **Post new User**
```
> POST http://localhost:3333/users/
> Body: 
{
	"name": "User Name",
	"email": "email@email.com.br"
};

```
* **Update em um Usuario**
```
> PUT http://localhost:3333/user/id
> Body: 
{
	"name": "User Name",
	"email": "email@email.com.br"
};

```

* **Deletar um Usuario**
```
> DELETE http://localhost:3333/user/{Id User}
- Deleta Usuario do Array pelo ID.
```

# Executando o servidor da API

Na raiz deste projeto, rode:
```
> npm install
> npm run dev

```
 # o servidor irá escutar a porta 3333 por padrão
```
