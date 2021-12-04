import React, { useState } from "react"

import { API_URL } from "@/config/index"
import { FormControl, FormLabel, Input } from "@chakra-ui/react"

function EditImage({ productId, imageUploaded }) {
  const [image, setImage] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const imageFormData = new FormData()
    imageFormData.append("files", image)
    imageFormData.append("refId", productId)
    imageFormData.append("field", "image")
    imageFormData.append("ref", "products")

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: imageFormData,
    })

    if (res.ok) {
      imageUploaded()
    }
  }
  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFileChange} type="file" />

        <Input type="submit" value="Upload" />
      </form>
    </div>
  )
}

export default EditImage
