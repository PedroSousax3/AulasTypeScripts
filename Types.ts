//boolean(true, false)
let isNull:boolean = true;

//string('', ``, "")
let isString:string = "Uma String";

//number(int, float, hexadecimal, binary)
let isChar:number = 100;

//array (type[], Array<type>)
let isArray:number[] = [ 0, 1, 2, 3 ];

//tuple - Um array que já deve ser explicitado com a quantidade de valores e os tipos que receberá
let isTuple:[number, string] = [ 0, "Pedro" ];
let isTuple2:[number, number, number] = [ 0, 1, 2 ];

//enum
enum Colors {
    white = '#fff',
    black = '#000'
}
console.log(Colors.white);
//any - qualquer coisa noImplicitAny
let coisa:any = [ 0, 1, 2 ];

//void vazio
function logger() : void {
    console.log("");
}

//null | undefined
type isNull = string | null;
type isUndefined = string | undefined;

//never 
function error():never {
    throw new Error("error");
}

//object - Qualque coisa que não é um tipo primitivo
let isObject:Object = {
    nome : "Pedro"
}

//Type Inference
let isInference = "String";

//Union
function cacatenar1(valor1:string | number, valor2:string | number) : string {
    return valor1 as string + valor2 as string;
}
//Type Alias (apelido)
type sitringNumeber = string | number;
function cacatenar2(valor1:sitringNumeber, valor2:sitringNumeber) : string {
    return valor1 as string + valor2 as string;
}

type Plataform = 'Windows' | 'Linux' | 'Mac OS' | 'Android';
function retornarPlataforma(plataforma:Plataform) : Plataform {
    return plataforma;
}
// retornarPlataforma('Ios'); //Error

//Tipo Composto
type Pessoa = {
    id:number,
    nome:string,
    email?:string
}
let pedro:Pessoa = {
    id: 1,
    nome: "Pedro",
    email: "pedro.sousa@email.com"
}

type Usuario = {
    usuario:string,
    senha:string,
    nivel:number
}
let usuario:Usuario = {
    usuario : "pedro",
    senha: "123",
    nivel: 50
}

//inertsection 
type Player = Pessoa & Usuario;
let player1:Player = {
    id: 1,
    email: "pedro.sousa@email.com",
    nome : "Pedro",
    usuario : "pedro",
    senha : "123",
    nivel : 50
};

//Classe (Objeto)

class PessoaModels {
    private nome:string;
    protected idade:number;//Só pode ser lida ou alterada dentro da class ou das subsclass

    get getNome ():string {
        return this.nome;
    }
    set setNome(nome:string) {
        this.nome = nome;
    }

    constructor (nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }

    mostrarDados () : void {
        console.log(this);
    }
}

class PessoaFisicaModels extends PessoaModels {
    private cpf:string; //Não pode alteara e nem ler
    readonly nascimento:Date; //Pode ler mais não pode alterar

    constructor (nome:string, idade:number, cpf:string, nascimento:Date) {
        super(nome, idade);
        this.cpf = cpf;
        this.nascimento = nascimento;
    }

    mostrarDados () : void {
        console.log(this);
    }
}

const pessoa:PessoaModels = new PessoaModels("Pedro Sousa", 19);
pessoa.mostrarDados();

const pf:PessoaFisicaModels = new PessoaFisicaModels("Pedro Sousa", 19, "123.456.789-12", new Date());
pf.mostrarDados();


//Não é possivel criar intanciala mas é possivel utiliza-lá para criar outras classe (herença)
abstract class PessoaAbstract {
    nome:string;
    idade:number;

    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }
}

// new PessoaAbstract("Pedro", 19);//Erro de Compilação
class PessoaAbstractModels extends PessoaAbstract{
    constructor (nome:string, idade:number) {
        super(nome, idade);
    }

    mostrarDados() {
        console.log(this);
    }
}

let pessoaAbstractModels:PessoaAbstractModels = new PessoaAbstractModels("Pedro", 19);
pessoaAbstractModels.mostrarDados();

interface IPessoa {
    nome:string;
    idade:number;
}

interface PessoaFisica extends IPessoa {
    
}

class Aluno implements PessoaFisica {
    nome:string;
    idade:number;

    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }

    mostrar () {
        console.log(this.nome + "tem " + this.idade);
    }
}

let iPessoa:PessoaFisica = {
    nome: "Pedro",
    idade: 19
}

let aluno = new Aluno("Pedro O. Sousa", 19);
aluno.mostrar();


function instanciar<Type>(obj:Type): Type {
    return obj;
}

console.log(instanciar("OK"));