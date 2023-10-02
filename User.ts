class User {
    private nome: string;
    private email: string;

    constructor(nome:string,email:string) {
        this.nome = nome;
        this.email = email;

        console.log(nome);
    }
}