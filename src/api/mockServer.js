import express from 'express';

const app = express();

app.use(express.json());

// Корневой GET-запрос
app.get('/', (req, res) => {
  res.send('Mock server is running!');
});

// Обработка POST-запросов на /api/execute
app.post('/api/execute', (req, res) => {
  const { language, code } = req.body;

  // Проверьте, что данные запроса корректные
  if (!language || !code) {
    return res.status(400).json({ status: 'error', error: 'Missing language or code' });
  }

  // Простая мок-логика для ответа
  if (language === 'javascript' && code.includes('console.log')) {
    res.json({ status: 'success', output: 'Hello, world!\n' });
  } else if (language === 'python' && code.includes('print')) {
    res.json({ status: 'success', output: 'Hello, Python!\n' });
  } else {
    res.json({ status: 'error', error: 'SyntaxError: Unexpected token' });
  }
});

// Запуск сервера
app.listen(3001, () => {
  console.log('Mock server running on http://localhost:3001');
});
