export interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    image_url: string;
    stock: number;
    promotion?: number;
}

export interface ProductCardProps {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string;
    promotion?: number;
}