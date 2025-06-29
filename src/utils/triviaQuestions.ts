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
  {
    id: '100',
    question: 'What is the capital of Italy?',
    type: 'multiple-choice',
    options: ['Milan', 'Rome', 'Naples', 'Florence'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '101',
    question: 'Which country is known as the Land of the Rising Sun?',
    type: 'type-answer',
    correctAnswer: 'japan',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '102',
    question: 'What is the smallest continent?',
    type: 'multiple-choice',
    options: ['Europe', 'Antarctica', 'Australia', 'South America'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '103',
    question: 'Which river flows through London?',
    type: 'type-answer',
    correctAnswer: 'thames',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '104',
    question: 'What is the capital of Canada?',
    type: 'multiple-choice',
    options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
    correctAnswer: 2,
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
  {
    id: '105',
    question: 'What is the largest planet in our solar system?',
    type: 'multiple-choice',
    options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '106',
    question: 'What do bees make?',
    type: 'type-answer',
    correctAnswer: 'honey',
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '107',
    question: 'How many chambers does a human heart have?',
    type: 'multiple-choice',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '108',
    question: 'What is the hardest substance found in nature?',
    type: 'type-answer',
    correctAnswer: 'diamond',
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '109',
    question: 'Which organ in the human body produces insulin?',
    type: 'multiple-choice',
    options: ['Liver', 'Kidney', 'Pancreas', 'Heart'],
    correctAnswer: 2,
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
  {
    id: '110',
    question: 'What is 9 × 9?',
    type: 'multiple-choice',
    options: ['72', '81', '90', '99'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '111',
    question: 'What is 20 + 35?',
    type: 'type-answer',
    correctAnswer: '55',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '112',
    question: 'What is 8 × 8?',
    type: 'multiple-choice',
    options: ['56', '64', '72', '80'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '113',
    question: 'What is 45 ÷ 9?',
    type: 'type-answer',
    correctAnswer: '5',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '114',
    question: 'What is 12 + 18?',
    type: 'multiple-choice',
    options: ['28', '30', '32', '34'],
    correctAnswer: 1,
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
  {
    id: '115',
    question: 'What color do you get when you mix blue and yellow?',
    type: 'type-answer',
    correctAnswer: 'green',
    category: 'Art',
    difficulty: 'easy'
  },
  {
    id: '116',
    question: 'What are the three primary colors?',
    type: 'multiple-choice',
    options: ['Red, Blue, Green', 'Red, Blue, Yellow', 'Blue, Yellow, Orange', 'Red, Green, Purple'],
    correctAnswer: 1,
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
  {
    id: '117',
    question: 'Which ancient wonder was located in Egypt?',
    type: 'multiple-choice',
    options: ['Hanging Gardens', 'Great Pyramid', 'Colossus', 'Lighthouse'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '118',
    question: 'In which century did Christopher Columbus reach the Americas?',
    type: 'multiple-choice',
    options: ['14th', '15th', '16th', '17th'],
    correctAnswer: 1,
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
  {
    id: '119',
    question: 'How many players are on a soccer team on the field at one time?',
    type: 'multiple-choice',
    options: ['9', '10', '11', '12'],
    correctAnswer: 2,
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '120',
    question: 'In which sport do you use a racket and shuttlecock?',
    type: 'type-answer',
    correctAnswer: 'badminton',
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
  {
    id: '121',
    question: 'What is the chemical formula for table salt?',
    type: 'type-answer',
    correctAnswer: 'nacl',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '122',
    question: 'Which scientist developed the periodic table?',
    type: 'multiple-choice',
    options: ['Darwin', 'Mendeleev', 'Newton', 'Einstein'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '123',
    question: 'What is the process by which plants make their own food?',
    type: 'type-answer',
    correctAnswer: 'photosynthesis',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '124',
    question: 'Which planet has the most moons?',
    type: 'multiple-choice',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '125',
    question: 'What is the study of earthquakes called?',
    type: 'type-answer',
    correctAnswer: 'seismology',
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
  {
    id: '126',
    question: 'Which empire was ruled by Julius Caesar?',
    type: 'multiple-choice',
    options: ['Greek', 'Roman', 'Egyptian', 'Persian'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '127',
    question: 'In which year did World War I begin?',
    type: 'type-answer',
    correctAnswer: '1914',
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '128',
    question: 'Who was the first woman to win a Nobel Prize?',
    type: 'multiple-choice',
    options: ['Marie Curie', 'Rosalind Franklin', 'Dorothy Hodgkin', 'Lise Meitner'],
    correctAnswer: 0,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '129',
    question: 'Which revolution began in 1789?',
    type: 'type-answer',
    correctAnswer: 'french revolution',
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '130',
    question: 'Who was the leader of the Soviet Union during World War II?',
    type: 'multiple-choice',
    options: ['Lenin', 'Stalin', 'Khrushchev', 'Brezhnev'],
    correctAnswer: 1,
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
  {
    id: '131',
    question: 'Who wrote "Pride and Prejudice"?',
    type: 'multiple-choice',
    options: ['Charlotte Bronte', 'Emily Bronte', 'Jane Austen', 'George Eliot'],
    correctAnswer: 2,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '132',
    question: 'Which book features the character Atticus Finch?',
    type: 'type-answer',
    correctAnswer: 'to kill a mockingbird',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '133',
    question: 'Who wrote "1984"?',
    type: 'multiple-choice',
    options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'Kurt Vonnegut'],
    correctAnswer: 1,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '134',
    question: 'What is the first book in the Harry Potter series?',
    type: 'type-answer',
    correctAnswer: 'philosophers stone',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '135',
    question: 'Who wrote "The Great Gatsby"?',
    type: 'multiple-choice',
    options: ['Ernest Hemingway', 'F. Scott Fitzgerald', 'John Steinbeck', 'William Faulkner'],
    correctAnswer: 1,
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
  {
    id: '136',
    question: 'What is 25% of 80?',
    type: 'multiple-choice',
    options: ['15', '20', '25', '30'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '137',
    question: 'What is the square root of 169?',
    type: 'type-answer',
    correctAnswer: '13',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '138',
    question: 'What is 7 to the power of 2?',
    type: 'multiple-choice',
    options: ['14', '21', '49', '56'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '139',
    question: 'What is 144 ÷ 12?',
    type: 'type-answer',
    correctAnswer: '12',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '140',
    question: 'What is 30% of 150?',
    type: 'multiple-choice',
    options: ['35', '40', '45', '50'],
    correctAnswer: 2,
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
  {
    id: '141',
    question: 'What is the capital of Australia?',
    type: 'multiple-choice',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '142',
    question: 'Which desert is the largest in the world?',
    type: 'type-answer',
    correctAnswer: 'sahara',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '143',
    question: 'Which strait separates Europe and Africa?',
    type: 'multiple-choice',
    options: ['Bering Strait', 'Strait of Gibraltar', 'Strait of Hormuz', 'Bass Strait'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '144',
    question: 'What is the highest mountain in North America?',
    type: 'type-answer',
    correctAnswer: 'denali',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '145',
    question: 'Which country has the most time zones?',
    type: 'multiple-choice',
    options: ['Russia', 'United States', 'China', 'Canada'],
    correctAnswer: 0,
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
  {
    id: '146',
    question: 'What is the study of the structure and function of proteins called?',
    type: 'multiple-choice',
    options: ['Genomics', 'Proteomics', 'Metabolomics', 'Transcriptomics'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '147',
    question: 'Which scientist proposed the concept of natural selection?',
    type: 'type-answer',
    correctAnswer: 'darwin',
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '148',
    question: 'What is the name of the process by which DNA is copied?',
    type: 'multiple-choice',
    options: ['Transcription', 'Translation', 'Replication', 'Mutation'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '149',
    question: 'Which element has the atomic number 79?',
    type: 'type-answer',
    correctAnswer: 'gold',
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '150',
    question: 'What is the term for the bending of light as it passes through different media?',
    type: 'multiple-choice',
    options: ['Reflection', 'Refraction', 'Diffraction', 'Interference'],
    correctAnswer: 1,
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
  {
    id: '151',
    question: 'Which artist cut off his own ear?',
    type: 'multiple-choice',
    options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dali', 'Henri Matisse'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '152',
    question: 'Who painted the ceiling of the Sistine Chapel?',
    type: 'type-answer',
    correctAnswer: 'michelangelo',
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '153',
    question: 'Which art movement emphasized emotion and individualism?',
    type: 'multiple-choice',
    options: ['Classicism', 'Romanticism', 'Realism', 'Baroque'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '154',
    question: 'Who painted "Girl with a Pearl Earring"?',
    type: 'type-answer',
    correctAnswer: 'vermeer',
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '155',
    question: 'Which artist is known for the "Campbell\'s Soup Cans" artwork?',
    type: 'multiple-choice',
    options: ['Andy Warhol', 'Roy Lichtenstein', 'Jackson Pollock', 'Keith Haring'],
    correctAnswer: 0,
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
  {
    id: '156',
    question: 'What does "AI" stand for in technology?',
    type: 'multiple-choice',
    options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Integration', 'Algorithmic Interface'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '157',
    question: 'Which company developed the first commercial microprocessor?',
    type: 'type-answer',
    correctAnswer: 'intel',
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '158',
    question: 'What does "URL" stand for?',
    type: 'multiple-choice',
    options: ['Universal Resource Locator', 'Uniform Resource Locator', 'Universal Reference Link', 'Uniform Reference Locator'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '159',
    question: 'Which programming language is known for its use in data science?',
    type: 'type-answer',
    correctAnswer: 'python',
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '160',
    question: 'What does "SQL" stand for?',
    type: 'multiple-choice',
    options: ['Structured Query Language', 'Standard Query Language', 'Sequential Query Language', 'Simple Query Language'],
    correctAnswer: 0,
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
  {
    id: '161',
    question: 'What is the sum of the angles in a triangle?',
    type: 'multiple-choice',
    options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '162',
    question: 'What is the quadratic formula?',
    type: 'type-answer',
    correctAnswer: 'x = (-b ± √(b²-4ac)) / 2a',
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '163',
    question: 'What is the name of a polygon with 8 sides?',
    type: 'multiple-choice',
    options: ['Hexagon', 'Heptagon', 'Octagon', 'Nonagon'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '164',
    question: 'What is the factorial of 5?',
    type: 'type-answer',
    correctAnswer: '120',
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '165',
    question: 'What is the Pythagorean theorem?',
    type: 'multiple-choice',
    options: ['a² + b² = c²', 'a + b = c', 'a² - b² = c²', 'a × b = c'],
    correctAnswer: 0,
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
  {
    id: '166',
    question: 'Who said "I think, therefore I am"?',
    type: 'multiple-choice',
    options: ['Kant', 'Descartes', 'Hume', 'Locke'],
    correctAnswer: 1,
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '167',
    question: 'What is the study of ethics called?',
    type: 'type-answer',
    correctAnswer: 'moral philosophy',
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '168',
    question: 'Who wrote "Thus Spoke Zarathustra"?',
    type: 'multiple-choice',
    options: ['Kant', 'Hegel', 'Nietzsche', 'Schopenhauer'],
    correctAnswer: 2,
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
  {
    id: '169',
    question: 'How many keys are on a standard piano?',
    type: 'multiple-choice',
    options: ['76', '88', '96', '104'],
    correctAnswer: 1,
    category: 'Music',
    difficulty: 'medium'
  },
  {
    id: '170',
    question: 'Who composed "Moonlight Sonata"?',
    type: 'type-answer',
    correctAnswer: 'beethoven',
    category: 'Music',
    difficulty: 'hard'
  },
  {
    id: '171',
    question: 'What instrument does Yo-Yo Ma famously play?',
    type: 'multiple-choice',
    options: ['Violin', 'Cello', 'Piano', 'Flute'],
    correctAnswer: 1,
    category: 'Music',
    difficulty: 'medium'
  },
  {
    id: '172',
    question: 'How many beats are in a whole note?',
    type: 'type-answer',
    correctAnswer: '4',
    category: 'Music',
    difficulty: 'easy'
  },
  {
    id: '173',
    question: 'What does "piano" mean in musical terms?',
    type: 'multiple-choice',
    options: ['Fast', 'Slow', 'Loud', 'Soft'],
    correctAnswer: 3,
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
  {
    id: '174',
    question: 'Who played the main character in "Forrest Gump"?',
    type: 'multiple-choice',
    options: ['Tom Cruise', 'Tom Hanks', 'Brad Pitt', 'Leonardo DiCaprio'],
    correctAnswer: 1,
    category: 'Movies',
    difficulty: 'easy'
  },
  {
    id: '175',
    question: 'Which movie features the song "My Heart Will Go On"?',
    type: 'type-answer',
    correctAnswer: 'titanic',
    category: 'Movies',
    difficulty: 'medium'
  },
  {
    id: '176',
    question: 'Who directed "The Godfather"?',
    type: 'multiple-choice',
    options: ['Martin Scorsese', 'Francis Ford Coppola', 'Steven Spielberg', 'George Lucas'],
    correctAnswer: 1,
    category: 'Movies',
    difficulty: 'hard'
  },
  {
    id: '177',
    question: 'In which movie does the character say "I\'ll be back"?',
    type: 'type-answer',
    correctAnswer: 'terminator',
    category: 'Movies',
    difficulty: 'easy'
  },
  {
    id: '178',
    question: 'Which animated movie features the song "Let It Go"?',
    type: 'multiple-choice',
    options: ['Moana', 'Frozen', 'Tangled', 'The Little Mermaid'],
    correctAnswer: 1,
    category: 'Movies',
    difficulty: 'medium'
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
  {
    id: '179',
    question: 'What type of pastry is used to make profiteroles?',
    type: 'multiple-choice',
    options: ['Puff pastry', 'Choux pastry', 'Filo pastry', 'Shortcrust pastry'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'hard'
  },
  {
    id: '180',
    question: 'Which fruit is known as the "king of fruits"?',
    type: 'type-answer',
    correctAnswer: 'durian',
    category: 'Food',
    difficulty: 'medium'
  },
  {
    id: '181',
    question: 'What is the main ingredient in hummus?',
    type: 'multiple-choice',
    options: ['Lentils', 'Chickpeas', 'Black beans', 'Kidney beans'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '182',
    question: 'Which country is famous for inventing pizza?',
    type: 'type-answer',
    correctAnswer: 'italy',
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '183',
    question: 'What is the hottest part of a chili pepper?',
    type: 'multiple-choice',
    options: ['The skin', 'The seeds', 'The flesh', 'The stem'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'medium'
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
  {
    id: '184',
    question: 'Which animal is known as the "Ship of the Desert"?',
    type: 'multiple-choice',
    options: ['Horse', 'Camel', 'Elephant', 'Donkey'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '185',
    question: 'How many legs does a lobster have?',
    type: 'type-answer',
    correctAnswer: '10',
    category: 'Animals',
    difficulty: 'medium'
  },
  {
    id: '186',
    question: 'Which bird is known for its ability to mimic human speech?',
    type: 'multiple-choice',
    options: ['Eagle', 'Parrot', 'Owl', 'Hawk'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '187',
    question: 'What is the fastest land animal?',
    type: 'type-answer',
    correctAnswer: 'cheetah',
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '188',
    question: 'Which animal has the longest lifespan?',
    type: 'multiple-choice',
    options: ['Elephant', 'Tortoise', 'Whale', 'Parrot'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'medium'
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
  {
    id: '189',
    question: 'Which planet has the most rings?',
    type: 'multiple-choice',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correctAnswer: 1,
    category: 'Space',
    difficulty: 'medium'
  },
  {
    id: '190',
    question: 'What is the name of our galaxy?',
    type: 'type-answer',
    correctAnswer: 'milky way',
    category: 'Space',
    difficulty: 'easy'
  },
  {
    id: '191',
    question: 'Which planet is the hottest in our solar system?',
    type: 'multiple-choice',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    correctAnswer: 1,
    category: 'Space',
    difficulty: 'medium'
  },
  {
    id: '192',
    question: 'What is the name of the first artificial satellite?',
    type: 'type-answer',
    correctAnswer: 'sputnik',
    category: 'Space',
    difficulty: 'hard'
  },
  {
    id: '193',
    question: 'How long does it take for light from the Sun to reach Earth?',
    type: 'multiple-choice',
    options: ['8 minutes', '8 hours', '8 days', '8 seconds'],
    correctAnswer: 0,
    category: 'Space',
    difficulty: 'medium'
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
  {
    id: '194',
    question: 'Who is the Greek goddess of wisdom?',
    type: 'multiple-choice',
    options: ['Hera', 'Athena', 'Aphrodite', 'Artemis'],
    correctAnswer: 1,
    category: 'Mythology',
    difficulty: 'easy'
  },
  {
    id: '195',
    question: 'In Roman mythology, who is the god of war?',
    type: 'type-answer',
    correctAnswer: 'mars',
    category: 'Mythology',
    difficulty: 'medium'
  },
  {
    id: '196',
    question: 'What creature has the head of a lion, body of a goat, and tail of a serpent?',
    type: 'multiple-choice',
    options: ['Griffin', 'Chimera', 'Sphinx', 'Manticore'],
    correctAnswer: 1,
    category: 'Mythology',
    difficulty: 'hard'
  },
  {
    id: '197',
    question: 'Who opened the box that released all evils into the world?',
    type: 'type-answer',
    correctAnswer: 'pandora',
    category: 'Mythology',
    difficulty: 'medium'
  },
  {
    id: '198',
    question: 'In Norse mythology, what is the name of the world tree?',
    type: 'multiple-choice',
    options: ['Yggdrasil', 'Bifrost', 'Asgard', 'Midgard'],
    correctAnswer: 0,
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
  },
  {
    id: '199',
    question: 'How do you say "thank you" in French?',
    type: 'multiple-choice',
    options: ['Bonjour', 'Merci', 'Au revoir', 'Excusez-moi'],
    correctAnswer: 1,
    category: 'Language',
    difficulty: 'easy'
  },
  {
    id: '200',
    question: 'What does "sayonara" mean in Japanese?',
    type: 'type-answer',
    correctAnswer: 'goodbye',
    category: 'Language',
    difficulty: 'medium'
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
  // Now returns completely random questions regardless of zone
  const randomIndex = Math.floor(Math.random() * triviaQuestions.length);
  return triviaQuestions[randomIndex];
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