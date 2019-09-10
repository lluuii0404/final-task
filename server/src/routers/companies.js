const express  = require("express"),
      mongoose = require("mongoose");
const router  = express.Router();

const Company = require('../models/companyModel');

router.get("/companies", (req, res, next) => {
    Company.find( {}, (err, users) => {
        // if(err) return console.log(err);
        if(err) return next(err);
        res.send(users)
    });
});

router.get("/companies/:id", (req, res, next) => {
    const { id } = req.params;
    Company.find({ _id: id }, function(err, company){
        if(err) return next(err);
        res.send(company);
    });
});

router.post('/companies', (req,res, next) => {
    if(!req.body) return res.sendStatus(400);

    const { name, userId, address, service_of_activity, number_of_employees, description, type } = req.body;

    Company.find( { name }, (err, data) => {
        if (err) {
            return next(err);
        }
        if (data.length !== 0) {
            return res.status(400).send({
                error: "Company already exists"
            });
        }

        let company = new Company({
            userId,
            _id: new mongoose.Types.ObjectId(),
            name,
            address,
            service_of_activity,
            number_of_employees,
            description,
            type
        });

        company.save((err, data) => {
            if (err) return next(err);
            // ----
            console.log('Company successfully saved.');
            res.send(data);
        });
    });
});

router.put('/companies/:id', (req,res, next) => {
    if(!req.body) return res.sendStatus(400);

    const { id } = req.params;
    const queryBody = req.body;
    let newCompanyData = {};

    for ( let prop in queryBody ){
        if (prop === "name") newCompanyData.name = queryBody[prop];
        if (prop === "address") newCompanyData.address = queryBody[prop];
        if (prop === "service_of_activity") newCompanyData.service_of_activity = queryBody[prop];
        if (prop === "number_of_employees") newCompanyData.number_of_employees = queryBody[prop];
        if (prop === "description") newCompanyData.description = queryBody[prop];
        if (prop === "type") newCompanyData.type = queryBody[prop];
    }
    newCompanyData.updatedAt = new Date().toJSON();

    Company.findOneAndUpdate({_id: id}, newCompanyData, {new: true}, function(err, user){
        if(err) return next(err);
        res.send(user);
    });
});
router.delete('/companies/:id', (req,res, next) => {
    const { id } = req.params;

    Company.findByIdAndDelete({ _id: id }, function(err, company){
        if(err) return next(err);
        res.send({message: 'This company delete.'});
    });
});


// SORT
router.get("/companies_sort_by_name_up/:userId", (req, res, next) => {
    const { userId } = req.params;
    Company.find({ userId: userId })
        .sort('name')
        .exec((err,company) => {
            if (err) return next(err);
            res.send(company);
        })
});
router.get("/companies_sort_by_name_desc/:userId", (req, res, next) => {
    const { userId } = req.params;

    Company.find({ userId: userId })
        .sort('-name')
        .exec((err,companies) => {
            if (err) return next(err);
            res.send(companies);
        })
});

router.get("/companies_sort_by_serves_up/:userId", (req, res, next) => {
    const { userId } = req.params;

    Company.find({ userId: userId })
        .sort('service_of_activity')
        .exec( (err,companies) => {
            if (err) return next(err);
            res.send(companies);
        })
});
router.get("/companies_sort_by_serves_desc/:userId", (req, res, next) => {
    const { userId } = req.params;

    Company.find({ userId: userId })
        .sort('-service_of_activity')
        .exec( (err,companies) => {
            if (err) return next(err);
            res.send(companies);
        })
});


router.get("/companies_sort_by_number_up/:userId", (req, res, next) => {
    const { userId } = req.params;

    Company.find({ userId: userId })
        .sort('number_of_employees')
        .exec( (err,companies) => {
            if (err) return next(err);
            res.send(companies);
        })
});
router.get("/companies_sort_by_number_desc/:userId", (req, res, next) => {
    const { userId } = req.params;

    Company.find({ userId: userId })
        .sort('-number_of_employees')
        .exec( (err,companies) => {
            if (err) return next(err);
            res.send(companies);
        })
});

module.exports = router;
