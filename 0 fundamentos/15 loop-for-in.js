/*
    Loop "for... in"

    Para percorrer todas as chaves de um objeto, existe esta forma especial de loop: for..in
    É completamente diferente do loop for(;;)

    for (key in object) { // key é o nome da chave em "string"
        // executa para cada chave das propriedades do objeto
    }
*/

let user = {
    name: "Adalberto",
    age: 25,
    isAdmin: true
  };
  
  for (let key in user) {
    // chaves
    console.log(`Chave - ${key}`);  // name, age, isAdmin
    // valores das chaves
    console.log(`Valor - ${user[key]}\n`); // Adalberto, 25, true
  }

  let codes = { 
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
  };

  
  for (let code in codes) {
      console.log(code); // 1, 41, 44, 49
    }

    /* OBS.:
      Uma "propriedade inteira" significa que trata-se de uma string 
      que pode ser convertida para um número inteiro.
  
      Então "49" pode ser convertido para o inteiro 49, 
      assim como as demais propriedades... 
      Caso fosse "49.5" por exemplo já não seria possível.

      As propriedades inteiras são classificadas de forma ordenada, 
      outras aparecem na ordem de criação.

      Por isso a saída do loop for... in no objeto "codes" 
      saiu ordenada: 1, 41, 44, 49

      Já no exemplo do objeto "user" as chaves são listadas em sua ordem de criação
      uma vez que não se tratam de chaves inteiras (name, age, isAdmin).
    */