export interface TriviaQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'type-answer';
  options?: string[];
  correctAnswer: number | string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const triviaQuestions: TriviaQuestion[] = [
  // EASY QUESTIONS
  // Geography - Easy
  {
    id: '1',
    question: 'What is the capital of France?',
    type: 'multiple-choice',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '21',
    question: 'Which continent is Egypt in?',
    type: 'multiple-choice',
    options: ['Asia', 'Africa', 'Europe', 'South America'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '22',
    question: 'What is the largest country in the world?',
    type: 'multiple-choice',
    options: ['China', 'Canada', 'Russia', 'United States'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '23',
    question: 'Which ocean is the largest?',
    type: 'type-answer',
    correctAnswer: 'pacific',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '24',
    question: 'What is the capital of Japan?',
    type: 'type-answer',
    correctAnswer: 'tokyo',
    category: 'Geography',
    difficulty: 'easy'
  },

  // Science - Easy
  {
    id: '2',
    question: 'How many legs does a spider have?',
    type: 'multiple-choice',
    options: ['6', '8', '10', '12'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '4',
    question: 'Which planet is closest to the Sun?',
    type: 'multiple-choice',
    options: ['Venus', 'Earth', 'Mercury', 'Mars'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '25',
    question: 'What gas do we breathe in to live?',
    type: 'multiple-choice',
    options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '26',
    question: 'How many bones are in an adult human body?',
    type: 'multiple-choice',
    options: ['106', '206', '306', '406'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '27',
    question: 'What is the chemical symbol for water?',
    type: 'type-answer',
    correctAnswer: 'h2o',
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '28',
    question: 'What gas do plants absorb from the atmosphere?',
    type: 'type-answer',
    correctAnswer: 'carbon dioxide',
    category: 'Science',
    difficulty: 'easy'
  },

  // Math - Easy
  {
    id: '5',
    question: 'What is 5 + 7?',
    type: 'multiple-choice',
    options: ['11', '12', '13', '14'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '8',
    question: 'What is 10 × 5?',
    type: 'type-answer',
    correctAnswer: '50',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '29',
    question: 'What is 15 - 8?',
    type: 'multiple-choice',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '30',
    question: 'What is 6 × 7?',
    type: 'multiple-choice',
    options: ['40', '41', '42', '43'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '31',
    question: 'What is 100 ÷ 4?',
    type: 'type-answer',
    correctAnswer: '25',
    category: 'Math',
    difficulty: 'easy'
  },

  // Art - Easy
  {
    id: '3',
    question: 'What color do you get when you mix red and blue?',
    type: 'multiple-choice',
    options: ['Green', 'Yellow', 'Purple', 'Orange'],
    correctAnswer: 2,
    category: 'Art',
    difficulty: 'easy'
  },
  {
    id: '32',
    question: 'What color do you get when you mix yellow and red?',
    type: 'multiple-choice',
    options: ['Purple', 'Green', 'Orange', 'Pink'],
    correctAnswer: 2,
    category: 'Art',
    difficulty: 'easy'
  },
  {
    id: '33',
    question: 'How many colors are in a rainbow?',
    type: 'multiple-choice',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    category: 'Art',
    difficulty: 'easy'
  },

  // History - Easy
  {
    id: '34',
    question: 'Who was the first President of the United States?',
    type: 'multiple-choice',
    options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '35',
    question: 'In which year did the Titanic sink?',
    type: 'multiple-choice',
    options: ['1910', '1911', '1912', '1913'],
    correctAnswer: 2,
    category: 'History',
    difficulty: 'easy'
  },

  // Sports - Easy
  {
    id: '36',
    question: 'How many players are on a basketball team on the court at one time?',
    type: 'multiple-choice',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '37',
    question: 'In which sport would you perform a slam dunk?',
    type: 'type-answer',
    correctAnswer: 'basketball',
    category: 'Sports',
    difficulty: 'easy'
  },

  // MEDIUM QUESTIONS
  // Science - Medium
  {
    id: '11',
    question: 'What is the chemical symbol for gold?',
    type: 'multiple-choice',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '17',
    question: 'What is the hardest natural substance on Earth?',
    type: 'type-answer',
    correctAnswer: 'diamond',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '38',
    question: 'What is the speed of light in a vacuum?',
    type: 'multiple-choice',
    options: ['299,792,458 m/s', '300,000,000 m/s', '299,000,000 m/s', '301,000,000 m/s'],
    correctAnswer: 0,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '39',
    question: 'Which blood type is known as the universal donor?',
    type: 'multiple-choice',
    options: ['A', 'B', 'AB', 'O'],
    correctAnswer: 3,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '40',
    question: 'What is the largest organ in the human body?',
    type: 'type-answer',
    correctAnswer: 'skin',
    category: 'Science',
    difficulty: 'medium'
  },

  // History - Medium
  {
    id: '12',
    question: 'In which year did World War II end?',
    type: 'multiple-choice',
    options: ['1944', '1945', '1946', '1947'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '41',
    question: 'Who was the first person to walk on the moon?',
    type: 'multiple-choice',
    options: ['Buzz Aldrin', 'Neil Armstrong', 'John Glenn', 'Alan Shepard'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '42',
    question: 'Which ancient wonder of the world was located in Alexandria?',
    type: 'multiple-choice',
    options: ['Hanging Gardens', 'Lighthouse', 'Colossus', 'Mausoleum'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '43',
    question: 'In which year did the Berlin Wall fall?',
    type: 'type-answer',
    correctAnswer: '1989',
    category: 'History',
    difficulty: 'medium'
  },

  // Literature - Medium
  {
    id: '9',
    question: 'Who wrote Romeo and Juliet?',
    type: 'type-answer',
    correctAnswer: 'shakespeare',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '44',
    question: 'Which novel begins with "It was the best of times, it was the worst of times"?',
    type: 'multiple-choice',
    options: ['Great Expectations', 'A Tale of Two Cities', 'Oliver Twist', 'David Copperfield'],
    correctAnswer: 1,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '45',
    question: 'Who wrote "To Kill a Mockingbird"?',
    type: 'type-answer',
    correctAnswer: 'harper lee',
    category: 'Literature',
    difficulty: 'medium'
  },

  // Math - Medium
  {
    id: '10',
    question: 'What is the square root of 144?',
    type: 'type-answer',
    correctAnswer: '12',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '20',
    question: 'How many minutes are in a full day?',
    type: 'type-answer',
    correctAnswer: '1440',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '46',
    question: 'What is 15% of 200?',
    type: 'multiple-choice',
    options: ['25', '30', '35', '40'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '47',
    question: 'What is the value of π (pi) to two decimal places?',
    type: 'type-answer',
    correctAnswer: '3.14',
    category: 'Math',
    difficulty: 'medium'
  },

  // Geography - Medium
  {
    id: '48',
    question: 'Which is the longest river in the world?',
    type: 'multiple-choice',
    options: ['Amazon', 'Nile', 'Mississippi', 'Yangtze'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '49',
    question: 'What is the smallest country in the world?',
    type: 'type-answer',
    correctAnswer: 'vatican city',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '50',
    question: 'Which mountain range contains Mount Everest?',
    type: 'type-answer',
    correctAnswer: 'himalayas',
    category: 'Geography',
    difficulty: 'medium'
  },

  // HARD QUESTIONS
  // Science - Hard
  {
    id: '13',
    question: 'What is the powerhouse of the cell?',
    type: 'multiple-choice',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Endoplasmic Reticulum'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '18',
    question: 'Who developed the theory of relativity?',
    type: 'type-answer',
    correctAnswer: 'einstein',
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '51',
    question: 'What is the most abundant gas in Earth\'s atmosphere?',
    type: 'multiple-choice',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '52',
    question: 'What is the name of the theoretical boundary around a black hole?',
    type: 'type-answer',
    correctAnswer: 'event horizon',
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '53',
    question: 'Which particle is known as the "God particle"?',
    type: 'type-answer',
    correctAnswer: 'higgs boson',
    category: 'Science',
    difficulty: 'hard'
  },

  // Art - Hard
  {
    id: '14',
    question: 'Who painted "The Starry Night"?',
    type: 'multiple-choice',
    options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Claude Monet'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '54',
    question: 'Which art movement was Pablo Picasso associated with?',
    type: 'multiple-choice',
    options: ['Impressionism', 'Surrealism', 'Cubism', 'Expressionism'],
    correctAnswer: 2,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '55',
    question: 'Who sculpted "The Thinker"?',
    type: 'type-answer',
    correctAnswer: 'rodin',
    category: 'Art',
    difficulty: 'hard'
  },

  // Technology - Hard
  {
    id: '15',
    question: 'Which programming language was created by Brendan Eich?',
    type: 'multiple-choice',
    options: ['Python', 'Java', 'JavaScript', 'C++'],
    correctAnswer: 2,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '56',
    question: 'What does "HTTP" stand for?',
    type: 'type-answer',
    correctAnswer: 'hypertext transfer protocol',
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '57',
    question: 'Who founded Microsoft?',
    type: 'multiple-choice',
    options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'hard'
  },

  // Math - Hard
  {
    id: '19',
    question: 'What is the derivative of x²?',
    type: 'type-answer',
    correctAnswer: '2x',
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '58',
    question: 'What is the integral of 1/x?',
    type: 'type-answer',
    correctAnswer: 'ln(x)',
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '59',
    question: 'What is the value of e (Euler\'s number) to two decimal places?',
    type: 'type-answer',
    correctAnswer: '2.72',
    category: 'Math',
    difficulty: 'hard'
  },

  // Philosophy - Hard
  {
    id: '60',
    question: 'Who wrote "The Republic"?',
    type: 'multiple-choice',
    options: ['Aristotle', 'Plato', 'Socrates', 'Descartes'],
    correctAnswer: 1,
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '61',
    question: 'What is the philosophical study of knowledge called?',
    type: 'type-answer',
    correctAnswer: 'epistemology',
    category: 'Philosophy',
    difficulty: 'hard'
  },

  // Music - Various Difficulties
  {
    id: '62',
    question: 'How many strings does a standard guitar have?',
    type: 'multiple-choice',
    options: ['4', '5', '6', '7'],
    correctAnswer: 2,
    category: 'Music',
    difficulty: 'easy'
  },
  {
    id: '63',
    question: 'Who composed "The Four Seasons"?',
    type: 'multiple-choice',
    options: ['Bach', 'Mozart', 'Vivaldi', 'Beethoven'],
    correctAnswer: 2,
    category: 'Music',
    difficulty: 'medium'
  },
  {
    id: '64',
    question: 'What does "forte" mean in music?',
    type: 'type-answer',
    correctAnswer: 'loud',
    category: 'Music',
    difficulty: 'hard'
  },

  // Movies - Various Difficulties
  {
    id: '65',
    question: 'Which movie features the line "May the Force be with you"?',
    type: 'multiple-choice',
    options: ['Star Trek', 'Star Wars', 'Guardians of the Galaxy', 'Interstellar'],
    correctAnswer: 1,
    category: 'Movies',
    difficulty: 'easy'
  },
  {
    id: '66',
    question: 'Who directed the movie "Jaws"?',
    type: 'type-answer',
    correctAnswer: 'spielberg',
    category: 'Movies',
    difficulty: 'medium'
  },
  {
    id: '67',
    question: 'Which film won the Academy Award for Best Picture in 1994?',
    type: 'multiple-choice',
    options: ['Forrest Gump', 'The Lion King', 'Pulp Fiction', 'The Shawshank Redemption'],
    correctAnswer: 0,
    category: 'Movies',
    difficulty: 'hard'
  },

  // Food & Cooking - Various Difficulties
  {
    id: '68',
    question: 'What is the main ingredient in guacamole?',
    type: 'type-answer',
    correctAnswer: 'avocado',
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '69',
    question: 'Which spice is derived from the Crocus flower?',
    type: 'multiple-choice',
    options: ['Paprika', 'Saffron', 'Turmeric', 'Cardamom'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'medium'
  },
  {
    id: '70',
    question: 'What is the French cooking term for "everything in its place"?',
    type: 'type-answer',
    correctAnswer: 'mise en place',
    category: 'Food',
    difficulty: 'hard'
  },

  // Animals - Various Difficulties
  {
    id: '71',
    question: 'What is the largest mammal in the world?',
    type: 'multiple-choice',
    options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '72',
    question: 'How many hearts does an octopus have?',
    type: 'multiple-choice',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    category: 'Animals',
    difficulty: 'medium'
  },
  {
    id: '73',
    question: 'What is a group of flamingos called?',
    type: 'type-answer',
    correctAnswer: 'flamboyance',
    category: 'Animals',
    difficulty: 'hard'
  },

  // Space - Various Difficulties
  {
    id: '74',
    question: 'How many planets are in our solar system?',
    type: 'multiple-choice',
    options: ['7', '8', '9', '10'],
    correctAnswer: 1,
    category: 'Space',
    difficulty: 'easy'
  },
  {
    id: '75',
    question: 'Which planet is known as the Red Planet?',
    type: 'type-answer',
    correctAnswer: 'mars',
    category: 'Space',
    difficulty: 'easy'
  },
  {
    id: '76',
    question: 'What is the closest star to Earth (other than the Sun)?',
    type: 'type-answer',
    correctAnswer: 'proxima centauri',
    category: 'Space',
    difficulty: 'hard'
  },

  // Mythology - Various Difficulties
  {
    id: '77',
    question: 'In Greek mythology, who is the king of the gods?',
    type: 'multiple-choice',
    options: ['Poseidon', 'Hades', 'Zeus', 'Apollo'],
    correctAnswer: 2,
    category: 'Mythology',
    difficulty: 'easy'
  },
  {
    id: '78',
    question: 'What is the name of Thor\'s hammer in Norse mythology?',
    type: 'type-answer',
    correctAnswer: 'mjolnir',
    category: 'Mythology',
    difficulty: 'medium'
  },
  {
    id: '79',
    question: 'In Egyptian mythology, who is the god of the afterlife?',
    type: 'type-answer',
    correctAnswer: 'osiris',
    category: 'Mythology',
    difficulty: 'hard'
  },

  // Language - Various Difficulties
  {
    id: '80',
    question: 'How do you say "hello" in Spanish?',
    type: 'type-answer',
    correctAnswer: 'hola',
    category: 'Language',
    difficulty: 'easy'
  },
  {
    id: '81',
    question: 'What is the most spoken language in the world?',
    type: 'multiple-choice',
    options: ['English', 'Mandarin Chinese', 'Spanish', 'Hindi'],
    correctAnswer: 1,
    category: 'Language',
    difficulty: 'medium'
  },
  {
    id: '82',
    question: 'Which language has the most native speakers?',
    type: 'type-answer',
    correctAnswer: 'mandarin',
    category: 'Language',
    difficulty: 'hard'
  }
];

export const getRandomQuestion = (difficulty?: 'easy' | 'medium' | 'hard'): TriviaQuestion => {
  let filteredQuestions = triviaQuestions;
  
  if (difficulty) {
    filteredQuestions = triviaQuestions.filter(q => q.difficulty === difficulty);
  }
  
  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  return filteredQuestions[randomIndex];
};

export const getQuestionByZone = (zone: number): TriviaQuestion => {
  // Easy questions for zones 1-3
  if (zone <= 3) {
    return getRandomQuestion('easy');
  }
  // Medium questions for zones 4-7
  else if (zone <= 7) {
    return getRandomQuestion('medium');
  }
  // Hard questions for zones 8+
  else {
    return getRandomQuestion('hard');
  }
};

export const checkAnswer = (question: TriviaQuestion, userAnswer: string | number): boolean => {
  if (question.type === 'multiple-choice') {
    return userAnswer === question.correctAnswer;
  } else {
    // Type answer - normalize both strings for comparison
    const normalizedUserAnswer = String(userAnswer).toLowerCase().trim();
    const normalizedCorrectAnswer = String(question.correctAnswer).toLowerCase().trim();
    return normalizedUserAnswer === normalizedCorrectAnswer;
  }
};