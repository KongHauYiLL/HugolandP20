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
  // EASY QUESTIONS (150+ questions)
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
  {
    id: '201',
    question: 'What is the capital of Spain?',
    type: 'multiple-choice',
    options: ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '202',
    question: 'Which country is shaped like a boot?',
    type: 'type-answer',
    correctAnswer: 'italy',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '203',
    question: 'What is the capital of Germany?',
    type: 'multiple-choice',
    options: ['Munich', 'Hamburg', 'Berlin', 'Frankfurt'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '204',
    question: 'Which continent is Brazil in?',
    type: 'type-answer',
    correctAnswer: 'south america',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '205',
    question: 'What is the capital of the United Kingdom?',
    type: 'multiple-choice',
    options: ['Manchester', 'Birmingham', 'London', 'Liverpool'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '206',
    question: 'Which ocean is between Europe and America?',
    type: 'type-answer',
    correctAnswer: 'atlantic',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '207',
    question: 'What is the capital of China?',
    type: 'multiple-choice',
    options: ['Shanghai', 'Beijing', 'Hong Kong', 'Guangzhou'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '208',
    question: 'Which country has the most people?',
    type: 'type-answer',
    correctAnswer: 'china',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '209',
    question: 'What is the capital of India?',
    type: 'multiple-choice',
    options: ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '210',
    question: 'Which continent is known as the "Dark Continent"?',
    type: 'type-answer',
    correctAnswer: 'africa',
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
  {
    id: '211',
    question: 'What is the center of an atom called?',
    type: 'multiple-choice',
    options: ['Electron', 'Proton', 'Nucleus', 'Neutron'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '212',
    question: 'How many teeth does an adult human normally have?',
    type: 'type-answer',
    correctAnswer: '32',
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '213',
    question: 'What is the chemical symbol for oxygen?',
    type: 'multiple-choice',
    options: ['O', 'Ox', 'O2', 'Oy'],
    correctAnswer: 0,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '214',
    question: 'Which blood type is most common?',
    type: 'type-answer',
    correctAnswer: 'o',
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '215',
    question: 'What is the largest organ inside the human body?',
    type: 'multiple-choice',
    options: ['Heart', 'Brain', 'Liver', 'Lungs'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '216',
    question: 'How many wings does a butterfly have?',
    type: 'type-answer',
    correctAnswer: '4',
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '217',
    question: 'What is the boiling point of water in Celsius?',
    type: 'multiple-choice',
    options: ['90°C', '100°C', '110°C', '120°C'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '218',
    question: 'Which planet is known as the "Red Planet"?',
    type: 'type-answer',
    correctAnswer: 'mars',
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '219',
    question: 'What do we call animals that eat only plants?',
    type: 'multiple-choice',
    options: ['Carnivores', 'Herbivores', 'Omnivores', 'Insectivores'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy'
  },
  {
    id: '220',
    question: 'How many legs does an insect have?',
    type: 'type-answer',
    correctAnswer: '6',
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
  {
    id: '221',
    question: 'What is 3 × 4?',
    type: 'multiple-choice',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '222',
    question: 'What is 16 ÷ 2?',
    type: 'type-answer',
    correctAnswer: '8',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '223',
    question: 'What is 7 + 8?',
    type: 'multiple-choice',
    options: ['14', '15', '16', '17'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '224',
    question: 'What is 5 × 5?',
    type: 'type-answer',
    correctAnswer: '25',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '225',
    question: 'What is 18 - 9?',
    type: 'multiple-choice',
    options: ['8', '9', '10', '11'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '226',
    question: 'What is 4 × 6?',
    type: 'type-answer',
    correctAnswer: '24',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '227',
    question: 'What is 21 ÷ 3?',
    type: 'multiple-choice',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '228',
    question: 'What is 11 + 14?',
    type: 'type-answer',
    correctAnswer: '25',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '229',
    question: 'What is 2 × 9?',
    type: 'multiple-choice',
    options: ['16', '17', '18', '19'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '230',
    question: 'What is 36 ÷ 6?',
    type: 'type-answer',
    correctAnswer: '6',
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
  {
    id: '231',
    question: 'What tool do artists use to paint?',
    type: 'multiple-choice',
    options: ['Hammer', 'Brush', 'Spoon', 'Fork'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'easy'
  },
  {
    id: '232',
    question: 'What do you call a picture of a person?',
    type: 'type-answer',
    correctAnswer: 'portrait',
    category: 'Art',
    difficulty: 'easy'
  },
  {
    id: '233',
    question: 'What material is used to make sculptures?',
    type: 'multiple-choice',
    options: ['Paper', 'Clay', 'Water', 'Air'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'easy'
  },
  {
    id: '234',
    question: 'What color do you get when you mix black and white?',
    type: 'type-answer',
    correctAnswer: 'gray',
    category: 'Art',
    difficulty: 'easy'
  },
  {
    id: '235',
    question: 'What is the art of folding paper called?',
    type: 'multiple-choice',
    options: ['Origami', 'Pottery', 'Weaving', 'Carving'],
    correctAnswer: 0,
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
  {
    id: '236',
    question: 'Which war was fought between the North and South in America?',
    type: 'multiple-choice',
    options: ['World War I', 'Civil War', 'Revolutionary War', 'War of 1812'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '237',
    question: 'Who built the first airplane?',
    type: 'type-answer',
    correctAnswer: 'wright brothers',
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '238',
    question: 'Which country gave the Statue of Liberty to the United States?',
    type: 'multiple-choice',
    options: ['England', 'France', 'Spain', 'Italy'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '239',
    question: 'What year did World War II end?',
    type: 'type-answer',
    correctAnswer: '1945',
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '240',
    question: 'Who was the first person to walk on the moon?',
    type: 'multiple-choice',
    options: ['Buzz Aldrin', 'Neil Armstrong', 'John Glenn', 'Alan Shepard'],
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
  {
    id: '241',
    question: 'How many strikes do you need for a perfect game in bowling?',
    type: 'multiple-choice',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '242',
    question: 'In which sport do you hit a ball with a bat?',
    type: 'type-answer',
    correctAnswer: 'baseball',
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '243',
    question: 'How many holes are there in a standard golf course?',
    type: 'multiple-choice',
    options: ['16', '17', '18', '19'],
    correctAnswer: 2,
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '244',
    question: 'What sport is played at Wimbledon?',
    type: 'type-answer',
    correctAnswer: 'tennis',
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '245',
    question: 'In American football, how many points is a touchdown worth?',
    type: 'multiple-choice',
    options: ['3', '6', '7', '8'],
    correctAnswer: 1,
    category: 'Sports',
    difficulty: 'easy'
  },

  // Animals - Easy
  {
    id: '246',
    question: 'What sound does a cow make?',
    type: 'multiple-choice',
    options: ['Bark', 'Meow', 'Moo', 'Chirp'],
    correctAnswer: 2,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '247',
    question: 'Which animal is known as man\'s best friend?',
    type: 'type-answer',
    correctAnswer: 'dog',
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '248',
    question: 'What do cats use to catch mice?',
    type: 'multiple-choice',
    options: ['Teeth', 'Claws', 'Tail', 'Ears'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '249',
    question: 'Which animal gives us milk?',
    type: 'type-answer',
    correctAnswer: 'cow',
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '250',
    question: 'What do bees collect from flowers?',
    type: 'multiple-choice',
    options: ['Water', 'Nectar', 'Leaves', 'Seeds'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },

  // MEDIUM QUESTIONS (200+ questions)
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
  {
    id: '251',
    question: 'What is the chemical symbol for iron?',
    type: 'multiple-choice',
    options: ['Ir', 'Fe', 'In', 'I'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '252',
    question: 'How many chambers does a bird\'s heart have?',
    type: 'type-answer',
    correctAnswer: '4',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '253',
    question: 'What is the study of weather called?',
    type: 'multiple-choice',
    options: ['Geology', 'Meteorology', 'Astronomy', 'Biology'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '254',
    question: 'Which gas makes up about 78% of Earth\'s atmosphere?',
    type: 'type-answer',
    correctAnswer: 'nitrogen',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '255',
    question: 'What is the smallest unit of matter?',
    type: 'multiple-choice',
    options: ['Molecule', 'Atom', 'Cell', 'Electron'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '256',
    question: 'How many bones does a shark have?',
    type: 'type-answer',
    correctAnswer: '0',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '257',
    question: 'What is the chemical symbol for silver?',
    type: 'multiple-choice',
    options: ['Si', 'Ag', 'S', 'Sv'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '258',
    question: 'Which organ produces bile?',
    type: 'type-answer',
    correctAnswer: 'liver',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '259',
    question: 'What is the study of plants called?',
    type: 'multiple-choice',
    options: ['Zoology', 'Botany', 'Geology', 'Ecology'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '260',
    question: 'How many pairs of chromosomes do humans have?',
    type: 'type-answer',
    correctAnswer: '23',
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
  {
    id: '261',
    question: 'Which ancient civilization built Machu Picchu?',
    type: 'multiple-choice',
    options: ['Aztec', 'Maya', 'Inca', 'Olmec'],
    correctAnswer: 2,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '262',
    question: 'Who was the first emperor of Rome?',
    type: 'type-answer',
    correctAnswer: 'augustus',
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '263',
    question: 'In which year did the American Civil War end?',
    type: 'multiple-choice',
    options: ['1863', '1864', '1865', '1866'],
    correctAnswer: 2,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '264',
    question: 'Who painted the Mona Lisa?',
    type: 'type-answer',
    correctAnswer: 'leonardo da vinci',
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '265',
    question: 'Which war was known as the "Great War"?',
    type: 'multiple-choice',
    options: ['World War I', 'World War II', 'Civil War', 'Revolutionary War'],
    correctAnswer: 0,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '266',
    question: 'Who was the first President to live in the White House?',
    type: 'type-answer',
    correctAnswer: 'john adams',
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '267',
    question: 'Which country was the first to use paper money?',
    type: 'multiple-choice',
    options: ['Greece', 'China', 'Egypt', 'India'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '268',
    question: 'Who wrote the Declaration of Independence?',
    type: 'type-answer',
    correctAnswer: 'thomas jefferson',
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '269',
    question: 'Which empire was ruled by Genghis Khan?',
    type: 'multiple-choice',
    options: ['Ottoman', 'Mongol', 'Byzantine', 'Persian'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '270',
    question: 'In which year did the stock market crash, leading to the Great Depression?',
    type: 'type-answer',
    correctAnswer: '1929',
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
  {
    id: '271',
    question: 'Who wrote "Lord of the Flies"?',
    type: 'multiple-choice',
    options: ['William Golding', 'J.D. Salinger', 'Harper Lee', 'Ray Bradbury'],
    correctAnswer: 0,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '272',
    question: 'Which Shakespeare play features the characters Hamlet and Ophelia?',
    type: 'type-answer',
    correctAnswer: 'hamlet',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '273',
    question: 'Who wrote "The Catcher in the Rye"?',
    type: 'multiple-choice',
    options: ['J.D. Salinger', 'Jack Kerouac', 'Allen Ginsberg', 'William Burroughs'],
    correctAnswer: 0,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '274',
    question: 'Which novel features the character Jay Gatsby?',
    type: 'type-answer',
    correctAnswer: 'the great gatsby',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '275',
    question: 'Who wrote "Brave New World"?',
    type: 'multiple-choice',
    options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Philip K. Dick'],
    correctAnswer: 1,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '276',
    question: 'Which book begins with "Call me Ishmael"?',
    type: 'type-answer',
    correctAnswer: 'moby dick',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '277',
    question: 'Who wrote "Of Mice and Men"?',
    type: 'multiple-choice',
    options: ['John Steinbeck', 'Ernest Hemingway', 'William Faulkner', 'F. Scott Fitzgerald'],
    correctAnswer: 0,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '278',
    question: 'Which dystopian novel features Big Brother?',
    type: 'type-answer',
    correctAnswer: '1984',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '279',
    question: 'Who wrote "The Lord of the Rings"?',
    type: 'multiple-choice',
    options: ['C.S. Lewis', 'J.R.R. Tolkien', 'George R.R. Martin', 'Terry Pratchett'],
    correctAnswer: 1,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '280',
    question: 'Which novel features the character Scout Finch?',
    type: 'type-answer',
    correctAnswer: 'to kill a mockingbird',
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
  {
    id: '281',
    question: 'What is the square root of 225?',
    type: 'multiple-choice',
    options: ['13', '14', '15', '16'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '282',
    question: 'What is 20% of 250?',
    type: 'type-answer',
    correctAnswer: '50',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '283',
    question: 'What is 8 to the power of 2?',
    type: 'multiple-choice',
    options: ['16', '32', '64', '128'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '284',
    question: 'What is 180 ÷ 15?',
    type: 'type-answer',
    correctAnswer: '12',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '285',
    question: 'What is 40% of 75?',
    type: 'multiple-choice',
    options: ['25', '30', '35', '40'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '286',
    question: 'What is the square root of 196?',
    type: 'type-answer',
    correctAnswer: '14',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '287',
    question: 'What is 6 to the power of 3?',
    type: 'multiple-choice',
    options: ['18', '36', '108', '216'],
    correctAnswer: 3,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '288',
    question: 'What is 240 ÷ 16?',
    type: 'type-answer',
    correctAnswer: '15',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '289',
    question: 'What is 35% of 120?',
    type: 'multiple-choice',
    options: ['40', '42', '44', '46'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '290',
    question: 'What is the square root of 289?',
    type: 'type-answer',
    correctAnswer: '17',
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
  {
    id: '291',
    question: 'What is the capital of Brazil?',
    type: 'multiple-choice',
    options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '292',
    question: 'Which lake is the largest by surface area?',
    type: 'type-answer',
    correctAnswer: 'caspian sea',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '293',
    question: 'What is the capital of South Africa?',
    type: 'multiple-choice',
    options: ['Johannesburg', 'Cape Town', 'Pretoria', 'Durban'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '294',
    question: 'Which river flows through Paris?',
    type: 'type-answer',
    correctAnswer: 'seine',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '295',
    question: 'What is the capital of Argentina?',
    type: 'multiple-choice',
    options: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
    correctAnswer: 0,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '296',
    question: 'Which island country is located south of India?',
    type: 'type-answer',
    correctAnswer: 'sri lanka',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '297',
    question: 'What is the capital of Egypt?',
    type: 'multiple-choice',
    options: ['Alexandria', 'Cairo', 'Giza', 'Luxor'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '298',
    question: 'Which sea is between Italy and the Balkans?',
    type: 'type-answer',
    correctAnswer: 'adriatic sea',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '299',
    question: 'What is the capital of Turkey?',
    type: 'multiple-choice',
    options: ['Istanbul', 'Ankara', 'Izmir', 'Bursa'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '300',
    question: 'Which mountain range runs along the western coast of South America?',
    type: 'type-answer',
    correctAnswer: 'andes',
    category: 'Geography',
    difficulty: 'medium'
  },

  // HARD QUESTIONS (150+ questions)
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
  {
    id: '301',
    question: 'What is the name of the enzyme that breaks down starch?',
    type: 'multiple-choice',
    options: ['Pepsin', 'Amylase', 'Lipase', 'Trypsin'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '302',
    question: 'Which scientist discovered penicillin?',
    type: 'type-answer',
    correctAnswer: 'alexander fleming',
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '303',
    question: 'What is the study of fungi called?',
    type: 'multiple-choice',
    options: ['Mycology', 'Virology', 'Bacteriology', 'Parasitology'],
    correctAnswer: 0,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '304',
    question: 'Which gas law states that pressure is inversely proportional to volume?',
    type: 'type-answer',
    correctAnswer: 'boyles law',
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '305',
    question: 'What is the name of the process by which RNA is made from DNA?',
    type: 'multiple-choice',
    options: ['Replication', 'Transcription', 'Translation', 'Transformation'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '306',
    question: 'Which scientist formulated the laws of motion?',
    type: 'type-answer',
    correctAnswer: 'newton',
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '307',
    question: 'What is the study of heredity called?',
    type: 'multiple-choice',
    options: ['Genetics', 'Genomics', 'Cytology', 'Embryology'],
    correctAnswer: 0,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '308',
    question: 'Which element has the chemical symbol Pb?',
    type: 'type-answer',
    correctAnswer: 'lead',
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '309',
    question: 'What is the name of the force that opposes motion?',
    type: 'multiple-choice',
    options: ['Gravity', 'Friction', 'Magnetism', 'Tension'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '310',
    question: 'Which scientist developed the theory of evolution?',
    type: 'type-answer',
    correctAnswer: 'charles darwin',
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
  {
    id: '311',
    question: 'Who painted "The Persistence of Memory"?',
    type: 'multiple-choice',
    options: ['Pablo Picasso', 'Salvador Dali', 'René Magritte', 'Joan Miró'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '312',
    question: 'Which artist created the sculpture "David"?',
    type: 'type-answer',
    correctAnswer: 'michelangelo',
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '313',
    question: 'Who painted "The Birth of Venus"?',
    type: 'multiple-choice',
    options: ['Leonardo da Vinci', 'Raphael', 'Botticelli', 'Donatello'],
    correctAnswer: 2,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '314',
    question: 'Which art movement did Claude Monet help found?',
    type: 'type-answer',
    correctAnswer: 'impressionism',
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '315',
    question: 'Who painted "American Gothic"?',
    type: 'multiple-choice',
    options: ['Edward Hopper', 'Grant Wood', 'Andrew Wyeth', 'Norman Rockwell'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '316',
    question: 'Which artist is famous for his "Blue Period"?',
    type: 'type-answer',
    correctAnswer: 'picasso',
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '317',
    question: 'Who painted "The Scream"?',
    type: 'multiple-choice',
    options: ['Edvard Munch', 'Gustav Klimt', 'Egon Schiele', 'Franz Marc'],
    correctAnswer: 0,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '318',
    question: 'Which technique involves painting on wet plaster?',
    type: 'type-answer',
    correctAnswer: 'fresco',
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '319',
    question: 'Who painted "Las Meninas"?',
    type: 'multiple-choice',
    options: ['El Greco', 'Goya', 'Velázquez', 'Murillo'],
    correctAnswer: 2,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '320',
    question: 'Which art movement rejected traditional perspective?',
    type: 'type-answer',
    correctAnswer: 'cubism',
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
  {
    id: '321',
    question: 'Who invented the World Wide Web?',
    type: 'multiple-choice',
    options: ['Tim Berners-Lee', 'Vint Cerf', 'Bob Kahn', 'Marc Andreessen'],
    correctAnswer: 0,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '322',
    question: 'What does "API" stand for?',
    type: 'type-answer',
    correctAnswer: 'application programming interface',
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '323',
    question: 'Which company created the Java programming language?',
    type: 'multiple-choice',
    options: ['Microsoft', 'Sun Microsystems', 'Oracle', 'IBM'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '324',
    question: 'What does "DNS" stand for?',
    type: 'type-answer',
    correctAnswer: 'domain name system',
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '325',
    question: 'Which protocol is used for secure web browsing?',
    type: 'multiple-choice',
    options: ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '326',
    question: 'Who co-founded Apple Computer?',
    type: 'type-answer',
    correctAnswer: 'steve jobs',
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '327',
    question: 'What does "RAM" stand for?',
    type: 'multiple-choice',
    options: ['Random Access Memory', 'Read Access Memory', 'Rapid Access Memory', 'Remote Access Memory'],
    correctAnswer: 0,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '328',
    question: 'Which company developed the C programming language?',
    type: 'type-answer',
    correctAnswer: 'bell labs',
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '329',
    question: 'What does "GPU" stand for?',
    type: 'multiple-choice',
    options: ['General Processing Unit', 'Graphics Processing Unit', 'Global Processing Unit', 'Game Processing Unit'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'hard'
  },
  {
    id: '330',
    question: 'Who created the Linux operating system?',
    type: 'type-answer',
    correctAnswer: 'linus torvalds',
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
  {
    id: '331',
    question: 'What is the derivative of sin(x)?',
    type: 'multiple-choice',
    options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
    correctAnswer: 0,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '332',
    question: 'What is the integral of cos(x)?',
    type: 'type-answer',
    correctAnswer: 'sin(x)',
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '333',
    question: 'What is the name of a polygon with 12 sides?',
    type: 'multiple-choice',
    options: ['Decagon', 'Dodecagon', 'Hendecagon', 'Tridecagon'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '334',
    question: 'What is the factorial of 7?',
    type: 'type-answer',
    correctAnswer: '5040',
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '335',
    question: 'What is the formula for the area of a circle?',
    type: 'multiple-choice',
    options: ['πr²', '2πr', 'πd', 'r²'],
    correctAnswer: 0,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '336',
    question: 'What is the derivative of e^x?',
    type: 'type-answer',
    correctAnswer: 'e^x',
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '337',
    question: 'What is the sum of the first 10 natural numbers?',
    type: 'multiple-choice',
    options: ['45', '50', '55', '60'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '338',
    question: 'What is the integral of x²?',
    type: 'type-answer',
    correctAnswer: 'x³/3',
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '339',
    question: 'What is the name of a polygon with 20 sides?',
    type: 'multiple-choice',
    options: ['Icosagon', 'Enneadecagon', 'Henneicosagon', 'Docosagon'],
    correctAnswer: 0,
    category: 'Math',
    difficulty: 'hard'
  },
  {
    id: '340',
    question: 'What is the limit of sin(x)/x as x approaches 0?',
    type: 'type-answer',
    correctAnswer: '1',
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
  {
    id: '341',
    question: 'Who wrote "Critique of Pure Reason"?',
    type: 'multiple-choice',
    options: ['Immanuel Kant', 'Georg Hegel', 'Arthur Schopenhauer', 'Friedrich Nietzsche'],
    correctAnswer: 0,
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '342',
    question: 'What is the philosophical study of being called?',
    type: 'type-answer',
    correctAnswer: 'ontology',
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '343',
    question: 'Who wrote "Being and Time"?',
    type: 'multiple-choice',
    options: ['Martin Heidegger', 'Jean-Paul Sartre', 'Maurice Merleau-Ponty', 'Edmund Husserl'],
    correctAnswer: 0,
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '344',
    question: 'What is the philosophical study of beauty called?',
    type: 'type-answer',
    correctAnswer: 'aesthetics',
    category: 'Philosophy',
    difficulty: 'hard'
  },
  {
    id: '345',
    question: 'Who wrote "The Social Contract"?',
    type: 'multiple-choice',
    options: ['John Locke', 'Thomas Hobbes', 'Jean-Jacques Rousseau', 'Voltaire'],
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
  {
    id: '346',
    question: 'Who composed "The Magic Flute"?',
    type: 'multiple-choice',
    options: ['Bach', 'Mozart', 'Beethoven', 'Haydn'],
    correctAnswer: 1,
    category: 'Music',
    difficulty: 'medium'
  },
  {
    id: '347',
    question: 'What is the highest female singing voice?',
    type: 'type-answer',
    correctAnswer: 'soprano',
    category: 'Music',
    difficulty: 'easy'
  },
  {
    id: '348',
    question: 'Who composed "The Rite of Spring"?',
    type: 'multiple-choice',
    options: ['Stravinsky', 'Debussy', 'Ravel', 'Prokofiev'],
    correctAnswer: 0,
    category: 'Music',
    difficulty: 'hard'
  },
  {
    id: '349',
    question: 'How many movements are in a typical symphony?',
    type: 'type-answer',
    correctAnswer: '4',
    category: 'Music',
    difficulty: 'medium'
  },
  {
    id: '350',
    question: 'Who composed "Carmen"?',
    type: 'multiple-choice',
    options: ['Verdi', 'Puccini', 'Bizet', 'Wagner'],
    correctAnswer: 2,
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
  {
    id: '351',
    question: 'Who directed "Pulp Fiction"?',
    type: 'multiple-choice',
    options: ['Quentin Tarantino', 'Martin Scorsese', 'David Lynch', 'Coen Brothers'],
    correctAnswer: 0,
    category: 'Movies',
    difficulty: 'hard'
  },
  {
    id: '352',
    question: 'Which movie features the character Jack Sparrow?',
    type: 'type-answer',
    correctAnswer: 'pirates of the caribbean',
    category: 'Movies',
    difficulty: 'easy'
  },
  {
    id: '353',
    question: 'Who directed "Citizen Kane"?',
    type: 'multiple-choice',
    options: ['Alfred Hitchcock', 'Orson Welles', 'John Ford', 'Howard Hawks'],
    correctAnswer: 1,
    category: 'Movies',
    difficulty: 'hard'
  },
  {
    id: '354',
    question: 'Which movie features the line "Here\'s looking at you, kid"?',
    type: 'type-answer',
    correctAnswer: 'casablanca',
    category: 'Movies',
    difficulty: 'medium'
  },
  {
    id: '355',
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
  {
    id: '356',
    question: 'What is the main ingredient in traditional Japanese miso soup?',
    type: 'multiple-choice',
    options: ['Soy sauce', 'Miso paste', 'Rice vinegar', 'Sake'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'medium'
  },
  {
    id: '357',
    question: 'Which cooking method involves cooking food in its own fat?',
    type: 'type-answer',
    correctAnswer: 'confit',
    category: 'Food',
    difficulty: 'hard'
  },
  {
    id: '358',
    question: 'What is the main ingredient in traditional Greek tzatziki?',
    type: 'multiple-choice',
    options: ['Yogurt', 'Cheese', 'Cream', 'Milk'],
    correctAnswer: 0,
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '359',
    question: 'Which technique involves cooking food slowly in fat at low temperature?',
    type: 'type-answer',
    correctAnswer: 'poaching',
    category: 'Food',
    difficulty: 'medium'
  },
  {
    id: '360',
    question: 'What is the French term for browning meat before slow cooking?',
    type: 'multiple-choice',
    options: ['Sauté', 'Sear', 'Braise', 'Confit'],
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
  {
    id: '361',
    question: 'What is a group of lions called?',
    type: 'multiple-choice',
    options: ['Pack', 'Herd', 'Pride', 'Flock'],
    correctAnswer: 2,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '362',
    question: 'Which animal can sleep for up to 22 hours a day?',
    type: 'type-answer',
    correctAnswer: 'koala',
    category: 'Animals',
    difficulty: 'medium'
  },
  {
    id: '363',
    question: 'What is the only mammal capable of true flight?',
    type: 'multiple-choice',
    options: ['Flying squirrel', 'Bat', 'Sugar glider', 'Flying lemur'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '364',
    question: 'Which animal has the most powerful bite in the world?',
    type: 'type-answer',
    correctAnswer: 'saltwater crocodile',
    category: 'Animals',
    difficulty: 'hard'
  },
  {
    id: '365',
    question: 'What is a group of wolves called?',
    type: 'multiple-choice',
    options: ['Pack', 'Herd', 'Flock', 'School'],
    correctAnswer: 0,
    category: 'Animals',
    difficulty: 'easy'
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
  {
    id: '366',
    question: 'What is the largest moon in our solar system?',
    type: 'multiple-choice',
    options: ['Europa', 'Titan', 'Ganymede', 'Callisto'],
    correctAnswer: 2,
    category: 'Space',
    difficulty: 'medium'
  },
  {
    id: '367',
    question: 'Which planet has the shortest day?',
    type: 'type-answer',
    correctAnswer: 'jupiter',
    category: 'Space',
    difficulty: 'hard'
  },
  {
    id: '368',
    question: 'What is the name of the space telescope launched in 1990?',
    type: 'multiple-choice',
    options: ['Kepler', 'Spitzer', 'Hubble', 'Chandra'],
    correctAnswer: 2,
    category: 'Space',
    difficulty: 'medium'
  },
  {
    id: '369',
    question: 'Which planet has the most extreme seasons?',
    type: 'type-answer',
    correctAnswer: 'uranus',
    category: 'Space',
    difficulty: 'hard'
  },
  {
    id: '370',
    question: 'What is the name of the region beyond Neptune?',
    type: 'multiple-choice',
    options: ['Asteroid Belt', 'Kuiper Belt', 'Oort Cloud', 'Heliosphere'],
    correctAnswer: 1,
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
  {
    id: '371',
    question: 'Who is the Greek god of the sea?',
    type: 'multiple-choice',
    options: ['Zeus', 'Hades', 'Poseidon', 'Apollo'],
    correctAnswer: 2,
    category: 'Mythology',
    difficulty: 'easy'
  },
  {
    id: '372',
    question: 'In Egyptian mythology, who is the god of the sun?',
    type: 'type-answer',
    correctAnswer: 'ra',
    category: 'Mythology',
    difficulty: 'medium'
  },
  {
    id: '373',
    question: 'What is the name of the Norse god of mischief?',
    type: 'multiple-choice',
    options: ['Thor', 'Odin', 'Loki', 'Freyr'],
    correctAnswer: 2,
    category: 'Mythology',
    difficulty: 'easy'
  },
  {
    id: '374',
    question: 'In Greek mythology, who is the messenger of the gods?',
    type: 'type-answer',
    correctAnswer: 'hermes',
    category: 'Mythology',
    difficulty: 'medium'
  },
  {
    id: '375',
    question: 'What is the name of the three-headed dog that guards the underworld?',
    type: 'multiple-choice',
    options: ['Cerberus', 'Hydra', 'Chimera', 'Sphinx'],
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
  },
  {
    id: '376',
    question: 'How do you say "good morning" in German?',
    type: 'multiple-choice',
    options: ['Guten Tag', 'Guten Morgen', 'Gute Nacht', 'Auf Wiedersehen'],
    correctAnswer: 1,
    category: 'Language',
    difficulty: 'easy'
  },
  {
    id: '377',
    question: 'What does "grazie" mean in Italian?',
    type: 'type-answer',
    correctAnswer: 'thank you',
    category: 'Language',
    difficulty: 'easy'
  },
  {
    id: '378',
    question: 'Which language family does English belong to?',
    type: 'multiple-choice',
    options: ['Romance', 'Germanic', 'Slavic', 'Celtic'],
    correctAnswer: 1,
    category: 'Language',
    difficulty: 'medium'
  },
  {
    id: '379',
    question: 'What does "shukran" mean in Arabic?',
    type: 'type-answer',
    correctAnswer: 'thank you',
    category: 'Language',
    difficulty: 'medium'
  },
  {
    id: '380',
    question: 'Which writing system is used for Japanese?',
    type: 'multiple-choice',
    options: ['Hiragana only', 'Katakana only', 'Kanji only', 'All three'],
    correctAnswer: 3,
    category: 'Language',
    difficulty: 'hard'
  },

  // Additional questions to reach 500+
  {
    id: '381',
    question: 'What is the largest desert in Asia?',
    type: 'multiple-choice',
    options: ['Thar', 'Gobi', 'Karakum', 'Taklamakan'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '382',
    question: 'Which vitamin is produced when skin is exposed to sunlight?',
    type: 'type-answer',
    correctAnswer: 'vitamin d',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '383',
    question: 'What is 11 × 11?',
    type: 'multiple-choice',
    options: ['111', '121', '131', '141'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '384',
    question: 'Who painted "The Last Supper"?',
    type: 'type-answer',
    correctAnswer: 'leonardo da vinci',
    category: 'Art',
    difficulty: 'medium'
  },
  {
    id: '385',
    question: 'Which war ended in 1918?',
    type: 'multiple-choice',
    options: ['World War I', 'World War II', 'Civil War', 'Korean War'],
    correctAnswer: 0,
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '386',
    question: 'Who wrote "Hamlet"?',
    type: 'type-answer',
    correctAnswer: 'shakespeare',
    category: 'Literature',
    difficulty: 'easy'
  },
  {
    id: '387',
    question: 'How many sides does a hexagon have?',
    type: 'multiple-choice',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '388',
    question: 'What is the chemical symbol for sodium?',
    type: 'type-answer',
    correctAnswer: 'na',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '389',
    question: 'Which sport is played at the Masters Tournament?',
    type: 'multiple-choice',
    options: ['Tennis', 'Golf', 'Baseball', 'Basketball'],
    correctAnswer: 1,
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '390',
    question: 'What is the capital of Mexico?',
    type: 'type-answer',
    correctAnswer: 'mexico city',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '391',
    question: 'Which planet is closest to Earth?',
    type: 'multiple-choice',
    options: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
    correctAnswer: 1,
    category: 'Space',
    difficulty: 'medium'
  },
  {
    id: '392',
    question: 'What do you call a baby kangaroo?',
    type: 'type-answer',
    correctAnswer: 'joey',
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '393',
    question: 'Which instrument has 88 keys?',
    type: 'multiple-choice',
    options: ['Organ', 'Piano', 'Harpsichord', 'Accordion'],
    correctAnswer: 1,
    category: 'Music',
    difficulty: 'easy'
  },
  {
    id: '394',
    question: 'What is the main ingredient in bread?',
    type: 'type-answer',
    correctAnswer: 'flour',
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '395',
    question: 'Who directed "E.T. the Extra-Terrestrial"?',
    type: 'multiple-choice',
    options: ['George Lucas', 'Steven Spielberg', 'James Cameron', 'Ridley Scott'],
    correctAnswer: 1,
    category: 'Movies',
    difficulty: 'medium'
  },
  {
    id: '396',
    question: 'What is the study of stars called?',
    type: 'type-answer',
    correctAnswer: 'astronomy',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '397',
    question: 'How many minutes are in an hour?',
    type: 'multiple-choice',
    options: ['50', '60', '70', '80'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '398',
    question: 'Which country invented the compass?',
    type: 'type-answer',
    correctAnswer: 'china',
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '399',
    question: 'What is the largest bird in the world?',
    type: 'multiple-choice',
    options: ['Eagle', 'Ostrich', 'Albatross', 'Condor'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '400',
    question: 'How do you say "water" in Spanish?',
    type: 'type-answer',
    correctAnswer: 'agua',
    category: 'Language',
    difficulty: 'easy'
  },
  {
    id: '401',
    question: 'Which programming language is named after a snake?',
    type: 'multiple-choice',
    options: ['Java', 'Python', 'Ruby', 'Perl'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'medium'
  },
  {
    id: '402',
    question: 'What is the freezing point of water in Fahrenheit?',
    type: 'type-answer',
    correctAnswer: '32',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '403',
    question: 'Which ocean is the smallest?',
    type: 'multiple-choice',
    options: ['Arctic', 'Indian', 'Atlantic', 'Pacific'],
    correctAnswer: 0,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '404',
    question: 'What is 13 + 17?',
    type: 'type-answer',
    correctAnswer: '30',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '405',
    question: 'Who composed "The Blue Danube"?',
    type: 'multiple-choice',
    options: ['Mozart', 'Beethoven', 'Strauss', 'Bach'],
    correctAnswer: 2,
    category: 'Music',
    difficulty: 'hard'
  },
  {
    id: '406',
    question: 'Which gas makes up most of the air we breathe?',
    type: 'type-answer',
    correctAnswer: 'nitrogen',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '407',
    question: 'What is the capital of Russia?',
    type: 'multiple-choice',
    options: ['St. Petersburg', 'Moscow', 'Kiev', 'Minsk'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '408',
    question: 'How many legs does a centipede have?',
    type: 'type-answer',
    correctAnswer: '100',
    category: 'Animals',
    difficulty: 'medium'
  },
  {
    id: '409',
    question: 'Which movie features the character Darth Vader?',
    type: 'multiple-choice',
    options: ['Star Trek', 'Star Wars', 'Stargate', 'Battlestar Galactica'],
    correctAnswer: 1,
    category: 'Movies',
    difficulty: 'easy'
  },
  {
    id: '410',
    question: 'What is the main ingredient in chocolate?',
    type: 'type-answer',
    correctAnswer: 'cocoa',
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '411',
    question: 'Who wrote "The Odyssey"?',
    type: 'multiple-choice',
    options: ['Homer', 'Virgil', 'Sophocles', 'Euripides'],
    correctAnswer: 0,
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '412',
    question: 'What is 144 ÷ 6?',
    type: 'type-answer',
    correctAnswer: '24',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '413',
    question: 'Which planet has a day longer than its year?',
    type: 'multiple-choice',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    correctAnswer: 1,
    category: 'Space',
    difficulty: 'hard'
  },
  {
    id: '414',
    question: 'What is the largest mammal on land?',
    type: 'type-answer',
    correctAnswer: 'elephant',
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '415',
    question: 'Which ancient civilization built the pyramids?',
    type: 'multiple-choice',
    options: ['Greeks', 'Romans', 'Egyptians', 'Babylonians'],
    correctAnswer: 2,
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '416',
    question: 'What does "www" stand for?',
    type: 'type-answer',
    correctAnswer: 'world wide web',
    category: 'Technology',
    difficulty: 'medium'
  },
  {
    id: '417',
    question: 'How many chambers does a fish heart have?',
    type: 'multiple-choice',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '418',
    question: 'What is the smallest prime number?',
    type: 'type-answer',
    correctAnswer: '2',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '419',
    question: 'Which country is known as the Land Down Under?',
    type: 'multiple-choice',
    options: ['New Zealand', 'Australia', 'South Africa', 'Argentina'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '420',
    question: 'What do you call a group of fish?',
    type: 'type-answer',
    correctAnswer: 'school',
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '421',
    question: 'Who painted "Guernica"?',
    type: 'multiple-choice',
    options: ['Pablo Picasso', 'Salvador Dali', 'Joan Miró', 'Francisco Goya'],
    correctAnswer: 0,
    category: 'Art',
    difficulty: 'hard'
  },
  {
    id: '422',
    question: 'What is the currency of Japan?',
    type: 'type-answer',
    correctAnswer: 'yen',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '423',
    question: 'Which sport uses a puck?',
    type: 'multiple-choice',
    options: ['Basketball', 'Hockey', 'Soccer', 'Tennis'],
    correctAnswer: 1,
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '424',
    question: 'What is the chemical formula for carbon dioxide?',
    type: 'type-answer',
    correctAnswer: 'co2',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '425',
    question: 'How many sides does a pentagon have?',
    type: 'multiple-choice',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '426',
    question: 'Which movie won the first Academy Award for Best Picture?',
    type: 'type-answer',
    correctAnswer: 'wings',
    category: 'Movies',
    difficulty: 'hard'
  },
  {
    id: '427',
    question: 'What is the main ingredient in sushi?',
    type: 'multiple-choice',
    options: ['Fish', 'Rice', 'Seaweed', 'Vegetables'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'medium'
  },
  {
    id: '428',
    question: 'Who wrote "War and Peace"?',
    type: 'type-answer',
    correctAnswer: 'tolstoy',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '429',
    question: 'What is the square of 9?',
    type: 'multiple-choice',
    options: ['18', '27', '81', '90'],
    correctAnswer: 2,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '430',
    question: 'Which planet is known for its rings?',
    type: 'type-answer',
    correctAnswer: 'saturn',
    category: 'Space',
    difficulty: 'easy'
  },
  {
    id: '431',
    question: 'What do you call a baby sheep?',
    type: 'multiple-choice',
    options: ['Calf', 'Lamb', 'Kid', 'Foal'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '432',
    question: 'Which instrument did Louis Armstrong play?',
    type: 'type-answer',
    correctAnswer: 'trumpet',
    category: 'Music',
    difficulty: 'medium'
  },
  {
    id: '433',
    question: 'What is the largest country in South America?',
    type: 'multiple-choice',
    options: ['Argentina', 'Brazil', 'Colombia', 'Peru'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '434',
    question: 'Which element has the symbol He?',
    type: 'type-answer',
    correctAnswer: 'helium',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '435',
    question: 'What is 7 × 8?',
    type: 'multiple-choice',
    options: ['54', '56', '58', '60'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '436',
    question: 'Who directed "The Matrix"?',
    type: 'type-answer',
    correctAnswer: 'wachowski sisters',
    category: 'Movies',
    difficulty: 'hard'
  },
  {
    id: '437',
    question: 'What spice is made from grinding peppercorns?',
    type: 'multiple-choice',
    options: ['Salt', 'Pepper', 'Paprika', 'Cumin'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '438',
    question: 'Which Greek god is associated with the sun?',
    type: 'type-answer',
    correctAnswer: 'apollo',
    category: 'Mythology',
    difficulty: 'medium'
  },
  {
    id: '439',
    question: 'How do you say "yes" in French?',
    type: 'multiple-choice',
    options: ['Oui', 'Non', 'Peut-être', 'Jamais'],
    correctAnswer: 0,
    category: 'Language',
    difficulty: 'easy'
  },
  {
    id: '440',
    question: 'What does "CPU" stand for?',
    type: 'type-answer',
    correctAnswer: 'central processing unit',
    category: 'Technology',
    difficulty: 'medium'
  },
  {
    id: '441',
    question: 'Which organ filters blood in the human body?',
    type: 'multiple-choice',
    options: ['Liver', 'Kidney', 'Heart', 'Lungs'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '442',
    question: 'What is the capital of Thailand?',
    type: 'type-answer',
    correctAnswer: 'bangkok',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '443',
    question: 'How many strings does a violin have?',
    type: 'multiple-choice',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    category: 'Music',
    difficulty: 'easy'
  },
  {
    id: '444',
    question: 'What is 15 × 4?',
    type: 'type-answer',
    correctAnswer: '60',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '445',
    question: 'Which animal is known for changing colors?',
    type: 'multiple-choice',
    options: ['Chameleon', 'Iguana', 'Gecko', 'Lizard'],
    correctAnswer: 0,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '446',
    question: 'Who wrote "The Chronicles of Narnia"?',
    type: 'type-answer',
    correctAnswer: 'c.s. lewis',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '447',
    question: 'What is the smallest unit of life?',
    type: 'multiple-choice',
    options: ['Atom', 'Molecule', 'Cell', 'Tissue'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '448',
    question: 'Which war was fought from 1939 to 1945?',
    type: 'type-answer',
    correctAnswer: 'world war ii',
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: '449',
    question: 'What is the largest ocean on Earth?',
    type: 'multiple-choice',
    options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '450',
    question: 'How many days are in a leap year?',
    type: 'type-answer',
    correctAnswer: '366',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '451',
    question: 'Which movie features the song "Hakuna Matata"?',
    type: 'multiple-choice',
    options: ['The Jungle Book', 'The Lion King', 'Tarzan', 'Moana'],
    correctAnswer: 1,
    category: 'Movies',
    difficulty: 'easy'
  },
  {
    id: '452',
    question: 'What is the main ingredient in omelettes?',
    type: 'type-answer',
    correctAnswer: 'eggs',
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '453',
    question: 'Which planet is furthest from the Sun?',
    type: 'multiple-choice',
    options: ['Uranus', 'Neptune', 'Pluto', 'Saturn'],
    correctAnswer: 1,
    category: 'Space',
    difficulty: 'medium'
  },
  {
    id: '454',
    question: 'What do you call a group of bees?',
    type: 'type-answer',
    correctAnswer: 'swarm',
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '455',
    question: 'Who composed "Swan Lake"?',
    type: 'multiple-choice',
    options: ['Tchaikovsky', 'Stravinsky', 'Prokofiev', 'Rachmaninoff'],
    correctAnswer: 0,
    category: 'Music',
    difficulty: 'medium'
  },
  {
    id: '456',
    question: 'What is the chemical symbol for potassium?',
    type: 'type-answer',
    correctAnswer: 'k',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '457',
    question: 'Which continent has the most countries?',
    type: 'multiple-choice',
    options: ['Asia', 'Africa', 'Europe', 'South America'],
    correctAnswer: 1,
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '458',
    question: 'What is 18 ÷ 3?',
    type: 'type-answer',
    correctAnswer: '6',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '459',
    question: 'Which artist painted "Water Lilies"?',
    type: 'multiple-choice',
    options: ['Van Gogh', 'Monet', 'Renoir', 'Degas'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'medium'
  },
  {
    id: '460',
    question: 'What is the currency of the United Kingdom?',
    type: 'type-answer',
    correctAnswer: 'pound',
    category: 'Geography',
    difficulty: 'easy'
  },
  {
    id: '461',
    question: 'Which sport is known as "the beautiful game"?',
    type: 'multiple-choice',
    options: ['Basketball', 'Soccer', 'Tennis', 'Baseball'],
    correctAnswer: 1,
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '462',
    question: 'What gas do plants release during photosynthesis?',
    type: 'type-answer',
    correctAnswer: 'oxygen',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '463',
    question: 'How many sides does a triangle have?',
    type: 'multiple-choice',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '464',
    question: 'Who directed "Jurassic Park"?',
    type: 'type-answer',
    correctAnswer: 'spielberg',
    category: 'Movies',
    difficulty: 'medium'
  },
  {
    id: '465',
    question: 'What is the main ingredient in pasta?',
    type: 'multiple-choice',
    options: ['Rice', 'Wheat', 'Corn', 'Barley'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '466',
    question: 'Which Roman goddess is associated with love?',
    type: 'type-answer',
    correctAnswer: 'venus',
    category: 'Mythology',
    difficulty: 'medium'
  },
  {
    id: '467',
    question: 'How do you say "goodbye" in Spanish?',
    type: 'multiple-choice',
    options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
    correctAnswer: 1,
    category: 'Language',
    difficulty: 'easy'
  },
  {
    id: '468',
    question: 'What does "USB" stand for?',
    type: 'type-answer',
    correctAnswer: 'universal serial bus',
    category: 'Technology',
    difficulty: 'medium'
  },
  {
    id: '469',
    question: 'Which blood vessels carry blood away from the heart?',
    type: 'multiple-choice',
    options: ['Veins', 'Arteries', 'Capillaries', 'Ventricles'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '470',
    question: 'What is the capital of South Korea?',
    type: 'type-answer',
    correctAnswer: 'seoul',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '471',
    question: 'Which instrument has pedals?',
    type: 'multiple-choice',
    options: ['Violin', 'Piano', 'Flute', 'Trumpet'],
    correctAnswer: 1,
    category: 'Music',
    difficulty: 'easy'
  },
  {
    id: '472',
    question: 'What is 9 + 16?',
    type: 'type-answer',
    correctAnswer: '25',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '473',
    question: 'Which animal is known for its black and white stripes?',
    type: 'multiple-choice',
    options: ['Tiger', 'Zebra', 'Panda', 'Skunk'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '474',
    question: 'Who wrote "Alice in Wonderland"?',
    type: 'type-answer',
    correctAnswer: 'lewis carroll',
    category: 'Literature',
    difficulty: 'medium'
  },
  {
    id: '475',
    question: 'What is the process of water turning into vapor called?',
    type: 'multiple-choice',
    options: ['Condensation', 'Evaporation', 'Precipitation', 'Sublimation'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '476',
    question: 'Which empire was ruled by Napoleon?',
    type: 'type-answer',
    correctAnswer: 'french empire',
    category: 'History',
    difficulty: 'medium'
  },
  {
    id: '477',
    question: 'What is the longest river in Europe?',
    type: 'multiple-choice',
    options: ['Danube', 'Rhine', 'Volga', 'Thames'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'hard'
  },
  {
    id: '478',
    question: 'How many weeks are in a year?',
    type: 'type-answer',
    correctAnswer: '52',
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '479',
    question: 'Which movie features the character Woody?',
    type: 'multiple-choice',
    options: ['Toy Story', 'Cars', 'Finding Nemo', 'Monsters Inc.'],
    correctAnswer: 0,
    category: 'Movies',
    difficulty: 'easy'
  },
  {
    id: '480',
    question: 'What is the main ingredient in ice cream?',
    type: 'type-answer',
    correctAnswer: 'milk',
    category: 'Food',
    difficulty: 'easy'
  },
  {
    id: '481',
    question: 'Which moon phase comes after the new moon?',
    type: 'multiple-choice',
    options: ['Full moon', 'Waxing crescent', 'Waning gibbous', 'Last quarter'],
    correctAnswer: 1,
    category: 'Space',
    difficulty: 'medium'
  },
  {
    id: '482',
    question: 'What do you call a baby horse?',
    type: 'type-answer',
    correctAnswer: 'foal',
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '483',
    question: 'Who composed "The Nutcracker"?',
    type: 'multiple-choice',
    options: ['Bach', 'Mozart', 'Tchaikovsky', 'Beethoven'],
    correctAnswer: 2,
    category: 'Music',
    difficulty: 'medium'
  },
  {
    id: '484',
    question: 'What is the chemical symbol for calcium?',
    type: 'type-answer',
    correctAnswer: 'ca',
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '485',
    question: 'Which country is both in Europe and Asia?',
    type: 'multiple-choice',
    options: ['Turkey', 'Russia', 'Kazakhstan', 'All of the above'],
    correctAnswer: 3,
    category: 'Geography',
    difficulty: 'hard'
  },
  {
    id: '486',
    question: 'What is 12 × 12?',
    type: 'type-answer',
    correctAnswer: '144',
    category: 'Math',
    difficulty: 'medium'
  },
  {
    id: '487',
    question: 'Which artist is famous for cutting off his ear?',
    type: 'multiple-choice',
    options: ['Picasso', 'Van Gogh', 'Monet', 'Dali'],
    correctAnswer: 1,
    category: 'Art',
    difficulty: 'medium'
  },
  {
    id: '488',
    question: 'What is the currency of China?',
    type: 'type-answer',
    correctAnswer: 'yuan',
    category: 'Geography',
    difficulty: 'medium'
  },
  {
    id: '489',
    question: 'In which sport do you use a shuttlecock?',
    type: 'multiple-choice',
    options: ['Tennis', 'Badminton', 'Squash', 'Table tennis'],
    correctAnswer: 1,
    category: 'Sports',
    difficulty: 'easy'
  },
  {
    id: '490',
    question: 'What is the hardest substance in the human body?',
    type: 'type-answer',
    correctAnswer: 'tooth enamel',
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '491',
    question: 'How many degrees are in a right angle?',
    type: 'multiple-choice',
    options: ['45', '90', '180', '360'],
    correctAnswer: 1,
    category: 'Math',
    difficulty: 'easy'
  },
  {
    id: '492',
    question: 'Who directed "The Lion King" (1994)?',
    type: 'type-answer',
    correctAnswer: 'roger allers',
    category: 'Movies',
    difficulty: 'hard'
  },
  {
    id: '493',
    question: 'What is the main ingredient in mayonnaise?',
    type: 'multiple-choice',
    options: ['Oil', 'Eggs', 'Vinegar', 'Mustard'],
    correctAnswer: 1,
    category: 'Food',
    difficulty: 'medium'
  },
  {
    id: '494',
    question: 'Which Norse god has an eight-legged horse?',
    type: 'type-answer',
    correctAnswer: 'odin',
    category: 'Mythology',
    difficulty: 'hard'
  },
  {
    id: '495',
    question: 'How do you say "please" in German?',
    type: 'multiple-choice',
    options: ['Danke', 'Bitte', 'Entschuldigung', 'Gern geschehen'],
    correctAnswer: 1,
    category: 'Language',
    difficulty: 'easy'
  },
  {
    id: '496',
    question: 'What does "WiFi" stand for?',
    type: 'type-answer',
    correctAnswer: 'wireless fidelity',
    category: 'Technology',
    difficulty: 'medium'
  },
  {
    id: '497',
    question: 'Which part of the brain controls balance?',
    type: 'multiple-choice',
    options: ['Cerebrum', 'Cerebellum', 'Brain stem', 'Medulla'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'hard'
  },
  {
    id: '498',
    question: 'What is the capital of Nigeria?',
    type: 'type-answer',
    correctAnswer: 'abuja',
    category: 'Geography',
    difficulty: 'hard'
  },
  {
    id: '499',
    question: 'Which instrument is Itzhak Perlman famous for playing?',
    type: 'multiple-choice',
    options: ['Piano', 'Violin', 'Cello', 'Flute'],
    correctAnswer: 1,
    category: 'Music',
    difficulty: 'hard'
  },
  {
    id: '500',
    question: 'What is the sum of all angles in a quadrilateral?',
    type: 'type-answer',
    correctAnswer: '360',
    category: 'Math',
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