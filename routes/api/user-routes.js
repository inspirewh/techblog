const router = require('express').Router();
const { User } = require('../../models/index-model');

//create user
router.post('/user', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        password: req.body.password,
      });;
        // Save the user in the session
        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//post login request (for user to login) - action end point for login
//login the user
    router.post('/login', async (req, res) => {
        try {
          const userData = await User.findOne({ where: { username: req.body.username } });
      
          if (!userData) {
            res.status(400).json({ message: 'Incorrect credentials: Please check your email or password and try again' })
            return;
          }
      
          const validPassword = await userData.checkPassword(req.body.password);
      
          if (!validPassword) {
            res.status(400).json({ message: 'Incorrect credentials: Please check your email or password and try again' })
            return;
          }
      
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.name = userData.username;  
            req.session.loggedIn = true;
            
            res.json({ user: userData, message: 'You are now logged in!' });
          });
      
        } catch (err) {
          res.status(500).json(err);
        }
    });

    //logout user & delete all items in session
    router.post('/logout', (req, res) => {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    });

    module.exports = router;