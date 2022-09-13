const router = require('express').Router();
const User = require('../../models/User');








//contain the auth routes
router.get('/login', (req, res) => {

    res.render("login")
});

//login page

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
    
        if (!userData) {
          res.status(400).render('login', {
              error: "Email or password are incorrect, please try again"
          })
          return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
            res.status(400).render('login', {
                error: "Email or password are incorrect, please try again"
            })
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.redirect('/')
        });
    
      } catch (err) {
        res.status(400).render('login', {
            error: "Email or password are incorrect, please try again"
        })
    }
})

//post login (for user to login)

//signup page

//post (for user to sign up/register)
module.exports = router;