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
    options: ['China', 'Canada', 'Russia', 'Brazil'],
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
    id: '200',
    question: 'What is the capital of Australia?',
    type: 'multiple-choice',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '201',
    question: 'Which continent is Brazil in?',
    type: 'multiple-choice',
    options: ['North America', 'South America', 'Africa', 'Asia'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '202',
    question: 'What is the capital of Germany?',
    type: 'type-answer',
    correctAnswer: 'berlin',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '203',
    question: 'Which country has the most time zones?',
    type: 'multiple-choice',
    options: ['Russia', 'China', 'Canada', 'Brazil'],
    correctAnswer: 0,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '204',
    question: 'What is the smallest continent?',
    type: 'type-answer',
    correctAnswer: 'australia',
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
    id: '205',
    question: 'What is the largest organ in the human body?',
    type: 'multiple-choice',
    options: ['Heart', 'Brain', 'Liver', 'Skin'],
    correctAnswer: 3,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '206',
    question: 'How many chambers does a human heart have?',
    type: 'multiple-choice',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '207',
    question: 'What is the chemical symbol for gold?',
    type: 'type-answer',
    correctAnswer: 'au',
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '208',
    question: 'Which blood type is known as the universal donor?',
    type: 'multiple-choice',
    options: ['A', 'B', 'AB', 'O'],
    correctAnswer: 3,
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
    id: '209',
    question: 'What is 9 × 9?',
    type: 'multiple-choice',
    options: ['72', '81', '90', '99'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '210',
    question: 'What is 144 ÷ 12?',
    type: 'type-answer',
    correctAnswer: '12',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '211',
    question: 'What is 8 + 15?',
    type: 'multiple-choice',
    options: ['21', '22', '23', '24'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '212',
    question: 'What is 20 - 13?',
    type: 'type-answer',
    correctAnswer: '7',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '213',
    question: 'What is 5 × 8?',
    type: 'multiple-choice',
    options: ['35', '40', '45', '50'],
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
    id: '214',
    question: 'What color do you get when you mix blue and yellow?',
    type: 'multiple-choice',
    options: ['Purple', 'Green', 'Orange', 'Pink'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'easy'
  },
  {
    id: '215',
    question: 'What are the three primary colors?',
    type: 'multiple-choice',
    options: ['Red, Blue, Green', 'Red, Blue, Yellow', 'Blue, Yellow, Orange', 'Red, Green, Purple'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'easy'
  },

  // History - Easy (Global)
  {
    id: '216',
    question: 'In which year did World War II end?',
    type: 'multiple-choice',
    options: ['1944', '1945', '1946', '1947'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '217',
    question: 'Which ancient wonder was located in Egypt?',
    type: 'multiple-choice',
    options: ['Hanging Gardens', 'Great Pyramid', 'Colossus', 'Lighthouse'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '218',
    question: 'In which year did the Titanic sink?',
    type: 'multiple-choice',
    options: ['1910', '1911', '1912', '1913'],
    correctAnswer: 2,
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '219',
    question: 'Which empire was ruled by Julius Caesar?',
    type: 'type-answer',
    correctAnswer: 'roman',
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '220',
    question: 'In which century did the Renaissance begin?',
    type: 'multiple-choice',
    options: ['13th', '14th', '15th', '16th'],
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
    id: '221',
    question: 'How many players are on a football (soccer) team on the field?',
    type: 'multiple-choice',
    options: ['9', '10', '11', '12'],
    correctAnswer: 2,
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '222',
    question: 'In which sport do you use a racket and shuttlecock?',
    type: 'type-answer',
    correctAnswer: 'badminton',
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '223',
    question: 'How many holes are there in a standard golf course?',
    type: 'multiple-choice',
    options: ['16', '17', '18', '19'],
    correctAnswer: 2,
    category: 'Sports',
    difficulty: 'easy'
  },

  // MEDIUM QUESTIONS
  // Science - Medium
  {
    id: '11',
    question: 'What is the chemical symbol for silver?',
    type: 'multiple-choice',
    options: ['Si', 'Ag', 'Au', 'Al'],
    correctAnswer: 1,
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
    question: 'Which element has the atomic number 1?',
    type: 'multiple-choice',
    options: ['Helium', 'Hydrogen', 'Lithium', 'Carbon'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '40',
    question: 'What is the largest planet in our solar system?',
    type: 'type-answer',
    correctAnswer: 'jupiter',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '224',
    question: 'What is the chemical formula for table salt?',
    type: 'multiple-choice',
    options: ['NaCl', 'KCl', 'CaCl2', 'MgCl2'],
    correctAnswer: 0,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '225',
    question: 'How many chromosomes do humans have?',
    type: 'multiple-choice',
    options: ['44', '45', '46', '47'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '226',
    question: 'What is the study of earthquakes called?',
    type: 'type-answer',
    correctAnswer: 'seismology',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '227',
    question: 'Which gas makes up about 78% of Earth\'s atmosphere?',
    type: 'multiple-choice',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '228',
    question: 'What is the powerhouse of the cell?',
    type: 'type-answer',
    correctAnswer: 'mitochondria',
    category: 'Science',
    difficulty: 'medium'
  },

  // History - Medium (Global)
  {
    id: '12',
    question: 'In which year did World War I begin?',
    type: 'multiple-choice',
    options: ['1913', '1914', '1915', '1916'],
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
    id: '229',
    question: 'Which empire was founded by Genghis Khan?',
    type: 'multiple-choice',
    options: ['Ottoman Empire', 'Mongol Empire', 'Byzantine Empire', 'Persian Empire'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '230',
    question: 'In which year did the French Revolution begin?',
    type: 'multiple-choice',
    options: ['1787', '1788', '1789', '1790'],
    correctAnswer: 2,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '231',
    question: 'Which ancient civilization built Machu Picchu?',
    type: 'type-answer',
    correctAnswer: 'inca',
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '232',
    question: 'In which century did the Black Death occur?',
    type: 'multiple-choice',
    options: ['13th', '14th', '15th', '16th'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '233',
    question: 'Which explorer is credited with circumnavigating the globe?',
    type: 'type-answer',
    correctAnswer: 'magellan',
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '234',
    question: 'The Rosetta Stone helped decipher which ancient script?',
    type: 'multiple-choice',
    options: ['Cuneiform', 'Hieroglyphics', 'Linear A', 'Sanskrit'],
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
    id: '235',
    question: 'Who wrote "1984"?',
    type: 'multiple-choice',
    options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'H.G. Wells'],
    correctAnswer: 1,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '236',
    question: 'Which author created the character Sherlock Holmes?',
    type: 'type-answer',
    correctAnswer: 'arthur conan doyle',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '237',
    question: 'Who wrote "Pride and Prejudice"?',
    type: 'multiple-choice',
    options: ['Charlotte Brontë', 'Emily Brontë', 'Jane Austen', 'George Eliot'],
    correctAnswer: 2,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '238',
    question: 'Which epic poem tells the story of Odysseus?',
    type: 'type-answer',
    correctAnswer: 'the odyssey',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '239',
    question: 'Who wrote "One Hundred Years of Solitude"?',
    type: 'multiple-choice',
    options: ['Gabriel García Márquez', 'Jorge Luis Borges', 'Pablo Neruda', 'Octavio Paz'],
    correctAnswer: 0,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '240',
    question: 'Which novel features the character Atticus Finch?',
    type: 'type-answer',
    correctAnswer: 'to kill a mockingbird',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '241',
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
    id: '242',
    question: 'What is 8²?',
    type: 'multiple-choice',
    options: ['56', '64', '72', '80'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '243',
    question: 'What is 25% of 80?',
    type: 'type-answer',
    correctAnswer: '20',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '244',
    question: 'What is the square root of 169?',
    type: 'multiple-choice',
    options: ['11', '12', '13', '14'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '245',
    question: 'What is 7³ (7 cubed)?',
    type: 'type-answer',
    correctAnswer: '343',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '246',
    question: 'What is 144 ÷ 16?',
    type: 'multiple-choice',
    options: ['8', '9', '10', '11'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '247',
    question: 'What is 12 × 15?',
    type: 'type-answer',
    correctAnswer: '180',
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
    id: '248',
    question: 'What is the capital of Canada?',
    type: 'multiple-choice',
    options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '249',
    question: 'Which desert is the largest in the world?',
    type: 'multiple-choice',
    options: ['Sahara', 'Gobi', 'Antarctica', 'Arabian'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '250',
    question: 'What is the capital of Brazil?',
    type: 'type-answer',
    correctAnswer: 'brasilia',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '251',
    question: 'Which strait separates Europe and Asia?',
    type: 'multiple-choice',
    options: ['Strait of Gibraltar', 'Bosphorus', 'Strait of Hormuz', 'Strait of Malacca'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '252',
    question: 'What is the highest mountain in Africa?',
    type: 'type-answer',
    correctAnswer: 'kilimanjaro',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '253',
    question: 'Which country has the most natural lakes?',
    type: 'multiple-choice',
    options: ['Russia', 'Canada', 'Finland', 'Sweden'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '254',
    question: 'What is the deepest ocean trench?',
    type: 'type-answer',
    correctAnswer: 'mariana trench',
    category: 'Geography',
    difficulty: 'medium'
  },

  // HARD QUESTIONS
  // Science - Hard
  {
    id: '13',
    question: 'What is the name of the process by which plants make food?',
    type: 'multiple-choice',
    options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Germination'],
    correctAnswer: 1,
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
    question: 'What is the most abundant element in the universe?',
    type: 'multiple-choice',
    options: ['Oxygen', 'Carbon', 'Hydrogen', 'Helium'],
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
    id: '255',
    question: 'What is the study of fungi called?',
    type: 'multiple-choice',
    options: ['Mycology', 'Botany', 'Zoology', 'Ecology'],
    correctAnswer: 0,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '256',
    question: 'What is the half-life of Carbon-14?',
    type: 'multiple-choice',
    options: ['5,730 years', '10,000 years', '1,000 years', '50,000 years'],
    correctAnswer: 0,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '257',
    question: 'Which scientist proposed the laws of planetary motion?',
    type: 'type-answer',
    correctAnswer: 'kepler',
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '258',
    question: 'What is the name of the effect that causes moving clocks to run slower?',
    type: 'multiple-choice',
    options: ['Doppler Effect', 'Time Dilation', 'Redshift', 'Gravitational Lensing'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '259',
    question: 'What is the chemical name for vitamin C?',
    type: 'type-answer',
    correctAnswer: 'ascorbic acid',
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
    id: '260',
    question: 'Which artist painted "Guernica"?',
    type: 'multiple-choice',
    options: ['Salvador Dalí', 'Pablo Picasso', 'Joan Miró', 'Francisco Goya'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '261',
    question: 'Who painted "The Persistence of Memory"?',
    type: 'type-answer',
    correctAnswer: 'salvador dali',
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '262',
    question: 'Which Renaissance artist painted the ceiling of the Sistine Chapel?',
    type: 'multiple-choice',
    options: ['Leonardo da Vinci', 'Raphael', 'Michelangelo', 'Donatello'],
    correctAnswer: 2,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '263',
    question: 'What art movement did Claude Monet help found?',
    type: 'type-answer',
    correctAnswer: 'impressionism',
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '264',
    question: 'Who painted "The Birth of Venus"?',
    type: 'multiple-choice',
    options: ['Leonardo da Vinci', 'Michelangelo', 'Sandro Botticelli', 'Raphael'],
    correctAnswer: 2,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '265',
    question: 'Which artist cut off his own ear?',
    type: 'type-answer',
    correctAnswer: 'van gogh',
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '266',
    question: 'What technique did Georges Seurat use in his paintings?',
    type: 'multiple-choice',
    options: ['Pointillism', 'Cubism', 'Fauvism', 'Expressionism'],
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
    id: '267',
    question: 'What does "CPU" stand for?',
    type: 'multiple-choice',
    options: ['Central Processing Unit', 'Computer Processing Unit', 'Central Program Unit', 'Computer Program Unit'],
    correctAnswer: 0,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '268',
    question: 'Who invented the World Wide Web?',
    type: 'type-answer',
    correctAnswer: 'tim berners-lee',
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '269',
    question: 'What does "AI" stand for in technology?',
    type: 'multiple-choice',
    options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Intelligence', 'Algorithmic Intelligence'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '270',
    question: 'Which company developed the first commercial microprocessor?',
    type: 'type-answer',
    correctAnswer: 'intel',
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '271',
    question: 'What does "RAM" stand for?',
    type: 'multiple-choice',
    options: ['Random Access Memory', 'Rapid Access Memory', 'Read Access Memory', 'Real Access Memory'],
    correctAnswer: 0,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '272',
    question: 'Who co-founded Apple Computer?',
    type: 'type-answer',
    correctAnswer: 'steve jobs',
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '273',
    question: 'What does "URL" stand for?',
    type: 'multiple-choice',
    options: ['Universal Resource Locator', 'Uniform Resource Locator', 'Universal Reference Link', 'Uniform Reference Link'],
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
  {
    id: '274',
    question: 'What is the sum of angles in a triangle?',
    type: 'multiple-choice',
    options: ['90°', '180°', '270°', '360°'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '275',
    question: 'What is the quadratic formula?',
    type: 'multiple-choice',
    options: ['x = (-b ± √(b²-4ac))/2a', 'x = (b ± √(b²+4ac))/2a', 'x = (-b ± √(b²+4ac))/2a', 'x = (b ± √(b²-4ac))/2a'],
    correctAnswer: 0,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '276',
    question: 'What is the factorial of 5?',
    type: 'type-answer',
    correctAnswer: '120',
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '277',
    question: 'What is the area of a circle with radius 5?',
    type: 'multiple-choice',
    options: ['25π', '10π', '5π', '50π'],
    correctAnswer: 0,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '278',
    question: 'What is the slope of a line perpendicular to y = 2x + 3?',
    type: 'type-answer',
    correctAnswer: '-1/2',
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '279',
    question: 'What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ?',
    type: 'multiple-choice',
    options: ['11', '12', '13', '14'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '280',
    question: 'What is log₁₀(1000)?',
    type: 'type-answer',
    correctAnswer: '3',
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
    id: '281',
    question: 'Who wrote "Critique of Pure Reason"?',
    type: 'multiple-choice',
    options: ['Immanuel Kant', 'Georg Hegel', 'Friedrich Nietzsche', 'Arthur Schopenhauer'],
    correctAnswer: 0,
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '282',
    question: 'What is the study of ethics called?',
    type: 'type-answer',
    correctAnswer: 'moral philosophy',
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '283',
    question: 'Who said "I think, therefore I am"?',
    type: 'multiple-choice',
    options: ['René Descartes', 'John Locke', 'David Hume', 'Baruch Spinoza'],
    correctAnswer: 0,
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '284',
    question: 'What is the philosophical study of being called?',
    type: 'type-answer',
    correctAnswer: 'ontology',
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '285',
    question: 'Who wrote "Being and Time"?',
    type: 'multiple-choice',
    options: ['Martin Heidegger', 'Jean-Paul Sartre', 'Edmund Husserl', 'Maurice Merleau-Ponty'],
    correctAnswer: 0,
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '286',
    question: 'What is utilitarianism?',
    type: 'multiple-choice',
    options: ['Greatest good for greatest number', 'Duty-based ethics', 'Virtue ethics', 'Divine command theory'],
    correctAnswer: 0,
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '287',
    question: 'Who developed the categorical imperative?',
    type: 'type-answer',
    correctAnswer: 'kant',
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '288',
    question: 'What is nihilism?',
    type: 'multiple-choice',
    options: ['Life has no inherent meaning', 'God exists', 'Knowledge is impossible', 'Reality is an illusion'],
    correctAnswer: 0,
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
    id: '289',
    question: 'How many keys are on a standard piano?',
    type: 'multiple-choice',
    options: ['86', '87', '88', '89'],
    correctAnswer: 2,
    category: 'Music',
    difficulty: 'easy'
  },
  {
    id: '290',
    question: 'Who composed "The Magic Flute"?',
    type: 'multiple-choice',
    options: ['Bach', 'Mozart', 'Beethoven', 'Haydn'],
    correctAnswer: 1,
    category: 'Music',
    difficulty: 'medium'
  },
  {
    id: '291',
    question: 'What does "pianissimo" mean in music?',
    type: 'type-answer',
    correctAnswer: 'very soft',
    category: 'Music',
    difficulty: 'hard'
  },
  {
    id: '292',
    question: 'How many beats are in a whole note?',
    type: 'multiple-choice',
    options: ['2', '3', '4', '8'],
    correctAnswer: 2,
    category: 'Music',
    difficulty: 'easy'
  },
  {
    id: '293',
    question: 'Who composed "Für Elise"?',
    type: 'type-answer',
    correctAnswer: 'beethoven',
    category: 'Music',
    difficulty: 'medium'
  },
  {
    id: '294',
    question: 'What is the highest female singing voice?',
    type: 'multiple-choice',
    options: ['Alto', 'Soprano', 'Mezzo-soprano', 'Contralto'],
    correctAnswer: 1,
    category: 'Music',
    difficulty: 'hard'
  },
  {
    id: '295',
    question: 'How many lines are in a musical staff?',
    type: 'type-answer',
    correctAnswer: '5',
    category: 'Music',
    difficulty: 'easy'
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
    id: '296',
    question: 'Who directed "The Godfather"?',
    type: 'multiple-choice',
    options: ['Martin Scorsese', 'Francis Ford Coppola', 'Steven Spielberg', 'George Lucas'],
    correctAnswer: 1,
    category: 'Movies',
    difficulty: 'medium'
  },
  {
    id: '297',
    question: 'Which movie features the character Jack Sparrow?',
    type: 'type-answer',
    correctAnswer: 'pirates of the caribbean',
    category: 'Movies',
    difficulty: 'easy'
  },
  {
    id: '298',
    question: 'Who played the Joker in "The Dark Knight"?',
    type: 'multiple-choice',
    options: ['Jack Nicholson', 'Heath Ledger', 'Joaquin Phoenix', 'Jared Leto'],
    correctAnswer: 1,
    category: 'Movies',
    difficulty: 'hard'
  },
  {
    id: '299',
    question: 'Which movie features the song "My Heart Will Go On"?',
    type: 'type-answer',
    correctAnswer: 'titanic',
    category: 'Movies',
    difficulty: 'easy'
  },
  {
    id: '300',
    question: 'Who directed "Pulp Fiction"?',
    type: 'multiple-choice',
    options: ['Quentin Tarantino', 'Martin Scorsese', 'David Lynch', 'Coen Brothers'],
    correctAnswer: 0,
    category: 'Movies',
    difficulty: 'medium'
  },
  {
    id: '301',
    question: 'Which actor played Forrest Gump?',
    type: 'type-answer',
    correctAnswer: 'tom hanks',
    category: 'Movies',
    difficulty: 'easy'
  },
  {
    id: '302',
    question: 'Who directed "2001: A Space Odyssey"?',
    type: 'multiple-choice',
    options: ['Stanley Kubrick', 'Ridley Scott', 'George Lucas', 'Steven Spielberg'],
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
  {
    id: '303',
    question: 'What type of pastry is used to make profiteroles?',
    type: 'multiple-choice',
    options: ['Puff pastry', 'Choux pastry', 'Filo pastry', 'Shortcrust pastry'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'medium'
  },
  {
    id: '304',
    question: 'Which country is famous for inventing pizza?',
    type: 'type-answer',
    correctAnswer: 'italy',
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '305',
    question: 'What is the main ingredient in hummus?',
    type: 'multiple-choice',
    options: ['Lentils', 'Chickpeas', 'Black beans', 'Kidney beans'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '306',
    question: 'What does "al dente" mean in cooking?',
    type: 'type-answer',
    correctAnswer: 'to the tooth',
    category: 'Food',
    difficulty: 'hard'
  },
  {
    id: '307',
    question: 'Which herb is traditionally used in pesto?',
    type: 'multiple-choice',
    options: ['Oregano', 'Basil', 'Thyme', 'Rosemary'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'medium'
  },
  {
    id: '308',
    question: 'What is the most consumed beverage in the world after water?',
    type: 'type-answer',
    correctAnswer: 'tea',
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '309',
    question: 'What is the Scoville scale used to measure?',
    type: 'multiple-choice',
    options: ['Sweetness', 'Spiciness', 'Acidity', 'Bitterness'],
    correctAnswer: 1,
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
  {
    id: '310',
    question: 'Which animal is known as the "King of the Jungle"?',
    type: 'multiple-choice',
    options: ['Tiger', 'Lion', 'Leopard', 'Cheetah'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '311',
    question: 'How many legs does a lobster have?',
    type: 'multiple-choice',
    options: ['6', '8', '10', '12'],
    correctAnswer: 2,
    category: 'Animals',
    difficulty: 'medium'
  },
  {
    id: '312',
    question: 'What is the fastest land animal?',
    type: 'type-answer',
    correctAnswer: 'cheetah',
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '313',
    question: 'Which animal has the longest lifespan?',
    type: 'multiple-choice',
    options: ['Elephant', 'Tortoise', 'Whale', 'Greenland Shark'],
    correctAnswer: 3,
    category: 'Animals',
    difficulty: 'hard'
  },
  {
    id: '314',
    question: 'What is a baby kangaroo called?',
    type: 'type-answer',
    correctAnswer: 'joey',
    category: 'Animals',
    difficulty: 'medium'
  },
  {
    id: '315',
    question: 'Which bird cannot fly?',
    type: 'multiple-choice',
    options: ['Eagle', 'Penguin', 'Hawk', 'Owl'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '316',
    question: 'What is the collective noun for a group of wolves?',
    type: 'type-answer',
    correctAnswer: 'pack',
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
    id: '317',
    question: 'Which planet has the most moons?',
    type: 'multiple-choice',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correctAnswer: 1,
    category: 'Space',
    difficulty: 'medium'
  },
  {
    id: '318',
    question: 'What is the name of our galaxy?',
    type: 'type-answer',
    correctAnswer: 'milky way',
    category: 'Space',
    difficulty: 'easy'
  },
  {
    id: '319',
    question: 'Which planet is the hottest in our solar system?',
    type: 'multiple-choice',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    correctAnswer: 1,
    category: 'Space',
    difficulty: 'medium'
  },
  {
    id: '320',
    question: 'What is the name of the first artificial satellite?',
    type: 'type-answer',
    correctAnswer: 'sputnik',
    category: 'Space',
    difficulty: 'hard'
  },
  {
    id: '321',
    question: 'How long does it take for light from the Sun to reach Earth?',
    type: 'multiple-choice',
    options: ['8 minutes', '8 hours', '8 days', '8 seconds'],
    correctAnswer: 0,
    category: 'Space',
    difficulty: 'medium'
  },
  {
    id: '322',
    question: 'Which planet has rings?',
    type: 'type-answer',
    correctAnswer: 'saturn',
    category: 'Space',
    difficulty: 'easy'
  },
  {
    id: '323',
    question: 'What is the largest moon in our solar system?',
    type: 'multiple-choice',
    options: ['Europa', 'Titan', 'Ganymede', 'Callisto'],
    correctAnswer: 2,
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
  {
    id: '324',
    question: 'Who is the Greek goddess of wisdom?',
    type: 'multiple-choice',
    options: ['Hera', 'Athena', 'Aphrodite', 'Artemis'],
    correctAnswer: 1,
    category: 'Mythology',
    difficulty: 'easy'
  },
  {
    id: '325',
    question: 'In Roman mythology, who is the god of war?',
    type: 'type-answer',
    correctAnswer: 'mars',
    category: 'Mythology',
    difficulty: 'medium'
  },
  {
    id: '326',
    question: 'What creature has the head of a lion, body of a goat, and tail of a serpent?',
    type: 'multiple-choice',
    options: ['Griffin', 'Chimera', 'Sphinx', 'Manticore'],
    correctAnswer: 1,
    category: 'Mythology',
    difficulty: 'hard'
  },
  {
    id: '327',
    question: 'Who is the Norse god of thunder?',
    type: 'type-answer',
    correctAnswer: 'thor',
    category: 'Mythology',
    difficulty: 'easy'
  },
  {
    id: '328',
    question: 'In Greek mythology, who opened the box that released evil into the world?',
    type: 'multiple-choice',
    options: ['Pandora', 'Persephone', 'Psyche', 'Penelope'],
    correctAnswer: 0,
    category: 'Mythology',
    difficulty: 'medium'
  },
  {
    id: '329',
    question: 'What is the name of the nine-headed serpent in Greek mythology?',
    type: 'type-answer',
    correctAnswer: 'hydra',
    category: 'Mythology',
    difficulty: 'hard'
  },
  {
    id: '330',
    question: 'Who is the Roman equivalent of the Greek god Zeus?',
    type: 'multiple-choice',
    options: ['Mars', 'Jupiter', 'Neptune', 'Apollo'],
    correctAnswer: 1,
    category: 'Mythology',
    difficulty: 'medium'
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
    id: '331',
    question: 'How do you say "thank you" in French?',
    type: 'multiple-choice',
    options: ['Merci', 'Gracias', 'Danke', 'Grazie'],
    correctAnswer: 0,
    category: 'Language',
    difficulty: 'easy'
  },
  {
    id: '332',
    question: 'What does "sayonara" mean in Japanese?',
    type: 'type-answer',
    correctAnswer: 'goodbye',
    category: 'Language',
    difficulty: 'medium'
  },
  {
    id: '333',
    question: 'Which language uses the Cyrillic alphabet?',
    type: 'multiple-choice',
    options: ['Greek', 'Russian', 'Arabic', 'Hebrew'],
    correctAnswer: 1,
    category: 'Language',
    difficulty: 'hard'
  },
  {
    id: '334',
    question: 'How do you say "water" in German?',
    type: 'type-answer',
    correctAnswer: 'wasser',
    category: 'Language',
    difficulty: 'easy'
  },
  {
    id: '335',
    question: 'What is the official language of Brazil?',
    type: 'multiple-choice',
    options: ['Spanish', 'Portuguese', 'French', 'Italian'],
    correctAnswer: 1,
    category: 'Language',
    difficulty: 'medium'
  },
  {
    id: '336',
    question: 'Which language family does English belong to?',
    type: 'type-answer',
    correctAnswer: 'germanic',
    category: 'Language',
    difficulty: 'hard'
  },
  {
    id: '337',
    question: 'How many official languages does Switzerland have?',
    type: 'multiple-choice',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    category: 'Language',
    difficulty: 'medium'
  },

  // Nature - Various Difficulties
  {
    id: '338',
    question: 'What is the tallest tree species in the world?',
    type: 'multiple-choice',
    options: ['Oak', 'Pine', 'Redwood', 'Eucalyptus'],
    correctAnswer: 2,
    category: 'Nature',
    difficulty: 'easy'
  },
  {
    id: '339',
    question: 'Which flower is known as the "king of flowers"?',
    type: 'type-answer',
    correctAnswer: 'rose',
    category: 'Nature',
    difficulty: 'medium'
  },
  {
    id: '340',
    question: 'What is the study of plants called?',
    type: 'multiple-choice',
    options: ['Zoology', 'Botany', 'Geology', 'Ecology'],
    correctAnswer: 1,
    category: 'Nature',
    difficulty: 'hard'
  },
  {
    id: '341',
    question: 'Which season comes after winter?',
    type: 'type-answer',
    correctAnswer: 'spring',
    category: 'Nature',
    difficulty: 'easy'
  },
  {
    id: '342',
    question: 'What is the largest rainforest in the world?',
    type: 'multiple-choice',
    options: ['Congo', 'Amazon', 'Taiga', 'Daintree'],
    correctAnswer: 1,
    category: 'Nature',
    difficulty: 'medium'
  },
  {
    id: '343',
    question: 'What is the process by which water changes from liquid to gas?',
    type: 'type-answer',
    correctAnswer: 'evaporation',
    category: 'Nature',
    difficulty: 'hard'
  },
  {
    id: '344',
    question: 'Which natural disaster is measured by the Richter scale?',
    type: 'multiple-choice',
    options: ['Tornado', 'Hurricane', 'Earthquake', 'Flood'],
    correctAnswer: 2,
    category: 'Nature',
    difficulty: 'easy'
  },
  {
    id: '345',
    question: 'What is the hardest natural mineral?',
    type: 'type-answer',
    correctAnswer: 'diamond',
    category: 'Nature',
    difficulty: 'medium'
  },
  {
    id: '346',
    question: 'What is the study of weather called?',
    type: 'multiple-choice',
    options: ['Meteorology', 'Climatology', 'Geology', 'Astronomy'],
    correctAnswer: 0,
    category: 'Nature',
    difficulty: 'hard'
  },
  {
    id: '347',
    question: 'Which gas do plants release during photosynthesis?',
    type: 'type-answer',
    correctAnswer: 'oxygen',
    category: 'Nature',
    difficulty: 'easy'
  },

  // General Knowledge - Various Difficulties
  {
    id: '348',
    question: 'How many days are in a leap year?',
    type: 'multiple-choice',
    options: ['364', '365', '366', '367'],
    correctAnswer: 2,
    category: 'General Knowledge',
    difficulty: 'easy'
  },
  {
    id: '349',
    question: 'What is the currency of Japan?',
    type: 'type-answer',
    correctAnswer: 'yen',
    category: 'General Knowledge',
    difficulty: 'medium'
  },
  {
    id: '350',
    question: 'What does "www" stand for?',
    type: 'multiple-choice',
    options: ['World Wide Web', 'World Wide Website', 'World Web Wide', 'Wide World Web'],
    correctAnswer: 0,
    category: 'General Knowledge',
    difficulty: 'hard'
  },
  {
    id: '351',
    question: 'How many minutes are in an hour?',
    type: 'type-answer',
    correctAnswer: '60',
    category: 'General Knowledge',
    difficulty: 'easy'
  },
  {
    id: '352',
    question: 'What is the international emergency telephone number?',
    type: 'multiple-choice',
    options: ['911', '999', '112', 'All of the above'],
    correctAnswer: 3,
    category: 'General Knowledge',
    difficulty: 'medium'
  },
  {
    id: '353',
    question: 'What does "PhD" stand for?',
    type: 'type-answer',
    correctAnswer: 'doctor of philosophy',
    category: 'General Knowledge',
    difficulty: 'hard'
  },
  {
    id: '354',
    question: 'How many sides does a hexagon have?',
    type: 'multiple-choice',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    category: 'General Knowledge',
    difficulty: 'easy'
  },
  {
    id: '355',
    question: 'What is the largest ocean on Earth?',
    type: 'type-answer',
    correctAnswer: 'pacific',
    category: 'General Knowledge',
    difficulty: 'medium'
  },
  {
    id: '356',
    question: 'What is the study of the universe called?',
    type: 'multiple-choice',
    options: ['Astronomy', 'Astrology', 'Cosmology', 'Physics'],
    correctAnswer: 2,
    category: 'General Knowledge',
    difficulty: 'hard'
  },
  {
    id: '357',
    question: 'How many continents are there?',
    type: 'type-answer',
    correctAnswer: '7',
    category: 'General Knowledge',
    difficulty: 'easy'
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
  // Now questions can be any difficulty regardless of zone
  return getRandomQuestion();
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