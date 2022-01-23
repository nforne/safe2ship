const express = require('express');
const router = express.Router();


module.exports = ({
    postPackage,
    editPackage,
    deletePackage,
}) => {
   
    router.post('/pkgs/create', (req, res) => {
        postPackage(req.body)
            .then((pkgs) => {
                res.json(pkgs);
            })
            .catch((err) => res.json({
                error: err.message
            }));
    });

    router.patch('/pkgs/update', (req, res) => {
        const {id, customer_id} = req.body;

        editPackage(id, customer_id)
            .then(pkgs => {
                res.json(pkgs);
                //websocket pkg messages update users
                //update users if in order and deleting
            })
            .catch(err => res.json({
                error: err.message
            }));
    })
    
    
    router.delete('/pkgs/delete', (req, res) => {
        const {id, customer_id} = req.body;
        
        deletePackage(id, customer_id)
            .then(pkgs => {
                res.json(pkgs);
                //websocket pkg messages update users
                //update users if in order and deleting
            })
            .catch(err => res.json({
                error: err.message
            }));

    })

    return router;
};

