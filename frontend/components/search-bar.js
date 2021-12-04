import React from "react"
import { useRouter } from "next/router"
import { useState } from "react"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { MdSearch } from "react-icons/md"

function SearchBar(props) {
  const [term, setTerm] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/product/search?term=${term}`)
    setTerm("")
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            placeholder="Search products"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <InputRightElement children={<MdSearch color="green.500" />} />
        </InputGroup>
      </form>
    </div>
  )
}

export default SearchBar
