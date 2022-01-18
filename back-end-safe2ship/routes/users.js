const express = require('express');
const router = express.Router();
const { getPostsByUsers } = require('../helpers/dataHelpers');


// NOTES
// ## Routes userGET
//     -  query the two tables and userdataHelper(customerTableResponse, shipperTableResponse)
//     -  On login: with userGetDataHelper, {user: get/ user = res.data, packages: get/ packages by uid = res.data}
//         - set session cookie / optional authentication is sufficient 
//         - get/ user
//         - get/ packages by uid
//         - get/ orders by uid || not ===> // for shippers only (depends on user status)
//         - const [state, setState] = useState({user: {...user}, packages: [...packages], orders: [...orders] || null})


module.exports = ({
    getUserByEmail,
    getPackagesById,
    getOrdersById
}) => {
    /* GET users listing. */
    router.get('/user', (req, res) => {
        getUserByEmail(req.body.email)
            .then((user) => {
                if (user.length != 0 && user[0].satus != 'deleted' && bcrypt.compareSync(req.body.password, user[0]['password'])) {
                    req.session.user_id = user[0]['system_id'];
                    
                    let userInfo = {"user": user}

    // ---------------------------------------------------------------------

                    Promise.all([
                        getPackagesById(user[0].id),
                        getOrdersById(user[0].id)
                    ]).then((all) => {
                        userInfo["packages"] = all[0];
                        userInfo["orders"] = all[1];
                        res.json(userInfo)
                    })

    // ---------------------------------------------------------------------
                    // getPackagesById(user[0].id)
                    //     .then((pkgs) => {
                    //         userInfo["packages"] = pkgs;
                    //     })
                    //     .catch((err) => res.json({
                    //         error: err.message
                    //     }))
    
                    // getOrdersById(user[0].id)
                    //     .then((orders) => {
                    //         userInfo["orders"] = orders;
                    //         res.json(userInfo)
                    //     })
                    //     .catch((err) => res.json({
                    //         error: err.message
                    //     }))

                } else if (user.length === 0 || user[0].satus != 'deleted'){
                    res.json({error: "The requested account does not exist. Please go to Sign-Up!", code: "xac"})
                } else {
                    res.json({error: "incorrect passward", code: "xpw"})
                }
                
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });


// NOTES
// ## Routes userPOST
// -  On SignUp: with userPostDataHelper, {user: req.body, } // forms managed by controlled elements
//     - set session cookie
//     - post/ user (depends on req.params.status)


    router.post('/user', (req, res) => {

        const { email } = req.body;

        getUserByEmail(email)
            .then(user => {
                if (user.length != 0) {
                    res.json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    return postUser(req.body)
                }
            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));

    })

    router.patch('/user/update', (req, res) => {
        const { email } = req.body;
            updateUser(req.body)
                .then(newUser => res.json(newUser))
                .catch(err => {
                    res.json({error: err.message})
                })     
    });
    
    router.put('/user/upgrade', (req, res) => {
        const { email } = req.body;
        getUserByEmail(email)
            .then(user => 
                upgradeUser(req.body)
                    .then(newUser => {
                        deleteUserByStatus(req.body); // soft delete
                        res.json(newUser);
                    })
                    .catch(err => {
                        res.json({error: err.message})
                    })
            ) 
            .catch(err => {
                res.json({error: err.message})
            }) 
    });
    
    router.delete('/user/delete', (req, res) => {
        deleteUserByStatus(req.body) // soft delete
            .catch(err => {
                res.json({error: err.message})
            }) 
    });

    return router;
};

// const express = require('express');
// const router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
