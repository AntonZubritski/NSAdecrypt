import React from 'react'
import './crypt-button.scss'

const CryptButton = (props) => {
  const { valueTextarea, setDecryptText, checkbox } = props

  const edwardDecrypt = (str) => {
    const newStr = str.replaceAll(/([a-z])\1/g, '')
    newStr === str ? setDecryptText(newStr) : edwardDecrypt(newStr, str)
  }

  const edwardEncrypt = () => {
    const replaceTextarea = valueTextarea.replaceAll(/[,.!?:;'"/ —-]/g, '')
    let text = ''
    let outputText = ''
    const randomLet = () =>
      Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 1)
        .repeat(2)

    for (let i = 0; i < replaceTextarea.length; i++) {
      if (replaceTextarea[i] === replaceTextarea[i + 1]) {
        text += replaceTextarea[i] + randomLet()
        i++
      } else {
        text += replaceTextarea[i] + (Math.random() <= 0.6 ? randomLet() : '')
      }
    }

    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i + 1]) {
        outputText += text[i] + randomLet() + text[i]
        i++
      } else {
        outputText += text[i] + (Math.random() <= 0.6 ? randomLet() : '')
      }
    }
    setDecryptText(outputText)
  }

  return (
    <input
      type="button"
      className="btn"
      value={checkbox ? 'ENCRYPT' : 'DECRYPT'}
      onClick={checkbox ? edwardEncrypt : () => edwardDecrypt(valueTextarea)}
    />
  )
}
export default CryptButton
