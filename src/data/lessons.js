const lessons = {
  1: {
    title: "Greetings (Begrüßungen)",
    questions: [
      { type: "mcq", question: "How do you say 'Hello' in German?", options: ["Hallo", "Tschüss", "Danke"], answer: "Hallo" },
      { type: "mcq", question: "What does 'Guten Morgen' mean?", options: ["Good night", "Good morning", "Thank you"], answer: "Good morning" },
      { type: "mcq", question: "'Guten Abend' means?", options: ["Good evening", "Goodbye", "Good morning"], answer: "Good evening" },
      { type: "match", question: "Match the greetings", pairs: [
        { left: "Guten Tag", right: "Good day" },
        { left: "Auf Wiedersehen", right: "Goodbye" },
      ]},
      { type: "mcq", question: "'Wie geht's?' means?", options: ["How are you?", "What's your name?", "See you"], answer: "How are you?" },
      { type: "mcq", question: "'Danke' means?", options: ["Thank you", "Please", "Sorry"], answer: "Thank you" },
      { type: "mcq", question: "'Bitte' is used for?", options: ["Please/You're welcome", "Hello", "Goodbye"], answer: "Please/You're welcome" },
      { type: "mcq", question: "'Entschuldigung' means?", options: ["Sorry", "Thanks", "Morning"], answer: "Sorry" },
      { type: "mcq", question: "'Servus' is used in which region?", options: ["Bavaria/Austria", "Berlin", "Hamburg"], answer: "Bavaria/Austria" },
      { type: "mcq", question: "How to say 'See you soon'?", options: ["Bis bald", "Guten Abend", "Danke"], answer: "Bis bald" }
    ]
  },

  2: {
    title: "Days of the Week (Wochentage)",
    questions: [
      { type: "mcq", question: "'Montag' means?", options: ["Monday", "Tuesday", "Sunday"], answer: "Monday" },
      { type: "mcq", question: "'Dienstag' is?", options: ["Tuesday", "Thursday", "Friday"], answer: "Tuesday" },
      { type: "mcq", question: "'Mittwoch' is?", options: ["Wednesday", "Monday", "Friday"], answer: "Wednesday" },
      { type: "mcq", question: "'Donnerstag' is?", options: ["Thursday", "Sunday", "Tuesday"], answer: "Thursday" },
      { type: "mcq", question: "'Freitag' is?", options: ["Friday", "Saturday", "Monday"], answer: "Friday" },
      { type: "mcq", question: "'Samstag' means?", options: ["Saturday", "Sunday", "Monday"], answer: "Saturday" },
      { type: "mcq", question: "'Sonntag' is?", options: ["Sunday", "Tuesday", "Friday"], answer: "Sunday" },
      { type: "match", question: "Match abbreviations", pairs: [
        { left: "Mo", right: "Montag" },
        { left: "Di", right: "Dienstag" },
      ]},
      { type: "mcq", question: "'Wochenende' means?", options: ["Weekend", "Weekday", "Friday"], answer: "Weekend" },
      { type: "mcq", question: "Which days are weekends?", options: ["Samstag & Sonntag", "Montag & Dienstag", "Freitag & Samstag"], answer: "Samstag & Sonntag" }
    ]
  },

  3: {
    title: "Numbers 1–15 (Zahlen 1–15)",
    questions: [
      { type: "mcq", question: "'Eins' is?", options: ["1", "2", "3"], answer: "1" },
      { type: "mcq", question: "'Zwei' means?", options: ["2", "3", "4"], answer: "2" },
      { type: "mcq", question: "'Drei' is?", options: ["3", "4", "5"], answer: "3" },
      { type: "mcq", question: "'Vier' means?", options: ["4", "5", "6"], answer: "4" },
      { type: "mcq", question: "'Fünf' is?", options: ["5", "6", "7"], answer: "5" },
      { type: "mcq", question: "'Sechs' is?", options: ["6", "7", "8"], answer: "6" },
      { type: "match", question: "Match numbers", pairs: [
        { left: "Sieben", right: "7" },
        { left: "Acht", right: "8" },
      ]},
      { type: "mcq", question: "'Neun' is?", options: ["9", "10", "11"], answer: "9" },
      { type: "mcq", question: "'Zehn' is?", options: ["10", "11", "12"], answer: "10" },
      { type: "mcq", question: "'Elf' is?", options: ["11", "12", "13"], answer: "11" }
    ]
  },

  4: {
    title: "Introducing Ourselves (Vorstellen)",
    questions: [
      { type: "mcq", question: "'Ich heiße...' means?", options: ["I am called...", "I live...", "I am happy"], answer: "I am called..." },
      { type: "mcq", question: "'Mein Name ist...' means?", options: ["My name is...", "I am...", "Thank you"], answer: "My name is..." },
      { type: "mcq", question: "'Ich komme aus...' means?", options: ["I come from...", "I like...", "I want"], answer: "I come from..." },
      { type: "mcq", question: "'Ich wohne in...' means?", options: ["I live in...", "I like...", "I am called"], answer: "I live in..." },
      { type: "match", question: "Match phrases", pairs: [
        { left: "Wie heißt du?", right: "What's your name?" },
        { left: "Woher kommst du?", right: "Where are you from?" },
      ]},
      { type: "mcq", question: "'Ich bin Student' means?", options: ["I am a student", "I am tired", "I am from Berlin"], answer: "I am a student" },
      { type: "mcq", question: "'Ich mag Musik' means?", options: ["I like music", "I play music", "I am music"], answer: "I like music" },
      { type: "mcq", question: "'Ich spreche Deutsch' means?", options: ["I speak German", "I study German", "I write German"], answer: "I speak German" },
      { type: "mcq", question: "'Ich lerne Englisch' means?", options: ["I learn English", "I am English", "I speak English"], answer: "I learn English" },
      { type: "mcq", question: "'Ich bin müde' means?", options: ["I am tired", "I am happy", "I am hungry"], answer: "I am tired" }
    ]
  },

  5: {
    title: "Basic Phrases (Grundlegende Sätze)",
    questions: [
      { type: "mcq", question: "'Ja' means?", options: ["Yes", "No", "Maybe"], answer: "Yes" },
      { type: "mcq", question: "'Nein' means?", options: ["No", "Yes", "Please"], answer: "No" },
      { type: "mcq", question: "'Vielleicht' means?", options: ["Maybe", "Always", "Never"], answer: "Maybe" },
      { type: "mcq", question: "'Ich verstehe' means?", options: ["I understand", "I write", "I know"], answer: "I understand" },
      { type: "mcq", question: "'Ich weiß nicht' means?", options: ["I don't know", "I know", "I am"], answer: "I don't know" },
      { type: "mcq", question: "'Können Sie wiederholen?' means?", options: ["Can you repeat?", "Can you help?", "Can you go?"], answer: "Can you repeat?" },
      { type: "mcq", question: "'Sprechen Sie Englisch?' means?", options: ["Do you speak English?", "Do you study English?", "Are you English?"], answer: "Do you speak English?" },
      { type: "mcq", question: "'Hilfe!' means?", options: ["Help!", "Stop!", "Go!"], answer: "Help!" },
      { type: "mcq", question: "'Entschuldigen Sie' means?", options: ["Excuse me", "Goodbye", "Hello"], answer: "Excuse me" },
      { type: "mcq", question: "'Kein Problem' means?", options: ["No problem", "Good job", "Don't worry"], answer: "No problem" }
    ]
  }
};

export default lessons;
