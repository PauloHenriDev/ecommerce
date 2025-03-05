// tailwind.config.js
module.exports = {
    content: [
      // Adicione os caminhos para os arquivos onde o Tailwind será usado
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['var(--font-poppins)', 'sans-serif'],  // Adicionando a fonte Poppins
        },
      },
    },
    plugins: [],
  }
  