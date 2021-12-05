import NextLink from "next/link"
import { FaPencilAlt, FaTimes } from "react-icons/fa"

export default function DashboardProduct({ product, handleDelete }) {
  return (
    <div>
      <h4>
        <NextLink href={`/events/${product.slug}`}>
          <a>{product.name}</a>
        </NextLink>
      </h4>
      <NextLink href={`/events/edit/${product.id}`}>
        <a>
          <FaPencilAlt /> <span>Edit Event</span>
        </a>
      </NextLink>
      <a href="#" onClick={() => handleDelete(product.id)}>
        <FaTimes /> <span>Delete</span>
      </a>
    </div>
  )
}
