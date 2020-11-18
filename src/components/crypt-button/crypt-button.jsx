import React from 'react'
import './crypt-button.scss'

const CryptButton = ({ ...props }) => {
  const { valueTextarea, setDecryptText } = props

  const edwardDecrypt = () => {
    setDecryptText(valueTextarea.replaceAll(/([a-z])\1/g, ''))
  }

  return (
    <input
      type="button"
      className="btn"
      value="DECRYPT"
      onClick={edwardDecrypt}
    />
  )
}
export default CryptButton
