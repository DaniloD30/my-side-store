export default function ProductDetail({ params }: { params: { id: number } }) {
  return <h1 className="title">Product Detail -- {params.id}</h1>;
}
