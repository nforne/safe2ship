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
                if (user.length === 1 && bcrypt.compareSync(req.body.password, user[0]['password'])) {
                    req.session.user_id = user[0]['system_id'];
                    
                    let userInfo = {"user": user}
                    getPackagesById(user[0].id)
                        .then((pks) => {
                            userInfo["packages"] = pks;
                        })
                        .catch((err) => res.json({
                            error: err.message
                        }))
    
                    getOrdersById(user[0].id)
                        .then((orders) => {
                            userInfo["orders"] = orders;
                            res.json(userInfo)
                        })
                        .catch((err) => res.json({
                            error: err.message
                        }))

                } else {
                    res.json({error: "incorrect passward"})
                }
                
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.get('/posts', (req, res) => {
        getUsersPosts()
            .then((usersPosts) => {
                const formattedPosts = getPostsByUsers(usersPosts);
                res.json(formattedPosts);
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });






    router.post('/', (req, res) => {

        const {
            first_name,
            last_name,
            email,
            password
        } = req.body;

        getUserByEmail(email)
            .then(user => {

                if (user) {
                    res.json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    return addUser(first_name, last_name, email, password)
                }

            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));

    })

    return router;
};

// const express = require('express');
// const router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
