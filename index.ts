//Criação das contas e inclusão no array de contas.

var cCorrente1 = new ContaCorrente(
  '8449-2',
  '2572-0',
  'Conta Corrente',
  '00898575698',
)
var cCorrente2 = new ContaCorrente(
  '5525-6',
  '2572-0',
  'Conta Corrente',
  '00898575698',
)
var cCorrente3 = new ContaCorrente(
  '4517-3',
  '2572-0',
  'Conta Corrente',
  '00898575698',
)

var poupanca1 = new Poupanca('12582-9', '2572-0', 'Poupança', '00898575698')
var poupanca2 = new Poupanca('52598-5', '2572-0', 'Poupança', '00898575698')

var arrContas: Array<Conta> = []

arrContas.push(cCorrente1)
arrContas.push(cCorrente2)
arrContas.push(cCorrente3)
arrContas.push(poupanca1)
arrContas.push(poupanca2)

//Variáveis vindas do documento HTML.

var form = document.getElementById('formulario')!
var table = document.getElementById('tabela');
var select: HTMLInputElement = document.getElementById(
  'select',
) as HTMLInputElement;
var inputNumero: HTMLInputElement = document.getElementById(
  'numeroConta',
) as HTMLInputElement;
var inputValor: HTMLInputElement = document.getElementById(
  'valor',
) as HTMLInputElement;
var exibirSaldo: HTMLInputElement = document.getElementById('saldo') as HTMLInputElement;;
var operacaoSelecionada: string;

//Atribuição do valor selecionado para variável.

const manipuladorSelect = (evento) => {
  evento.preventDefault()
  operacaoSelecionada = evento.target.value
}

select.addEventListener('change', manipuladorSelect)

//

const manipuladorOperacao = (evento) => {
  evento.preventDefault()
  let valor: number = parseFloat(inputValor.value)
  for (const conta of arrContas) {
    if (conta.numero == inputNumero.value) {
      if (operacaoSelecionada == 'Depositar') {
        conta.depositar(valor)
      } else {
        if (operacaoSelecionada == 'Sacar') {
          if (conta.verificarSaldo(valor)) {
            conta.sacar(valor)
          } else {
            window.alert('Saldo Insuficiente')
          }
        }
      }
    } else {
      window.alert('Conta não encontrada')
    }
  }
}

const manipuladorExibicao = (evento) => {
    evento.preventDefault()
    for (const conta of arrContas) {
        if (conta.numero == inputNumero.value) {
            exibirSaldo.innerHTML = `R$ ${conta.saldo}`
        }
    }
}

form.addEventListener('submit', manipuladorOperacao)
form.addEventListener('submit', manipuladorExibicao)
