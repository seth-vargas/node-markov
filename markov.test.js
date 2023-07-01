/* Tests for markov class */

const { MarkovMachine } = require("./markov")
const str = "the machine can use the words many times over if the word appears many times in the scentence"

describe("Markov Machine", () => {
    const instance = new MarkovMachine(str)

    test("instance.words should be an array", () => {
        expect(Array.isArray(instance.words)).toEqual(true)
    })

    test("instance.chains should be a map", () => {
        const chains = instance.chains
        expect(chains.constructor.name === "Map").toEqual(true)
    })

    test("instance.makeText(numWords=50) should be a string", () => {
        const text = instance.makeText(numWords = 50)
        expect(text).toEqual(expect.any(String))
    })

    test("instance.makeText(numWords=50) should have a length of at least 1", () => {
        const text = instance.makeText(numWords = 50)
        const words = []

        text.split(" ").forEach((word) => {
            words.push(word)
        })

        expect(text.length).toBeGreaterThanOrEqual(1)
    })

    test("instance.makeText(numWords=50) should have a length less than or equal to 50", () => {
        const text = instance.makeText(numWords = 50)
        const words = []

        text.split(" ").forEach((word) => {
            words.push(word)
        })

        expect(words.length).toBeLessThanOrEqual(50)
    })

    // test that not passing in numWords defaults to 100
})
