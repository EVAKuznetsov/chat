import React from 'react'
import { Emoji } from 'emoji-mart'
import reactStringReplace from 'react-string-replace'

const TextWidthEmoji = ({ text, emojiSize }) => {
  return reactStringReplace(text, /:(.+?):/g, (match, i) => (
    <Emoji key={match} set={'apple'} emoji={match} size={emojiSize} />
  ))
}
export default TextWidthEmoji
