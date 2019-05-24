var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost/associations");
app.use(bodyParser.urlencoded({ extended: true }));

var embpstSchema = new mongoose.Schema({ title: String, content: String });
var embusrSchema = new mongoose.Schema({ name: String, email: String, posts: [embpstSchema] });

var embusr = mongoose.model("embusr", embusrSchema);
var embpst = mongoose.model("embpst", embpstSchema);


// var user1 = new embusr({
//     name: "rashmith",
//     email: "rashmith.tula@gmail.com",
// });

// user1.posts.push({ title: "Test1", content: "This is for testing" });

// user1.save(function(err, usr) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(usr);
//     }
// });


// var post1 = new embpst({ title: "My 1st post", content: "This is to test my understanding of the concept" });

// var post1 = new embpst({ title: "My 2nd post", content: "Hi, do you belive this is my 2nd post" });

var post1 = new embpst({ title: "My 3rd post", content: "Hi Rashmith, do you belive this is my 3rd post" });

post1.save(function(err, pst) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(pst);
        embusr.find({ name: "rashmith" }, function(err, usr) {
            if (err) {
                console.log(err);
            }
            else {
                // usr[0].posts.splice(2, 1);
                usr[0].posts.push(pst);
                usr[0].save(function(err, savedusr) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(savedusr);
                    }
                });
            }
        });
    }
});



// embpst.find({}, function(err, posts) {
//     if (err) {
//         console.log("Couldn't find any posts");
//     }
//     else {
//         embusr.findOne({ name: "rashmith" }, function(err, user) {
//             if (err) {
//                 console.log("Couldn't find rashmith");
//             }
//             else {
//                 if (posts.length > 1) {
//                     posts.forEach(function(post) {
//                         var postObj = { title: post.title, content: post.content };
//                         user.posts.push(post);
//                     });

//                     console.log(user);
//                 }

//             }
//         })
//     }
// });
