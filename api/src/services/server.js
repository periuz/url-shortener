const express = require('express');
const sequelize = require('../config/database');
const routes = require('../routes');

const app = express();

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 10000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
