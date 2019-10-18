const mongodb = require('mongodb');

//GET ALL CONTACTS FROM A COLLECTION
async function getContacts(){
  const contacts = await loadContacts('[DB_NAME]','[COLLECTION]','[MONGO_CONNECTION_STRING]'); //CONNECT TO MONGO
  const res = await contacts.find().toArray(); //GET THE CONTACTS
  return res
}


async function loadContacts(db,coll,connString){
  const client = await mongodb.MongoClient.connect(connString,{useNewUrlParser: true});
  return client.db(db).collection(coll);
}

getContacts().then((res)=>{
  //Do Something with the results
  process.exit();
})
