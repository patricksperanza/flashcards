function generateId() {
  return Math.floor(Math.random() * 10000000000)
}

export const questionList = [
  {
    id: generateId(),
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
  },
  {
    id: generateId(),
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
  },
  {
    id: generateId(),
    question: "What method adds an item to the end of an array?",
    answer: ".push()",
  },
  {
    id: generateId(),
    question:
      "Give an example of using the reduce function to find the sum of all the elements in an array",
    answer: "let sum = arr.reduce((acc, c) => acc + c, 0)",
  },
]
