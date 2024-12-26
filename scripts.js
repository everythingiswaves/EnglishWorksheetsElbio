const worksheets = [
  { id: 1, topic: 'beauty standards', level: 'B1', name: 'Changing ideas of beauty', file: 'worksheets/Changing_ideas_of_beauty.pdf', answerKey: 'worksheets/keys/Changing_ideas_of_beauty_KEY.pdf', sources: ['https://www.teachingenglish.org.uk/teaching-resources/teaching-adults/lesson-plans/intermediate-b1/changing-ideas-beauty'], thumbnail: 'thumbnails/Changing_ideas_of_beauty.png', categories: 'reading' },
  { id: 2, topic: 'crime and punishment', level: 'B2', name: 'Crime and Punishment', file: 'worksheets/Crime & Punishment - 8 exercises.pdf', answerKey: 'worksheets/keys/Crime & Punishment - 8 exercises KEY.pdf', sources: [], thumbnail: 'thumbnails/Crime & Punishment - 8 exercises.png', categories: 'vocabulary, use of english, writing' },
  { id: 3, topic: 'crime and punishment', level: 'B1', name: 'Crime  and vocabulary', file: 'worksheets/Crime Listening and vocabulary.pdf', answerKey: 'https://www.liveworksheets.com/w/en/english-second-language-esl/145093', sources: ["https://www.liveworksheets.com/w/en/english-second-language-esl/145093"], thumbnail: 'thumbnails/Crime Listening and vocabulary.png', categories: 'vocabulary, listening' },
  { id: 4, topic: 'crime and punishment', level: 'C1', name: 'Crime-and-punishment', file: 'worksheets/crime-and-punishment.pdf', answerKey: 'worksheets/keys/crime-and-punishment KEY.pdf', sources: ["https://www.linguahouse.com/esl-lesson-plans/general-english/crime-and-punishment"], thumbnail: 'thumbnails/crime-and-punishment.png', categories: 'vocabulary, speaking' },
  { id: 5, topic: 'employment', level: 'B2', name: 'Work From Home', file: 'worksheets/Work From Home.pdf', answerKey: '', sources: ["https://www.youtube.com/watch?v=dVfzrnSwfEk"], thumbnail: 'thumbnails/Work From Home.png', categories: 'vocabulary, speaking, listening' },
  { id: 6, topic: 'communication and technology', level: 'A2', name: 'Brains-Better.-Faster.-Stronger', file: 'worksheets/Brains-Better.-Faster.-Stronger.pdf', answerKey: 'worksheets/keys/Brains-Better.-Faster.-StrongerKEY.pdf', sources: ["https://eslbrains.com/comparative-and-superlative-adjectives/"], thumbnail: 'thumbnails/Brains-Better.-Faster.-Stronger.png', categories: 'vocabulary, speaking, listening' },
  { id: 7, topic: 'fame', level: 'B1', name: 'Brains-The-stories-of-famous-entrepreneurs', file: 'worksheets/Brains-The-stories-of-famous-entrepreneurs.pdf', answerKey: 'worksheets/keys/Brains-The-stories-of-famous-entrepreneursKEY.pdf', sources: ["https://eslbrains.com/the-stories-of-famous-entrepreneurs-past-simple-revision/"], thumbnail: 'thumbnails/Brains-The-stories-of-famous-entrepreneurs.png', categories: 'use of english' },
  { id: 8, topic: 'festivals', level: 'B1', name: 'fire-and-light-festivals', file: 'worksheets/fire-and-light-festivals.pdf', answerKey: 'worksheets/keys/fire-and-light-festivalsKEY.pdf', sources: ["https://www.linguahouse.com/esl-lesson-plans/general-english/fire-and-light-festivals"], thumbnail: 'thumbnails/fire-and-light-festivals.png', categories: 'reading, listening' },
  { id: 9, topic: 'money management', level: 'B2', name: 'money-and-banking', file: 'worksheets/money-and-banking.pdf', answerKey: 'worksheets/keys/money-and-bankingKEY.pdf', sources: ["https://www.linguahouse.com/esl-lesson-plans/general-english/money-and-banking"], thumbnail: 'thumbnails/money-and-banking.png', categories: 'listening, vocabulary' },
  { id: 10, topic: 'crime and punishment', level: 'B1', name: 'Crimes Vocabulary', file: 'worksheets/Crimes Vocabulary.pdf', answerKey: '', sources: "", thumbnail: 'thumbnails/Crimes Vocabulary.png', categories: 'vocabulary' },
  { id: 11, topic: 'storytelling', level: 'B1', name: 'short-stories-british-tales-florence-nightingale', file: 'worksheets/short-stories-british-tales-florence-nightingale.pdf', answerKey: 'worksheets/keys/short-stories-british-tales-florence-nightingaleKEY.pdf', sources: ["https://learnenglishkids.britishcouncil.org/listen-watch/short-stories/florence-nightingale"], thumbnail: 'thumbnails/short-stories-british-tales-florence-nightingale.png', categories: 'listening, vocabulary, writing' },
  { id: 12, topic: 'storytelling', level: 'A2', name: 'what-did-i-turn-into', file: 'worksheets/what-did-i-turn-into.pdf', answerKey: '', sources: "", thumbnail: 'thumbnails/what-did-i-turn-into.png', categories: 'reading, writing' },
  { id: 13, topic: 'communication and technology', level: 'B2', name: 'Brains-Todays-teens-are-going-through-a-lot', file: 'worksheets/Brains-Todays-teens-are-going-through-a-lot.pdf', answerKey: 'worksheets/keys/Brains-Todays-teens-are-going-through-a-lotKEY.pdf', sources: ["https://www.youtube.com/watch?v=I-qmaC1bVHI&ab_channel=Edutopia"], thumbnail: 'thumbnails/Brains-Todays-teens-are-going-through-a-lot.png', categories: 'use of english, reading, listening, speaking' },
  { id: 14, topic: 'travelling', level: 'B2', name: 'a_more_formal_email', file: 'worksheets/a_more_formal_email.pdf', answerKey: 'worksheets/keys/a_more_formal_emailKEY.pdf', sources: ["https://learnenglishteens.britishcouncil.org/skills/writing/b2-writing/more-formal-email"], thumbnail: 'thumbnails/a_more_formal_email.png', categories: 'writing, reading' },
  { id: 15, topic: 'family life', level: 'C1', name: 'Families-extended-nuclear-chosen', file: 'worksheets/Families-extended-nuclear-chosen.pdf', answerKey: 'worksheets/keys/Families-extended-nuclear-chosenKEY.pdf', sources: ["https://youtu.be/sd9d5z7idyQ"], thumbnail: 'thumbnails/Families-extended-nuclear-chosen.png', categories: 'vocabulary, listening, speaking' },
  { id: 16, topic: 'fashion', level: 'B2', name: 'Clothes and accesories', file: 'worksheets/Clothes and accesories.pdf', answerKey: 'worksheets/keys/Clothes and accesoriesKEY.pdf', sources: "", thumbnail: 'thumbnails/Clothes and accesories.png', categories: 'vocabulary' },
  { id: 17, topic: 'fashion', level: 'B2', name: 'Talking about fashion', file: 'worksheets/Talking about fashion.pdf', answerKey: 'worksheets/keys/Talking about fashionKEY.pdf', sources: "", thumbnail: 'thumbnails/Talking about fashion.png', categories: 'vocabulary, speaking' },
  { id: 18, topic: 'festivals', level: 'B2', name: 'christmas-music', file: 'worksheets/christmas-music.pdf', answerKey: 'worksheets/keys/christmas-musicKEY.pdf', sources: ["https://www.linguahouse.com/esl-lesson-plans/general-english/christmas-music"], thumbnail: 'thumbnails/christmas-music.png', categories: 'reading, vocabualry' },
  { id: 19, topic: 'ethics and human rights', level: 'B2', name: "International women's day", file: "worksheets/International women's day.pdf", answerKey: "worksheets/International women's daykeys/KEY.pdf", sources: "", thumbnail: "thumbnails/International women's day.png", categories: 'reading, vocabulary, speaking, writing' },
  { id: 21, topic: 'employment', level: 'B2', name: 'Work-life-balance', file: 'worksheets/Work-life-balance.pdf', answerKey: 'worksheets/keys/Work-life-balanceKEY.pdf', sources: ["https://learnenglish.britishcouncil.org/skills/reading/b2-reading/work-life-balance"], thumbnail: 'thumbnails/Work-life-balance.png', categories: 'reading' },
  { id: 22, topic: 'employment', level: 'B2', name: 'Millennials-in-the-workplace', file: 'worksheets/Millennials-in-the-workplace.pdf', answerKey: 'worksheets/keys/Millennials-in-the-workplaceKEY.pdf', sources: ["https://learnenglish.britishcouncil.org/skills/reading/b2-reading/millennials-workplace"], thumbnail: 'thumbnails/Millennials-in-the-workplace.png', categories: 'reading, vocabulary' },
  { id: 23, topic: 'money management', level: 'B1', name: 'Are-you-a-saver-or-a-spender', file: 'worksheets/Are-you-a-saver-or-a-spender.pdf', answerKey: 'worksheets/keys/Are-you-a-saver-or-a-spenderKEY.pdf', sources: ["https://eslbrains.com/are-you-a-saver-or-a-spender/"], thumbnail: 'thumbnails/Are-you-a-saver-or-a-spender.png', categories: 'vocabulary, use of english, listening' },
  { id: 24, topic: '', level: 'B1', name: 'Reading activity-The noticeboard', file: 'worksheets/Reading activity-The noticeboard.pdf', answerKey: 'worksheets/keys/Reading activity-The noticeboardKEY.pdf', sources: ["https://learnenglishteens.britishcouncil.org/skills/reading/b1-reading/noticeboard"], thumbnail: 'thumbnails/Reading activity-The noticeboard.png', categories: 'reading' },
  { id: 25, topic: 'conspiracy theories', level: 'B1', name: 'Reading comprehension- Nessie', file: 'worksheets/Reading comprehension- Nessie.pdf', answerKey: 'worksheets/keys/Reading comprehension- NessieKEY.pdf', sources: [""], thumbnail: 'thumbnails/Reading comprehension- Nessie.png', categories: 'reading' },
  { id: 26, topic: 'fame', level: 'B1', name: 'Social-media-influencers', file: 'worksheets/Social-media-influencers.pdf', answerKey: 'worksheets/keys/Social-media-influencersKEY.pdf', sources: ["https://learnenglish.britishcouncil.org/skills/reading/b1-reading/social-media-influencers"], thumbnail: 'thumbnails/Social-media-influencers.png', categories: 'reading' },
  { id: 27, topic: 'festivals', level: 'B2', name: 'Festivals Listening Comprehension', file: 'worksheets/Festivals Listening Comprehension.pdf', answerKey: 'worksheets/keys/Festivals Listening ComprehensionKEY.pdf', sources: ["https://www.youtube.com/watch?v=IM_knhDTCGU"], thumbnail: 'thumbnails/Festivals Listening Comprehension.png', categories: 'listening' },
  { id: 28, topic: 'festivals', level: 'B2', name: 'Festivals Reading Comprehension', file: 'worksheets/Festivals Reading Comprehension.pdf', answerKey: 'worksheets/keys/Festivals Reading ComprehensionKEY.pdf', sources: "", thumbnail: 'thumbnails/Festivals Reading Comprehension.png', categories: 'reading' },
  { id: 29, topic: 'communication and technology', level: 'B1', name: 'Computer Gaming', file: 'worksheets/Computer Gaming.pdf', answerKey: 'worksheets/keys/Computer GamingKEY.pdf', sources: ["https://www.teachingenglish.org.uk/teaching-resources/teaching-secondary/lesson-plans/intermediate-b1/computer-gaming"], thumbnail: 'thumbnails/Computer Gaming.png', categories: 'reading, vocabulary, speaking' },
  { id: 30, topic: 'arts and creativity', level: 'A2', name: 'Salvador Dali', file: 'worksheets/Salvador Dali.pdf', answerKey: '', sources: "", thumbnail: 'thumbnails/Salvador Dali.png', categories: 'reading' },
  { id: 30, topic: 'arts and creativity', level: 'A2', name: 'Street art', file: 'worksheets/Street art.pdf', answerKey: '', sources: "", thumbnail: 'thumbnails/Street art.png', categories: 'reading' },
];

