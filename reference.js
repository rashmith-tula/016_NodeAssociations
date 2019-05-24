var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/associations");

var refpst = require("./models/refpst");
var refusr = require("./models/refusr");

// refusr.create({ name: "Rashmith", email: "rashmith.tula@brother.com" }, function(err, usr) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("************************");
//         console.log("User Created:");
//         console.log("************************");
//         console.log(usr);
//         console.log("************************");
//     }
// });

refusr.findOne({ name: "Rashmith" }).populate("posts").exec(function(err, user) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("************************");
        console.log("User Populated With Complete Posts:");
        console.log("************************");
        console.log(user);
        console.log("************************");
    }
});


// refpst.create({
            //     title: "My 5th Post",
            //     content: "This is my 5th post in the reference model....."
            // }, function(err1, post) {
            //     if (err1) {
            //         console.log(err1);
            //     }
            //     else {
            //         console.log("************************");
            //         console.log("Post Saved: ");
            //         console.log("************************");
            //         console.log(post);
            //         console.log("************************");
            //         refusr.find({ name: "Rashmith" }, function(err2, usr) {
            //             if (err2) {
            //                 console.log(err2);
            //             }
            //             else {
            //                 console.log("************************");
            //                 console.log("User Found: ");
            //                 console.log("************************");
            //                 console.log(usr);
            //                 console.log("************************");
            //                 usr[0].posts.push(post);
            //                 usr[0].save(function(err3, savedusr) {
            //                     if (err3) {
            //                         console.log(err3)
            //                     }
            //                     else {
            //                         console.log("************************");
            //                         console.log("User Updated With Posts:");
            //                         console.log("************************");
            //                         console.log(savedusr);
            //                         console.log("************************");
            //                     }
            //                 })
            //             }
            //         })
            //     }
            // });


            // refusr.findOne({ name: "Rashmith" }).populate("posts").exec(function(err, user) {
            //     if (err) {
            //         console.log(err);
            //     }
            //     else {
            //         console.log("************************");
            //         console.log("User Populated With Complete Posts:");
            //         console.log("************************");
            //         console.log(user);
            //         console.log("************************");
            //     }
            // });



//  refusr.find({ name: "Rashmith" }, function(err, user1) {
// //     if (err) {
// //         console.log(err);
// //     }
// //     else {
// //         console.log(user1);
// //         // user1[0].populate("posts").exec(function(error, finalUser) {
// //         //     if (error) {
// //         //         console.log(error);
// //         //     }
// //         //     else {
// //         //         console.log(finalUser);
// //         //     }
// //         // });
// //     }
// // });
