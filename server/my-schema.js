var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true, config: { autoIndex: false } });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('open successfully');
});

const articleSchema = mongoose.Schema({
  name: String
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;

// kittySchema.methods.speak = function () {
//   console.log(this.name, 'speak');
// }



// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name);


// silence.save((err, silence) => {
//   if (err) {
//     return console.error(err);
//   }
//   silence.speak();
// });

// Kitten.find({ _id: '5a01c6e48c7e2d16c4f251ba' }, (err, kittens) => {
//   console.log(kittens);
// })