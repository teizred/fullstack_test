require('dotenv').config();

const express = require('express');
const { neon } = require('@neondatabase/serverless');

const app = express();
const PORT = process.env.PORT || 4242;
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', async (_, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`SELECT * FROM patissieres`;
  res.json(response);
});

app.delete('/', async (req, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`DELETE FROM patissieres WHERE id = ${req.body.id}`;
  res.json(response);
});

app.put('/', async (req, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`UPDATE patissieres SET name = ${req.body.name} WHERE id = ${req.body.id}`;
  res.json(response);

});

app.post('/', async (req, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`INSERT INTO patissieres (name) VALUES (${req.body.name})`;
  res.json(response);
});

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);
});