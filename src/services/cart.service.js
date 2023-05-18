import api from "./api";

export const get = async ()=>{
    try {
        const url = "products?limit=3";
        const rs = await api.get(url);
        return rs.data.products;
    } catch (error) {
        return [];
    }
}

export const post = async (cart)=>{
    // post product
} 