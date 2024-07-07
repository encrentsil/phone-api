import { ProductModel } from "../models/phone.js";

export const getProducts = async (req,res,next) => {
  //Finding all products
    try {
     const getAllProducts = await ProductModel.find();
 
     res.status(200).json(getAllProducts);
   } catch (error) {
    next(error)
   }
};

export const postProducts = async(req,res,next) => {
   //Adding the product
    try {
      const addProduct = await ProductModel.create({
         ...req.body,
         image: req.file.filename
      })
      
      res.status(201).json(addProduct);
    } catch (error){
       next (error) 
    }
};

export const updateProducts = async(req,res,next) =>{
//Updating products
  const {color,status} = req.body;
try {
   const updateProduct = await ProductModel.findByIdAndUpdate(
      req.params.id, 
      {color, status}, {new: true});
   res.status(200).json(updateProduct)
} catch (error) {
   next (error)
}
};

export const deleteProducts = async (req,res,next) => {
    
   try {
      const deleteData = await ProductModel.findByIdAndDelete(req.params.id)
       res.status(200).json('Product deleted')
   } catch (error) {
     next(error)
   }
 }

  
export const singleProduct = async (req,res,next) =>{
   try {
      const singleData = await ProductModel.findById(req.params.id);
      if (!singleData) {
         return res.status(404).json({ error: 'Product not found' });
      }
      // Process the data and send a successful response
      res.status(200).json(singleData);
   } catch (error) {
      // Handle other errors
      next(error)
   }
};