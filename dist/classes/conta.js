var Conta = /** @class */ (function () {
    function Conta(numero, agencia, tipo, cpf) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._cpf = cpf;
        this._saldo = 0;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Conta.prototype, "agencia", {
        get: function () {
            return this._agencia;
        },
        set: function (agencia) {
            this._agencia = agencia;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Conta.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Conta.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return Conta;
}());
