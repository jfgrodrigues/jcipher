var criptografar = function (msgPlana, chave){
	msgPlana += chave.length;
	msgNova = inverter(chave)+msgPlana;
	return cifrar(msgNova, chave);
}

var inverter = function (stringInicial){
	var stringInvertida = "";
	for (i=stringInicial.length; i>=0; i--){
		stringInvertida += stringInicial.charAt(i);
	}
	return stringInvertida;
}

var cifrar = function(mensagem, chave){
	var msgCifrada = "";
	for (i=0; i<mensagem.length; i++){
		msgCifrada += String.fromCharCode(mensagem.charCodeAt(i)+chave.length);
	}
	return msgCifrada;
}

var decifrar = function (mensagemCriptografada, chave){
	var msgPlana = "";
	for (i=0; i<mensagemCriptografada.length; i++){
		msgPlana += String.fromCharCode(mensagemCriptografada.charCodeAt(i)-chave.length);
	}
	return msgPlana
}

var descriptografar = function (mensagem, chave){
	var msgDecifrada = decifrar(mensagem, chave);
	var verifChave = "";
	var corte;
	if (chave.length < 10){
		corte = mensagem.length-1;
	} else if (chave.length<100){
		corte = mensagem.length-2;
	}
	for (i=0; i<chave.length; i++){
		verifChave += msgDecifrada.charAt(i);
	}
	if ((verifChave == inverter(chave)) && (parseInt(msgDecifrada.slice(corte)))) {
		return msgDecifrada.slice(chave.length, corte);
	} else { 
		alert('chave de criptografia incompativel');
		return "chave de criptografia incompativel";
	}
}