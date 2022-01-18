module.exports = (db) => {
 
// --------------'/api/users'---------------------

    // -----------userGET---------------
    const getUserByEmail = (email) => {

        const table = (userTable) => {
         return   {
                text: `SELECT * FROM ${userTable} WHERE email = $1` ,
                values: [email]
            }
        }

        return db.query(queryVars('shippers'))
            .then(result1 => {
                if (result1.rows.length != 0) {
                    return result1.rows;
                } else {
                    return db.query(queryVars('customers'))
                    .then(result2 => {
                            if (result2.rows.length != 0) {
                                return result2.rows;
                            } else {
                                return [];                                
                            };
                        })
                    .catch((err) => err);
                }
            })
            .catch((err) => err);
    }

    const getPackagesById = (id) => {
        const query = {
            text: 'SELECT * FROM packages WHERE id = $1',
            values: [id]
        };

        return db
            .query(query)
            .then((result) => result.rows)
            .catch((err) => err);
    };
    
    const getOrdersById = (id) => {
        const query = {
            text: 'SELECT * FROM packages WHERE id = $1',
            values: [id],
        };

        return db
            .query(query)
            .then((result) => result.rows)
            .catch((err) => err);
    };

    // -----------userPOST---------------

    const postUser = (input) => {
        // input is req.body

        const customer = {
            text: `INSERT INTO customers (
                name,
                phone,
                email,
                password,
                image,
                address,
                number_of_orders,
                customer_rating_sum,
                bio,
                ccard_info,
                company_infomation,
                photo_id,
                status,
                total_declined,
                system_id,
                web_link,
                time_created,
                time_updated )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14 $15 $16, $18) RETURNING *` ,
            values: [input.name, input.phone, 
                input.email, input.password, 
                input.photo, input.address, 
                input.number_of_orders, input.customer_rating_sum, 
                input.bio, input.ccard_info, 
                input.company_infomation, input.photo_id,  
                input.status, input.total_declined, 
                input.system_id, input.web_link,
                new Date(Date.now()), new Date(Date.now())]
        }
        
        const shipper = {
            text: `INSERT INTO customers (
                name,
                phone,
                email,
                password,
                image,
                address,
                number_of_orders,
                number_of_packages,
                customer_rating_sum,
                bio,
                ccard_info,
                company_infomation,
                driving_record,
                photo_id,
                status,
                total_declined,
                system_id,
                web_link,
                time_created,
                time_updated)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *` ,
            values: [input.name, input.phone, 
                input.email, input.password, 
                input.photo, input.address, 
                input.number_of_orders, input.customer_rating_sum, 
                input.bio, input.ccard_info, 
                input.company_infomation, input.driving_record, 
                input.photo_id, input.status, 
                input.total_declined, input.system_id, 
                input.web_link, new Date(Date.now()), new Date(Date.now())] 
        }
        
        if (req.body.status === 'shipper') {
            return db.query(shipper)
                .then(result => {
                    let userInfo = {user: result.rows, packages: [], orders: []};
                    return userInfo;
                    })
                .catch(err => err);
        } else {
            return db.query(customer)
                .then(result => {
                    let userInfo = {user: result.rows, packages: [], orders: []};
                    return userInfo;
                })
                .catch(err => err);                
        }

    }
    
    // -----------userPATCH---------------

    const updateUser = (input) => {
        // input is req.body

        const customer = {
            text: `UPDATE customers SET
                name = $1,
                phone = $2,
                email = $3,
                password = $4, 
                image = $5,
                address = $6,
                number_of_orders = $7,
                customer_rating_sum = $8,  
                bio = $9,
                ccard_info = $10,  
                company_infomation = $11,
                photo_id = $12,
                status =  $13,
                total_declined = $14, 
                system_id = $15,
                web_link = $16,
                time_created = $17,
                time_updated = $18
            WHERE system_id = ${input.system_id}  RETURNING *;` ,
            values: [input.name, input.phone,
                input.email, input.password,
                input.photo, input.address,
                input.number_of_orders, input.customer_rating_sum,
                input.bio, input.ccard_info,
                input.company_infomation, input.photo_id,
                input.status, input.total_declined,
                input.system_id, input.web_link,
                input.time_created, new Date(Date.now())] 
        }
        
        const shipper = {
            text: `UPDATE shippers SET 
                name = $1,
                phone = $2,
                email = $3,
                password = $4,
                image = $5,
                address = $6,
                number_of_orders = $7,
                number_of_packages = $8,
                customer_rating_sum = $9,
                bio = $10,
                ccard_info = $11,
                company_infomation = $12,
                driving_record =  $13,
                photo_id =  $14, 
                status = $15, 
                total_declined = $16,
                system_id = $17,
                web_link = $18,
                time_created = $19,
                time_updated = $20 
                WHERE system_id = ${input.system_id} RETURNING *;` ,
            values: [input.name, input.phone, 
                input.email, input.password, 
                input.photo, input.address, 
                input.number_of_orders, input.customer_rating_sum, 
                input.bio, input.ccard_info, 
                input.company_infomation, input.driving_record, 
                input.photo_id, input.status, 
                input.total_declined, input.system_id, 
                input.web_link, input.time_created, new Date(Date.now())] 
        }
        
        if (req.body.status === 'shipper') {
            return db.query(shipper)
                .then(result => {
                    let userInfo = {user: result.rows, packages: [], orders: []};
                    return userInfo;
                    })
                .catch(err => err);
        } else {
            return db.query(customer)
                .then(result => {
                    let userInfo = {user: result.rows, packages: [], orders: []};
                    return userInfo;
                })
                .catch(err => err);                
        }

    }

    // -----------userPUT---------------
    const upgradeUser = (input) => {
        // input is req.body

        const customer = {
            text: `INSERT INTO customers (
                name,
                phone,
                email,
                password,
                image,
                address,
                number_of_orders,
                customer_rating_sum,
                bio,
                ccard_info,
                company_infomation,
                photo_id,
                status,
                total_declined,
                system_id,
                web_link,
                time_created,
                time_updated )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14 $15 $16, $18) RETURNING *` ,
            values: [input.name, input.phone, 
                input.email, input.password, 
                input.photo, input.address, 
                input.number_of_orders, input.customer_rating_sum, 
                input.bio, input.ccard_info, 
                input.company_infomation, input.photo_id,  
                input.status, input.total_declined, 
                input.system_id, input.web_link,
                input.time_created, new Date(Date.now())]
        }
        
        const shipper = {
            text: `INSERT INTO customers (
                name,
                phone,
                email,
                password,
                image,
                address,
                number_of_orders,
                number_of_packages,
                customer_rating_sum,
                bio,
                ccard_info,
                company_infomation,
                driving_record,
                photo_id,
                status,
                total_declined,
                system_id,
                web_link,
                time_created,
                time_updated)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *` ,
            values: [input.name, input.phone, 
                input.email, input.password, 
                input.photo, input.address, 
                input.number_of_orders, input.customer_rating_sum, 
                input.bio, input.ccard_info, 
                input.company_infomation, input.driving_record, 
                input.photo_id, input.status,
                input.total_declined, input.system_id, 
                input.web_link, input.time_created, new Date(Date.now())] 
        }
        
        
        if (req.body.status === 'shipper') {
            return db.query(shipper)
                .then(result => {
                    let userInfo = {user: result.rows, packages: [], orders: []};
                    return userInfo;
                    })
                .catch(err => err);
        } else {
            return db.query(customer)
                .then(result => {
                    let userInfo = {user: result.rows, packages: [], orders: []};
                    return userInfo;
                })
                .catch(err => err);                
        }

    }
    
    // -----------userDELETE---------------

    const deleteUserByStatus = (input) => {
        // input is req.body
        // soft delete
        const customer = {
            text: `UPDATE customers SET
                status = $1,
                time_updated = $2
            WHERE system_id = ${input.system_id}  RETURNING *;`,
            values: ["deleted", new Date(Date.now())] 
        }
        
        const shipper = {
            text: `UPDATE shippers SET
                status = $1,
                time_updated = $2
            WHERE system_id = ${input.system_id}  RETURNING *;`,
            values: ["deleted", new Date(Date.now())]
        }
        
        if (req.body.status === 'shipper') {
            return db.query(shipper)
                .then(result => {
                    let userInfo = {user: result.rows, packages: [], orders: []};
                    return userInfo;
                    })
                .catch(err => err);
        } else {
            return db.query(customer)
                .then(result => {
                    let userInfo = {user: result.rows, packages: [], orders: []};
                    return userInfo;
                })
                .catch(err => err);                
        }

    }



    // -----------Admin---------------
    const getUsers = () => {
        const queryVars = (table) => {
            text: `SELECT * FROM ${table};`
        };

        Promise.all([
            db.query(queryVars('shippers')), 
            db.query(queryVars('customers'))  
        ]).then((all) => {
            res.json([...all[0], ...all[1]]);
        })

        return db
            .query(query)
            .then((result) => result.rows)
            .catch((err) => err);
    };


  

//   const getUsersPosts = () => {
//       const query = {
//           text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
//       FROM users
//       INNER JOIN posts
//       ON users.id = posts.user_id`
//       }

//       return db.query(query)
//           .then(result => result.rows)
//           .catch(err => err);

//   }

  return {
      getUserByEmail,
      getPackagesById,
      getOrdersById,
      postUser,
      updateUser,
      upgradeUser,
      deleteUserByStatus,
      getUsers
    };
};

