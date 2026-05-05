export interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    formerPrice: number;
    image_url: string;
    stock: number;
    promotionPercentage: number;
    promotionName: string;
}

export interface ProductCardProps {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    formerPrice: number;
    imageUrl: string;
    stock: number;
    promotionPercentage: number;
    promotionName: string;
}