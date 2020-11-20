import React from 'react'
import './crypt-button.scss'

const CryptButton = ({ ...props }) => {
  const { valueTextarea, setDecryptText } = props

  const edwardDecrypt = (str) => {
     const newStr = str.replaceAll(/([a-z])\1/g, '')
     newStr === str ? setDecryptText(newStr) : edwardDecrypt(newStr, str)
  }

  return (
    <input
      type="button"
      className="btn"
      value="DECRYPT"
      onClick={() => edwardDecrypt(valueTextarea)}
    />
  )
}
export default CryptButton
