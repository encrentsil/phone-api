import { Router } from "express";
import { deleteProducts, getProducts, updateProducts, postProducts, singleProduct, } from "../controllers/phone.js";
import { remoteUpload } from "../middlewares/upload.js";

//creating route
const phoneRouter = Router()

//Creating paths
phoneRouter.get('/phones', getProducts)

phoneRouter.post('/phones',remoteUpload.single('image'), postProducts)

phoneRouter.patch ('/phones/:id', updateProducts)

phoneRouter.delete ('/phones/:id', deleteProducts)

phoneRouter.get('/phones/:id', singleProduct)




export default phoneRouter;