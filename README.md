# JCipher

Algoritmo simples de criptografia (encriptar / decriptar) criado por mim (por isso o nome "JCipher", "J", primeira letra do meu nome + "Cipher") e codificado em javascript. O funcionamento (tanto de encriptação quanto decriptação) é baseado na mensagem e uma chave. Abaixo descrevo ambos os algoritmos de forma resumida:

##Algortimo de encriptação:

1. Adiciona-se o tamanho da chave ao final da mensagem; 
2. Adiciona-se o valor da chave invertido ao início da mensagem;
3. Aplica-se a função "cifrar" sobre o inverso da mensagem modificada cifrada com a chave criptográfica como parâmetro de entrada (em ambas as cifragens). Tal função (cifrar(msg, chave)) troca o valor de cada caractere pelo mesmo em ASCII somado com o número de caracteres da chave (ex.: caractere em ASCII: 68; chave: teste (portanto, 5 caracteres); substitui pelo caractere 73 em ASCII).

E pronto! a mensagem está criptografada! Para descriptografar, usa-se basicamente um algoritmo com os passos ao contrário do descrito acima, descrito a seguir:

##Algoritmo de decriptação:

1. Decifra-se o inverso da decifragem da mensagem criptografada usando a função "decifrar(msg, chave)", que funciona de maneira inversa à "cifrar";
2. verifica-se se o inverso da chave forneccida equivale à parte inicial da mensagem; caso não, manda-se um "alert" informando que a chave de descriptografia é incompatível com a fornecida e devolve-se a mensagem original;
3. Caso contrário, devolve-se a mensagem decifrada retirando a parte inicial (chave invertida) e final (referente ao tamanho da chave).

Note-se que se trata de um algoritmo de chave única, usada nos dois sentidos do processo e de passos e funções muito simples.

É uma maneira muito simples de se trocarmensagens de maneira segura, utilizando menos de 50 linhas de código.
