import { List, ListRowRenderer } from "react-virtualized";

import { ProductItem } from "./ProductItem";

interface SearchResultProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishList,
}: SearchResultProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}R$</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
