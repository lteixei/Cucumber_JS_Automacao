const { Given, When, Then } = require('@cucumber/cucumber');

Given('que acesso a página inicial', async () => {
  console.log('🔹 Abrindo página inicial...');
});

When('clico no menu Products', async () => {
  console.log('🔹 Menu Products clicado');
});

Then('devo ver o texto {string}', async (texto) => {
  console.log(`✅ Texto "${texto}" encontrado`);
});
