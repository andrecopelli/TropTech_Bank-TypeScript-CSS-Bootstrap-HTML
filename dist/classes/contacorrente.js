var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, agencia, tipo, cpf) {
        var _this = _super.call(this, numero, agencia, tipo, cpf) || this;
        _this._saldo = 0;
        _this._limite = 100;
        return _this;
    }
    Object.defineProperty(ContaCorrente.prototype, "limite", {
        get: function () {
            return this._limite;
        },
        set: function (limite) {
            this._limite = limite;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    ContaCorrente.prototype.depositar = function (valor) {
        this._saldo = this.saldo + valor;
    };
    ContaCorrente.prototype.sacar = function (valor) {
        this._saldo = this.saldo + this.limite + valor;
    };
    ContaCorrente.prototype.verificarSaldo = function (valor) {
        return valor > (this.saldo + this.limite);
    };
    return ContaCorrente;
}(Conta));
