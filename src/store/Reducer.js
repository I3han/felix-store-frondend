import axios from 'axios';

const initialState = {
    itemsArray: []
};

// const getServer = async () =>{
//     const response = await axios.get('http://localhost:4000/api/items');
//     return response;
// }
 
const Reducer = (state = initialState, action) => {
    if (action.type === 'HANDLEDATA') {
        axios.post('https://felix-store.herokuapp.com/api/items',action.data).then(response => {
            console.log(response);
         });

        return {
            itemsArray: [...state.itemsArray, action.data]
        }

    }

    if (action.type === 'GETDATAFROMSERVER') {

     
    }
    return state;
}

export default Reducer;

// {
//     id: 1,
//     name: "Lether Shoesawd",
//     des: "made from pure lether. Order soon!",
//     price: "Rs: 5200.00",
//     stock: "In stock"
// },
// {
//     id: 2,
//     name: "Watch (Rolex)dd",
//     des: "Imported from USA. Order soon!",
//     price: "Rs: 10000.00",
//     stock: "In stock"
// },
// {
//     id: 3,
//     name: "Shirt (Men)",
//     des: "made from pure cotton. Order soon!",
//     price: "Rs: 1000.00",
//     stock: "In stock"
// },
// {
//     id: 4,
//     name: "Blouse",
//     des: "made from pure cotton. Order soon!",
//     price: "Rs: 2000.00",
//     stock: "Out of stock"
// },
// {
//     id: 5,
//     name: "Shoes",
//     des: "made from pure lether. Order soon!",
//     price: "Rs: 2200.00",
//     stock: "In stock"
// },
// {
//     id: 6,
//     name: "Samsung A51",
//     des: "Newly released Limited Stock Available. Order soon!",
//     price: "Rs: 53000.00",
//     stock: "In stock"
// },
// {
//     id: 7,
//     name: "Trousers ",
//     des: "made from pure cotton. Order soon!",
//     price: "Rs: 2000.00",
//     stock: "In stock"
// },
// {
//     id: 8,
//     name: "Skirt",
//     des: "made from pure cotton. Order soon!",
//     price: "Rs: 1500.00",
//     stock: "In stock"
// },
// {
//     id: 9,
//     name: "Lether Shoes",
//     des: "made from pure lether. Order soon!",
//     price: "Rs: 5200.00",
//     stock: "Out of stock"
// },
// {
//     id: 10,
//     name: "Watch (Rolex)",
//     des: "Imported from USA. Order soon!",
//     price: "Rs: 10000.00",
//     stock: "In stock"
// },
// {
//     id: 11,
//     name: "Shirt (Men)",
//     des: "made from pure cotton. Order soon!",
//     price: "Rs: 1000.00",
//     stock: "In stock"
// },
// {
//     id: 12,
//     name: "Blouse",
//     des: "made from pure cotton. Order soon!",
//     price: "Rs: 2000.00",
//     stock: "In stock"
// }