import React from 'react'
import { useState } from 'react'

const useLoader = () => {
    const [isLoading, setIsLoading] = useState(false)

    const showLoading = () => setIsLoading(true)

    const hideLoading = () => setIsLoading(false)
    
  return {isLoading, showLoading, hideLoading}
}

export default useLoader