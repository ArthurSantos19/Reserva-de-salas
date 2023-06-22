export function salvarDados(formSubmit) {
    const dados = JSON.stringify(formSubmit);
    localStorage.setItem('dados', dados);
    console.log('Os dados foram salvos com sucesso no localStorage.');
  }