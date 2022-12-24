const express = require('express');
const mysql = require("mysql");

function createRouter(db) {
  const router = express.Router();
  const owner = 'root';

  // the routes are defined here
  router.post('/add', (req, res, next) => {
    db.query(
      'INSERT INTO users (username, first_name, last_name, password) VALUES (?,?,?,?)',
      [req.body.username, req.body.firstname, req.body.lastname, req.body.password],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/list', function (req, res, next) {
    db.query(
      'SELECT username, first_name, last_name, password FROM storefront.users',
      function(error, results){
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });
  router.post('/login', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    let sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    let values = [username, password];
    sql = mysql.format(sql, values);
    db.query(sql, (error, result) => {
      if (error) {
        throw error;
      }
      if (result.length > 0) {
        // login successful
        res.json({ success: true });
      } else {
        // login failed
        res.json({ success: false });
      }
    });


  });

  router.put('/event/:id', function (req, res, next) {
    db.query(
      'UPDATE users SET first_name=?, last_name=?',
      [req.body.name, req.body.description, new Date(req.body.date), req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/event/:id', function (req, res, next) {
    db.query(
      'DELETE FROM users WHERE id=?',
      [req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;