function filterWorksheets() {
  const topicElement = document.getElementById('topic');
  const levelElement = document.getElementById('level');
  const categoryElement = document.getElementById('category');
  const list = document.getElementById('worksheet-list');

  if (!topicElement || !levelElement || !categoryElement || !list) {
    console.error('Required elements are missing');
    return;
  }

  const topic = topicElement.value;
  const level = levelElement.value;
  const category = categoryElement.value;
  list.innerHTML = '';

  const filteredWorksheets = worksheets.filter(ws => 
    (topic === '' || ws.topic === topic) && 
    (level === '' || ws.level === level) &&
    (category === '' || ws.categories.split(', ').includes(category))
  );

  console.log('Filtered Worksheets:', filteredWorksheets);

  if (filteredWorksheets.length === 0) {
    const noResultsItem = document.createElement('li');
    noResultsItem.textContent = 'No worksheets found';
    list.appendChild(noResultsItem);
  } else {
    filteredWorksheets.forEach(ws => {
      const listItem = document.createElement('li');

      const thumbnail = document.createElement('img');
      thumbnail.src = ws.thumbnail;
      thumbnail.alt = `${ws.name} thumbnail`;
      thumbnail.style.width = '100px'; // Adjust the size as needed
      listItem.appendChild(thumbnail);

      const link = document.createElement('a');
      link.href = ws.file;
      link.textContent = ws.name;
      link.target = '_blank';
      listItem.appendChild(link);

      const levelText = document.createElement('span');
      levelText.textContent = ws.level;
      listItem.appendChild(levelText);

      const categoriesText = document.createElement('span');
      categoriesText.textContent = ws.categories;
      listItem.appendChild(categoriesText);

      const answerKeyLink = document.createElement('a');
      answerKeyLink.href = ws.answerKey || '#';
      answerKeyLink.textContent = ws.answerKey ? 'Answer Key' : 'N/A';
      answerKeyLink.target = ws.answerKey ? '_blank' : '';
      listItem.appendChild(answerKeyLink);

      if (ws.sources.length > 0) {
        ws.sources.forEach((source, index) => {
          const sourceLink = document.createElement('a');
          sourceLink.href = source;
          sourceLink.textContent = `Source ${index + 1}`;
          sourceLink.target = '_blank';
          listItem.appendChild(sourceLink);
        });
      } else {
        const noSourceLink = document.createElement('a');
        noSourceLink.href = '#';
        noSourceLink.textContent = 'N/A';
        listItem.appendChild(noSourceLink);
      }

      list.appendChild(listItem);
    });
  }

  console.log('List updated');
}

function clearFilters() {
  document.getElementById('topic').value = '';
  document.getElementById('level').value = '';
  document.getElementById('category').value = '';
  filterWorksheets();
}

// Call filterWorksheets when the script loads to display all worksheets initially
filterWorksheets();