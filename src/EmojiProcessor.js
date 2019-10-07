import React from "react";
import _ from "lodash";
import { getEmojiDataFromNative, Emoji } from "emoji-mart";
import data from "emoji-mart/data/all.json";
import emojiRegex from "emoji-regex";

export function emojiUnicodeToColonsFormat(platform, message) {
  const regex = emojiRegex();
  let output = message;
  let match;
  while ((match = regex.exec(output)) !== null) {
    const emoji = match[0];
    const emojiName = getEmojiDataFromNative(emoji, platform, data).colons;
    const a = output.substr(0, match.index);
    const b = output.substr(match.index + emoji.length);
    output = a + emojiName + b;
  }
  return output;
}

export function parseEmojis(message, platform) {
  if (message) {
    const colonFormat = emojiUnicodeToColonsFormat(platform, message);
    const regex = /(:(?![\n])[+()#$@-\w]+:)/g;
    const res = colonFormat.split(regex);
    return (
      <React.Fragment>
        {_.map(res, element => {
          if (regex.test(element)) {
            const emoji = element.replace(/:/g, "");
            return <Emoji emoji={emoji} set={platform} size={24} key={emoji} />;
          }
          return element;
        })}
      </React.Fragment>
    );
  }
  return message;
}
