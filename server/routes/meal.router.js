const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/recipes', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM recipes JOIN "ingredients" ON "recipes"."id" = "ingredients"."recipe_id" 
    ORDER BY "recipes"."recipe";`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;