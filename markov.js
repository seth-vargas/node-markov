/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/)
    this.words = words.filter(c => c !== "")
    this.makeChains()
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let words = this.words

    let chains = new Map()

    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const nextWord = words[i+1] || null

      if (chains.has(word)) {
        chains.get(word).push(nextWord)
      } else {
        chains.set(word, [nextWord])
      }
    }

    this.chains = chains
  }

  /** Pick random choice from array */

  static getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    const chainsMap = this.chains
    
    let words = Array.from(chainsMap.keys())
    let word = MarkovMachine.getRandomWord(words)
    let text = []
    
    while (text.length < numWords && word != null) {
      text.push(word)
      word = MarkovMachine.getRandomWord(chainsMap.get(word))
    }

    return text.join(" ")
  } 
}

module.exports = {MarkovMachine}