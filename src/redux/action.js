export const addToCart = (data) => {
    console.log("action called",data);
    return{
        type: 'Add_TO_CART',
        // data: data ,
        data
    }
}