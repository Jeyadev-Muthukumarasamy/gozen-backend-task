
const product = require("../Model/Model")
const getProduct =async(req,res)=>{
    try {
        const data = await product.find();
        if(!data){
            return res.status(404).json({
                message:"data not found"
            })
        }
        res.status(200).json({
            message:"successfully posted the get data",
            data:data       
        })

    } catch (error) {
        console.log(error)
        
    }

}

const getProductById = async(req,res) => {

    try {
        const {id} = req.params
        const data = await product.findById(id);
        if(!data){
            return res.status(404).json({
                message:"data not found"
            })
        }
        res.status(200).json({
            message:"successfully posted the get data",
            data:data
        })

    } catch (error) {
        console.log(error)
        
    }

}

const postProduct = async(req,res) => {
   try {
    console.log("post")
    console.log(req.body)
    const {productName,productCategory,price} = req.body
    console.log(productName,productCategory)
    const object = {
        productName,
        productCategory,
        price
    }
    console.log(object)
    const data = await product.create(object);
    
    return res.status(200).json({
        message:"successfully posted the data",
        data:data

    })
    
   } catch (error) {
    res.status(404).json({
        message:"internal server error",
        error:error
    })
    
   }
}

const putProductById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const {productName,productCategory,price} = req.body;
        const updatedProduct = await product.findByIdAndUpdate(id,{productName,productCategory,price},{new:true});
        if(!updatedProduct){
            return res.status(404).json({
                message:"product not found"
            })
        }
        return res.status(200).json({
            message:"successfully updated the product",
            data:updatedProduct
        })
    } catch (error) {
        res.status(404).json({
            message:"error",
            error:error
        })
        
    }
};

const deleteProductById = async(req,res)=>{
    try {
        const {id} = req.params;
        const deletedData = await product.findByIdAndDelete(id)
        if(!deletedData){
            return res.status(404).json({
                message:"product not found"
            })
        }
        res.status(200).json({
            message:"successfully deleted the data",
            data:deletedData
        })
    } catch (error) {
        res.status(404).json({
            message:"internal server error",
            error:error
        })
        
    }
}

module.exports = {getProduct,getProductById,postProduct,putProductById,deleteProductById}