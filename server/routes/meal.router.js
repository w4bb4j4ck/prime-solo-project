const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/recipes', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "recipes" JOIN "ingredients" ON "recipes"."id" = "ingredients"."recipe_id" 
    ORDER BY "recipes"."recipe";`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((error) => {
      console.log('Error in router.get.', error);
      res.sendStatus(500);
    });
});

router.post('/recipes', (req, res) => {
  const queryText = `INSERT INTO "recipes" ("recipe", "directions") VALUES ($1, $2)`;
  pool.query(queryText, [req.body.recipe, req.body.directions])
    .then(() => { res.sendStatus(201); })
    .catch((error) => {
      console.log('Error in router.post.', error);
      res.sendStatus(500);
    });
});

router.get('/groceries', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "list_items" ORDER BY "category_id";`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((error) => {
      console.log('Error in router.get.', error);
      res.sendStatus(500);
    });
});

router.post('/groceries', (req, res) => {
  const queryText = `INSERT INTO "list_items" ("description", "quantity", "unit_id", "category_id") VALUES ($1, $2, $3, $4)`;
  const queryValues = [
    req.body.description,
    req.body.quantity,
    req.body.unit_id,
    req.body.category_id,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((error) => {
      console.log('Error in router.post.', error);
      res.sendStatus(500);
    });
});

router.delete('/groceries/:id', (req, res) => {
  const queryText = 'DELETE FROM "list_items" WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

router.get('/units', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "units";`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((error) => {
      console.log('Error in router.get.', error);
      res.sendStatus(500);
    });
});

router.get('/categories', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "categories";`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((error) => {
      console.log('Error in router.get.', error);
      res.sendStatus(500);
    });
});

module.exports = router;