export interface AddProductWishListProps {
  onAddToWishList: () => void;
  onRequestclose: () => void;
}

export function AddProductWishList({
  onAddToWishList,
  onRequestclose,
}: AddProductWishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishList}>sim</button>
      <button onClick={onRequestclose}>não</button>
    </span>
  );
}
