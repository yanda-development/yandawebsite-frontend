import { useState } from "react";
import { FaHeart, FaRegHeart, FaArrowUp } from "react-icons/fa";
import type { ProductCardProps } from "../../types/product";

export default function ProductCard({
  title,
  category,
  description,
  price,
  imageUrl,
  promotion,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discountedPrice = promotion ? price * (1 - promotion / 100) : price;

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          src={
            imageUrl || "https://placehold.co/400x400/1a1a1a/39FF14?text=Yanda"
          }
          alt={title}
          style={styles.image}
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          style={styles.heartButton}
        >
          {isWishlisted ? (
            <FaHeart style={styles.heartIconFilled} />
          ) : (
            <FaRegHeart style={styles.heartIconOutline} />
          )}
        </button>
        {promotion && <div style={styles.promotionBadge}>-{promotion}%</div>}
      </div>

      <div style={styles.details}>
        <div style={styles.textSection}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.category}>{category}</p>
          <p style={styles.description}>{description?.substring(0, 80)}...</p>

          {promotion && (
            <div style={styles.originalPriceContainer}>
              <span style={styles.originalPrice}>R{price}</span>
            </div>
          )}
        </div>

        <div style={styles.footer}>
          <div style={styles.priceContainer}>
            <span style={styles.price}>
              R{promotion ? discountedPrice.toFixed(2) : price}
            </span>
          </div>
          <button style={styles.addToCartButton}>
            <span style={styles.buttonText}>Add to Cart</span>
            <div style={styles.iconCircle}>
              <FaArrowUp style={styles.arrowIcon} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: "16px",
    overflow: "hidden",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    maxWidth: "320px",
    width: "100%",
  },
  imageContainer: {
    position: "relative" as const,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "280px",
    objectFit: "cover" as const,
  },
  heartButton: {
    position: "absolute" as const,
    top: "12px",
    right: "12px",
    background: "rgba(0,0,0,0.5)",
    border: "none",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backdropFilter: "blur(4px)",
  },
  heartIconOutline: {
    fontSize: "20px",
    color: "white",
  },
  heartIconFilled: {
    fontSize: "20px",
    color: "#ff4444",
    fill: "#ff4444",
  },
  promotionBadge: {
    position: "absolute" as const,
    top: "12px",
    left: "12px",
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "4px 8px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  details: {
    padding: "16px",
  },
  textSection: {
    paddingLeft: "8px",
    marginBottom: "12px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "4px",
    whiteSpace: "nowrap" as const,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  category: {
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.5)",
    marginBottom: "8px",
  },
  description: {
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: "1.4",
    marginBottom: "12px",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
  },
  originalPriceContainer: {
    marginBottom: "8px",
  },
  originalPrice: {
    fontSize: "13px",
    color: "#ff4444",
    textDecoration: "line-through",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    backgroundColor: "rgba(57, 255, 20, 0.15)",
    padding: "4px 12px",
    borderRadius: "20px",
  },
  price: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#39FF14",
  },
  addToCartButton: {
    backgroundColor: "#ffffff",
    border: "none",
    borderRadius: "30px",
    padding: "6px 12px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
  },
  buttonText: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#0a0f1e",
  },
  iconCircle: {
    backgroundColor: "rgba(10, 15, 30, 0.1)",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowIcon: {
    fontSize: "10px",
    color: "#0a0f1e",
    transform: "rotate(45deg)",
  },
};
