abstract class Conta {
    protected _numero: string;
    protected _agencia: string;
    protected _tipo: string;
    protected _cpf: string;
    protected _saldo: number;


    constructor(numero:string, agencia:string, tipo: string, cpf:string){
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._cpf = cpf;
        this._saldo = 0;
    }

    set numero (numero:string) {
        this._numero = numero;
    };

    get numero() {
        return this._numero;
    };

    set agencia (agencia:string) {
        this._agencia = agencia;
    };

    get agencia() {
        return this._agencia;
    };

    set tipo (tipo:string) {
        this._tipo = tipo;
    };

    get tipo() {
        return this._tipo;
    };

    set cpf (cpf:string) {
        this._cpf = cpf;
    };

    get cpf() {
        return this._cpf;
    };

    get saldo() {
        return this._saldo;
    };

    abstract verificarSaldo(valor: number): boolean;

    abstract depositar(valor: number):void;

    abstract sacar(valor: number):void;
}