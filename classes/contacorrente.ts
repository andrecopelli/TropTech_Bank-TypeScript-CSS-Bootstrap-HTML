class ContaCorrente extends Conta{

    private _limite: number;

    constructor(numero:string, agencia:string, tipo: string, cpf:string){
        super(numero, agencia, tipo, cpf);
        this._saldo = 0;
        this._limite = 100;
    }

    set limite (limite:number) {
        this._limite = limite;
    };

    get limite() {
        return this._limite;
    };

    depositar(valor: number): void {
        this._saldo = this.saldo + valor;
    }
    sacar(valor: number): void {
        this._saldo = this.saldo + this.limite + valor;
    }

    verificarSaldo(valor: number): boolean  {
        return valor > (this.saldo + this.limite);
    }
}