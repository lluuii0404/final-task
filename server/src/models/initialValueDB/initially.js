const mongoose = require('mongoose');

const User = require('../userModel');
const Company = require('../companyModel');

//password: qwerty
const userMontana = new User ({
    _id: new mongoose.Types.ObjectId(),
    first_name: "Tony",
    last_name: "Montana",
    nick_name: "tony",
    email: "montana@gmail.com",
    password: "65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5",
    phone_number: "+38(000)332-22-33",
    position: "-",
    description: "-",
    createdAt: Date.now(),
    updatedAt: Date.now()
});

userMontana.save((err) => {
    if (err) throw err;

    console.log('User successfully saved.');

    const appleCompany = new Company ({
        _id: new mongoose.Types.ObjectId(),
        userId: userMontana._id,
        name: "Apple",
        address: "Cupertino, California",
        service_of_activity: "Computer hardware",
        number_of_employees: 132000,
        type: "ABC",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius tincidunt nisl eget auctor. Curabitur commodo odio vel orci lacinia, a ultrices lorem aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus porttitor lectus, id pharetra nibh semper nec. Aenean vel ullamcorper nisl. Mauris vel nisl a eros dictum scelerisque vitae a libero. Fusce imperdiet vestibulum magna, eget volutpat elit varius eu.",
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    appleCompany.save(err=> {
        if (err) throw err;
        console.log('Company successfully saved.');
    });

    const oracleCompany = new Company ({
        _id: new mongoose.Types.ObjectId(),
        userId: userMontana._id,
        name: "Oracle",
        address: "Santa Clara, California, U.S.",
        service_of_activity: "Enterprise software",
        number_of_employees: 137000,
        type: "ABC",
        description: "Nullam iaculis, ligula non pretium elementum, ex metus ullamcorper nisi, sed semper eros arcu et leo. Quisque varius diam quis accumsan bibendum. Donec ullamcorper elit non mi dapibus dictum. Donec lectus ligula, convallis vitae cursus ac, dictum ut dui. Phasellus pretium, tortor et rhoncus lobortis, est nisi scelerisque magna, vitae varius nisl justo id mi. \\nNullam iaculis, ligula non pretium elementum, ex metus ullamcorper nisi, sed semper eros arcu et leo. Quisque varius diam quis accumsan bibendum. Donec ullamcorper elit non mi dapibus dictum. Donec lectus ligula, convallis vitae cursus ac, dictum ut dui. Phasellus pretium, tortor et rhoncus lobortis, est nisi scelerisque magna, vitae varius nisl justo id mi.",
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    oracleCompany.save(err=> {
        if (err) throw err;
        console.log('Company successfully saved.');
    });

    const hpCompany = new Company ({
        _id: new mongoose.Types.ObjectId(),
        userId: userMontana._id,
        name: "Hewlett Packard",
        address: "Palo Alto, California, United States",
        service_of_activity: "Computer hardware",
        number_of_employees: 27000,
        type: "ABC",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    hpCompany.save(err=> {
        if (err) throw err;
        console.log('Company successfully saved.');
    });

    const xiaomiCompany = new Company ({
        _id: new mongoose.Types.ObjectId(),
        userId: userMontana._id,
        name: "Xiaomi",
        address: "Yingu Mansion, Beijing, China",
        service_of_activity: "Consumer electronics",
        number_of_employees: 16683,
        type: "ABC",
        description: "Nullam iaculis, ligula non pretium elementum, ex metus ullamcorper nisi, sed semper eros arcu et leo. Quisque varius diam quis accumsan bibendum. Donec ullamcorper elit non mi dapibus dictum. Donec lectus ligula, convallis vitae cursus ac, dictum ut dui. Phasellus pretium, tortor et rhoncus lobortis, est nisi scelerisque magna, vitae varius nisl justo id mi.",
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    xiaomiCompany.save(err=> {
        if (err) throw err;
        console.log('Company successfully saved.');
    });
    const samsungCompany = new Company ({
        _id: new mongoose.Types.ObjectId(),
        userId: userMontana._id,
        name: "Samsung",
        address: "Daegu, Japanese Korea",
        service_of_activity: "Conglomerate",
        number_of_employees: 320671,
        type: "ABC",
        description: "Mauris bibendum justo quis porta fermentum. Aenean vulputate interdum mi quis congue. Proin sed suscipit quam. Aenean gravida ex sed felis pretium tempus. Duis hendrerit mi ac finibus bibendum. Mauris lorem ex, cursus ultrices mi ac, sagittis fermentum tellus. Quisque posuere ac mauris sit amet ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam porttitor velit quam, ultricies fringilla justo ullamcorper quis. Mauris egestas nunc ligula, et pretium turpis interdum et. Donec lectus urna, tempor volutpat rhoncus eu, vestibulum sit amet leo. Vestibulum aliquam turpis quis ante ultrices, quis molestie turpis consequat. Pellentesque sodales leo vel lectus cursus, sit amet ullamcorper ligula consectetur. Aenean mollis mauris nec ex tristique, consectetur pretium diam ultrices.",
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    samsungCompany.save(err=> {
        if (err) throw err;
        console.log('Company successfully saved.');
    });
});
