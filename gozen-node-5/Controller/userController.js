const product = [
    {
        "id":1,
        "name":"Nokia m30",
        "price":16000

    },
    {
        "id":2,
        "name":"samsung a35",
        "price":20000

    }
]

const getRoute = (req,res) =>{
   
    try {
        res.status(200).json({
            message:"successfully fetched the data",
            data:product
        })
    } catch (error) {
        res.status(404).json({
            message:"error",
            error:error
        })
    }

}

const getById = (req,res) => {
    console.log("hello")
    try {
        const id = req.params.id;
        console.log(id)
        
        const data = product.find((product)=>{
             return product.id === id
        })
        if(!product){
            return res.status(404).json({
                message:"product not found"
            })
        }
        res.status(200).json({
            message:"successfully fetched the product",
            data:data
        })
    } catch (error) {
        res.status(404).json({
            message:"error",
            error:error
        })
        
    }
}

const post = async (req, res) => {
    try {
        console.log("hello");
        const { id, name, price } = req.body; 
        const newProduct = { id, name, price };
        product.push(newProduct);
        console.log(newProduct);
        res.status(200).json({
            message: "successfully fetched the data",
            data: newProduct
        });
    } catch (error) {
        res.status(401).json({
            message: "error",
            error: error
        });
    }
};


const putById = (req, res) => {
    try {
        console.log("hello");
        const { id } = req.params;
        const { name, price } = req.body;
        const isExist = product.find((product) => product.id === parseInt(id)); 
        if (isExist) {
            product.forEach((product) => {
                if (product.id === parseInt(id)) { 
                    product.name = name;
                    product.price = price;
                }
            });
           
        }

  
        const updatedProduct = product.find((product) => product.id === parseInt(id));
        if (updatedProduct) {
            res.status(200).json({
                message: "Product updated successfully",
                data: updatedProduct
            });
        } else {
            res.status(404).json({
                message: "Product not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error
        });
    }
};


const deleteById = (req,res) =>{
    try {
        console.log("hello")
        const {id} = req.params;
       
        const index = product.findIndex((product)=>{
             return product.id === id
        })

        if(!index){
            return res.status(404).json({
                message:"index not found",
               
            })
        }

        const removeElement = product.splice(index,0);
        res.status(200).json({
            message:"Successully removed the element",
            removedElement:removeElement
        })

        
        
    } catch (error) {
        res.status(404).json({
            message:"error",
            error:error
        })
    }

}

module.exports = {getRoute,getById,post,putById,deleteById}