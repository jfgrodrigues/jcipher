# JCipher
Algoritmo simples de criptografia criado por mim (por isso o nome "JCipher", "J", primiera letra do meu nome + cipher) e codificado em javascript. O algoritmo de criptografia é muito simples. Executa uma função recebendo como entrada uma mensagem e uma chave (que não pode ser em branco). a partir daí, seguem-se os seguintes passos:
1. Adiciona-se o tamanho da chave ao final da mensagem;
2. Adiciona-se o valor da chave invertido ao início da mensagem;
3. Aplica-se a função cifrar sobre a mensagem acima em função da chave criptográfica. Tal função troca o valor de cada caractere pelo mesmo em ASCII somado com o número de caracteres da chave (ex.: caractere em ASCII: 68; chave: teste (portanto, 5 caracteres); substitui pelo caractere 73 em ASCII).

E pronto! a mensagem foi criptografada! Para descriptografar, basicamente seguem-se os passos ao contrário, que são:
1. Decifra-se a mensagem usando método de cifrar ao contrário;
2. verifica-se se o inverso da chave forneccida equivale à parte inicial da mensagem; caso não, devolve-se uma mensagem informando que a chave de descriptografia é incompatível com a fornecida;
3. Caso contrário, devolve-se a mensagem decifrada retirando a parte inicial (chave invertida) e final (referente ao tamanho da chave).

É uma maneira muito simples de se trocarmensagens de maneira segura, utilizando menos de 50 linhas de código.
