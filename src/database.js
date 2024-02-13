import mongoose  from "mongoose";

mongoose.connect(process.env.CONECTION_STRING_DB)
.then(db=> console.log('Conectado a la base de datos'))
.catch(err=>console.error(err));

export default mongoose;