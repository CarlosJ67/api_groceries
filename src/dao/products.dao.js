import Product from "../models/products.model.js";

const productDao={};
productDao.getAll=async()=>{
    const Products = await Product.find();
    return Products;
};

productDao.getOne=async(barcode)=>{
    const Products=await Product.findOne
    ({barcode:barcode});
    return Products; 
}

productDao.insertOne=async(product)=>{
    return await Product.create(product);
};

productDao.updateOne=async(barcode, product)=>{
    return await Product.findOneAndUpdate({barcode: barcode},product);
};

productDao.deleteOne=async(barcode)=>{
    return await Product.findOneAndDelete({barcode: barcode});
};

export default productDao;// Dao tiene la funcion de all para traer todos los productos