let banco = {
    conta: "123456-7",
    saldo: 1000.00,
    tdc: "Corrente",
    agencia: "7890",
    
    consulSaldo: function() {
      return this.saldo;
    },
    
    dep: function(valor) {
      this.saldo += valor;
      return "Depósito de R$" + valor + " realizado. Novo saldo: R$" + this.saldo;
    },
    
    saq: function(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        return "Saque de R$" + valor + " realizado. Novo saldo: R$" + this.saldo;
      } else {
        return " Esse saque não pode ser realizado, saldo insuficiente.";
      }
    },
  
    obterNumC: function() {
      return this.conta;
    }
  };
  
  console.log("Saldo: R$" + banco.consulSaldo());
  console.log(banco.dep(500));
  console.log(banco.saq(200));
  console.log("Número da Conta: " + banco.obterNumC());
  