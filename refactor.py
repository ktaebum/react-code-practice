def count_asterisk_exceed_five(text):
    return text.count("*") > 5

if __name__ == "__main__":
    text = """ Because he's the hero Gotham deserves but not the one it needs right now.
So we will hunt him, because he can take it. Because he's not our hero.
He is a silent guardian, a watchful protector... a dark knight.
    """
    word = "hero"
    word2 = "silent"

    tmp = text
    while word in tmp:
        tmp = tmp[:tmp.find(word)] + "*" * len(word) + tmp[tmp.find(word) + len(word):]
    text = tmp

    if text.count("*") > 5:
        print("More than five asterix")

    # censor the word2 from the text
    tmp2 = text
    while word2 in tmp2:
        tmp2 = tmp2[:tmp2.find(word2)] + "*" * len(word2) + tmp2[tmp2.find(word2) + len(word2):]
    text = tmp2

    if text.count("*") > 5:
        print("More than five asterix")

    print(text)
