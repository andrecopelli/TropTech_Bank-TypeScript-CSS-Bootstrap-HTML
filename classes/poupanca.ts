class Poupanca extends Conta{

    constructor(numero:string, agencia:string, tipo: string, cpf:string){
        super(numero, agencia, tipo, cpf);
        this._saldo = 0;
    }

    depositar(valor: number): void {
        this._saldo = this.saldo + valor;
    }
    sacar(valor: number): void {
        this._saldo = this.saldo + valor;
    }
    verificarSaldo(valor: number): boolean  {
        return valor > (this.saldo);
    }
}