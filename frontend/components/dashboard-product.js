import NextLink from "next/link"
import { FaPencilAlt, FaTimes } from "react-icons/fa"

function DashboardProduct(props) {
  return (
    <div>
      <Heading>
        <NextLink href={`/events/${product.slug}`}>
          <a>{product.name}</a>
        </NextLink>
      </Heading>
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

export default DashboardProduct
