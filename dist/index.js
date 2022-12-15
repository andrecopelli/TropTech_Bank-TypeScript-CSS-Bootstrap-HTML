//Criação das contas e inclusão no array de contas.
var cCorrente1 = new ContaCorrente('8449-2', '2572-0', 'Conta Corrente', '00898575698');
var cCorrente2 = new ContaCorrente('5525-6', '2572-0', 'Conta Corrente', '00898575698');
var cCorrente3 = new ContaCorrente('4517-3', '2572-0', 'Conta Corrente', '00898575698');
var poupanca1 = new Poupanca('12582-9', '2572-0', 'Poupança', '00898575698');
var poupanca2 = new Poupanca('52598-5', '2572-0', 'Poupança', '00898575698');
var arrContas = [];
arrContas.push(cCorrente1);
arrContas.push(cCorrente2);
arrContas.push(cCorrente3);
arrContas.push(poupanca1);
arrContas.push(poupanca2);
//Variáveis vindas do documento HTML.
var form = document.getElementById('formulario');
var table = document.getElementById('tabela');
var select = document.getElementById('select');
var inputNumero = document.getElementById('numeroConta');
var inputValor = document.getElementById('valor');
var exibirSaldo = document.getElementById('saldo');
;
var operacaoSelecionada;
//Atribuição do valor selecionado para variável.
var manipuladorSelect = function (evento) {
    evento.preventDefault();
    operacaoSelecionada = evento.target.value;
};
select.addEventListener('change', manipuladorSelect);
//
var manipuladorOperacao = function (evento) {
    evento.preventDefault();
    var valor = parseFloat(inputValor.value);
    for (var _i = 0, arrContas_1 = arrContas; _i < arrContas_1.length; _i++) {
        var conta = arrContas_1[_i];
        if (conta.numero == inputNumero.value) {
            if (operacaoSelecionada == 'Depositar') {
                conta.depositar(valor);
            }
            else {
                if (operacaoSelecionada == 'Sacar') {
                    if (conta.verificarSaldo(valor)) {
                        conta.sacar(valor);
                    }
                    else {
                        window.alert('Saldo Insuficiente');
                    }
                }
            }
        }
        else {
            window.alert('Conta não encontrada');
        }
    }
};
var manipuladorExibicao = function (evento) {
    evento.preventDefault();
    for (var _i = 0, arrContas_2 = arrContas; _i < arrContas_2.length; _i++) {
        var conta = arrContas_2[_i];
        if (conta.numero == inputNumero.value) {
            exibirSaldo.innerHTML = "R$ ".concat(conta.saldo);
        }
    }
};
form.addEventListener('submit', manipuladorOperacao);
form.addEventListener('submit', manipuladorExibicao);
