const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];
const filtered = [];

for (let word of words) {
    if (word.length >= 5) {
        filtered.push(word);
    }
}

console.log(filtered);
