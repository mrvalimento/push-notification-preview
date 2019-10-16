import React from "react";
import _ from "lodash";
import { getEmojiDataFromNative, Emoji } from "emoji-mart";
import data from "emoji-mart/data/all.json";
import emojiRegex from "emoji-regex";


const emojiUnicodeToColonsFormat = (platform, message) => {
  let output = message;
  let match = null;
  const unicodeEmojiRegex = emojiRegex();
  while ((match = unicodeEmojiRegex.exec(output)) !== null) {
    const emoji = match[0];
    const emojiName = getEmojiDataFromNative(emoji, platform, data).colons;
    const a = output.substr(0, match.index);
    const b = output.substr(match.index + emoji.length);
    output = a + emojiName + b;
  }
  return output;
};

const checkIfEmojiPresent = (message) => {
  const unicodeEmojiRegex = emojiRegex();
  return unicodeEmojiRegex.test(message);
};

const parseEmojis = (message, platform, size) => {
  if (message) {
    const colonFormat = emojiUnicodeToColonsFormat(platform, message);
    const colonEmojiRegex = /(:(?![\n])[+()#$@-\w]+:)/g;
    const res = colonFormat.split(colonEmojiRegex);
    if (res.length > 1) {
      return (
        <React.Fragment>
          {_.map(res, (element, i) => {
            if (colonEmojiRegex.test(element)) {
              const emoji = element.replace(/:/g, "");
              return (
                <Emoji
                  emoji={emoji}
                  set={platform}
                  size={size || 16}
                  key={`emoji-${emoji}-${i}`}
                />
              );
            }
            return element;
          })}
        </React.Fragment>
      );
    }
  }
  return message;
};

export { emojiUnicodeToColonsFormat, parseEmojis, checkIfEmojiPresent };