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
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(numero, agencia, tipo, cpf) {
        var _this = _super.call(this, numero, agencia, tipo, cpf) || this;
        _this._saldo = 0;
        return _this;
    }
    Poupanca.prototype.depositar = function (valor) {
        this._saldo = this.saldo + valor;
    };
    Poupanca.prototype.sacar = function (valor) {
        this._saldo = this.saldo + valor;
    };
    Poupanca.prototype.verificarSaldo = function (valor) {
        return valor > (this.saldo);
    };
    return Poupanca;
}(Conta));
