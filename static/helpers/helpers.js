function pluralize(word, amount) {
    if (amount == 1) {
        return word;
    }
    return word + "s";
}