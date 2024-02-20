import productDao from "../dao/products.dao.js";

export const getAll = (req, res) => {
    productDao.getAll() // Este devuelve una promesa
        .then(products => res.json({ products }))
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const getOne = (req, res) => {
    productDao.getOne(req.params.barcode) // Este devuelve una promesa
        .then(product => {
            !product ? res.json({
                message: "Product not found :/"
            }) : res.json({ product });
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
};

export const insertOne = (req, res) => {
    productDao.insertOne(req.body)
        .then(result => res.json({ message: "Insertion successful" }))
        .catch(err => res.json({ status: "Server unavailable" }));
};

export const updateOne = (req, res) => {
    productDao.updateOne(req.params.barcode, req.body)
        .then((product) => {
            !product ? res.json({
                message: "Product not found :/"
            }) : res.json({ message: "Update successful" });
        })
        .catch((err) => res.json({ status: "Server unavailable" }));
};

export const deleteOne = (req, res) => {
    productDao.deleteOne(req.params.barcode)
        .then(product => {
            !product ? res.json({
                message: "Product not found :/"
            }) : res.json({ message: "Deletion successful" });
        })
        .catch(err => res.json({ status: "Server unavailable" }));
};

