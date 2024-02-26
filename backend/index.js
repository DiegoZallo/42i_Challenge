const server = require('./src/app.js');
  const port = process.env.PORT || 3001

  server.listen(port, () => {
    console.log(`Server listening at PORT:${port}`); // eslint-disable-line no-console
  });
