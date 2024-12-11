const worksheets = [
  { id: 1, topic: 'beauty standards', level: 'B1', name: 'Changing ideas of beauty', file: 'worksheets/Changing_ideas_of_beauty.pdf', answerKey: 'worksheets/keys/Changing_ideas_of_beauty_KEY.pdf', sources: ['https://www.teachingenglish.org.uk/teaching-resources/teaching-adults/lesson-plans/intermediate-b1/changing-ideas-beauty'], thumbnail: 'thumbnails/Changing_ideas_of_beauty.png', categories: 'reading' },
  { id: 2, topic: 'crime and punishment', level: 'B2', name: 'Crime and Punishment', file: 'worksheets/Crime & Punishment - 8 exercises.pdf', answerKey: 'worksheets/keys/Crime & Punishment - 8 exercises KEY.pdf', sources: [], thumbnail: 'thumbnails/Crime & Punishment - 8 exercises.png', categories: 'vocabulary, use of english, writing' },
  { id: 3, topic: 'crime and punishment', level: 'B1', name: 'Crime  and vocabulary', file: 'worksheets/Crime Listening and vocabulary.pdf', answerKey: 'https://www.liveworksheets.com/w/en/english-second-language-esl/145093', sources: ["https://www.liveworksheets.com/w/en/english-second-language-esl/145093"], thumbnail: 'thumbnails/Crime Listening and vocabulary.png', categories: 'vocabulary, listening' },
  { id: 4, topic: 'crime and punishment', level: 'C1', name: 'Crime-and-punishment', file: 'worksheets/crime-and-punishment.pdf', answerKey: 'worksheets/crime-and-punishment KEY.pdf', sources: ["https://www.linguahouse.com/esl-lesson-plans/general-english/crime-and-punishment"], thumbnail: 'thumbnails/crime-and-punishment.png', categories: 'vocabulary, speaking' },
  // Add more worksheets here...
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