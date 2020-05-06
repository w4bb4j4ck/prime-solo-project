const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

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
  const queryText = `INSERT INTO "recipes" ("recipe", "directions") VALUES ($1, $2) RETURNING id;`;
  pool.query(queryText, [req.body.recipe, req.body.directions])
    .then((result) => { res.send(result.rows); })
    .catch((error) => {
      console.log('Error in router.post.', error);
      res.sendStatus(500);
    });
});

router.post('/recipes/:id', (req, res) => {
  const length = req.body.length;
  let queryText = 'INSERT INTO "ingredients" ("name", "recipe_id") VALUES';
  for(let i = 0; i < (length - 1); i++){
    let value = ` ('${req.body[i].ingredient}', ${req.params.id}),`;
    queryText += value; 
  }
  queryText += `('${req.body[length - 1].ingredient}', ${req.params.id});`;
  pool.query(queryText)
    .then(() => { res.sendStatus(204); })
    .catch((error) => {
      console.log('Error in router.post.', error);
      res.sendStatus(500);
    });
});

router.get('/groceries', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT "list_items"."id", "list_items"."description", "list_items"."quantity", "list_items"."category_id", 
  "list_items"."unit_id", "units"."unit", "categories"."category" FROM "list_items" JOIN "units" ON "list_items"."unit_id" = 
  "units"."id" JOIN "categories" ON "list_items"."category_id" = "categories"."id" ORDER BY "categories"."category";`;
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

router.put('/groceries', (req, res) => {
  const queryText = `UPDATE "list_items" SET "description" = $1, "quantity" = $2, "unit_id" = $3, "category_id" = $4 
  WHERE "id" = $5;`;
  const queryValues = [
    req.body.description,
    req.body.quantity,
    req.body.unit_id,
    req.body.category_id,
    req.body.id
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(204); })
    .catch((error) => {
      console.log('Error in router.put.', error);
      res.sendStatus(500);
    })
})

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