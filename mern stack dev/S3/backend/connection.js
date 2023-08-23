const mongooes = require('mongooes');

const url ='mongodb+srv://shriyash:hari@cluster0.djtzioh.mongodb.net/mydatabase?retryWrites=true&w=majority'



//asychronous - return promise
mongoes.connect(url)
.then((result) => {
    console.log('database connected successfully');
})
.catch((err) => {
    console.log(err);
    
});
console.log('next statement');