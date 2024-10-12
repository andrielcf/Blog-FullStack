const mongoose = require('mongoose')


const articleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    comments: [{
        username: String,
        text: String
    }] 
});


const Article = mongoose.model('Article', articleSchema);

async function run(){
    try{
        await mongoose.connect('mongodb://localhost:27017/database');
        console.log("Conectado ao MongoDB");

    }
    catch(error){
        console.error("Erro ao inserir artigos: ", error);
    }
    finally{
        mongoose.connection.close();
    }
}

run();