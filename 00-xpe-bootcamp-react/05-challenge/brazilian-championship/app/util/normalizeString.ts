const normalizeString = (str: string): string => {
	return str
		.toLowerCase() // Converte para minúsculas
		.normalize('NFD') // Normaliza a string separando os acentos das letras
		.replace(/[\u0300-\u036f]/g, '') // Remove os acentos
		.replace(/[^a-z0-9]/gi, '_') // Substitui tudo que não é letra ou número por sublinhados
		.replace(/_+/g, '_'); // Substitui múltiplos sublinhados por um único sublinhado
};

export default normalizeString;
