
document.addEventListener('DOMContentLoaded', () => {
  const scheduleContainer = document.getElementById('schedule-container');
  const categorySearch = document.getElementById('category-search');
  const timeFilter = document.getElementById('time-filter');

  let talks = [];

  fetch('/api/talks')
    .then(response => response.json())
    .then(data => {
      talks = data;
      renderSchedule(talks);
      populateTimeFilter(talks);
    });

  categorySearch.addEventListener('input', () => {
    const searchTerm = categorySearch.value.toLowerCase();
    const filteredTalks = talks.filter(talk => 
      talk.category.some(cat => cat.toLowerCase().includes(searchTerm))
    );
    renderSchedule(filteredTalks);
  });

  timeFilter.addEventListener('change', () => {
    const selectedTime = timeFilter.value;
    if (selectedTime) {
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const selectedDate = new Date();
      selectedDate.setHours(hours, minutes, 0, 0);

      const filteredTalks = talks.filter(talk => {
        const talkTime = getTalkStartTime(talks.indexOf(talk));
        return talkTime.getHours() === selectedDate.getHours() && talkTime.getMinutes() === selectedDate.getMinutes();
      });
      renderSchedule(filteredTalks);
    } else {
      renderSchedule(talks);
    }
  });

  function renderSchedule(talksToRender) {
    scheduleContainer.innerHTML = '';
    let currentTime = new Date();
    currentTime.setHours(10, 0, 0, 0); // Event starts at 10:00 AM

    talks.forEach((talk, index) => {
      if (!talksToRender.includes(talk)) return;

      const talkTime = getTalkStartTime(index);
      scheduleContainer.appendChild(createTalkElement(talk, talkTime));

      if (index === 2) { // Lunch break after the 3rd talk
        const lunchTime = new Date(talkTime.getTime() + 60 * 60 * 1000);
        scheduleContainer.appendChild(createBreakElement('Lunch Break', lunchTime, 60));
      } else if (index < talks.length - 1) {
        const breakTime = new Date(talkTime.getTime() + 60 * 60 * 1000);
        scheduleContainer.appendChild(createBreakElement('Break', breakTime, 10));
      }
    });
  }

  function createTalkElement(talk, startTime) {
    const endTime = new Date(startTime.getTime() + talk.duration * 60 * 1000);
    const element = document.createElement('div');
    element.classList.add('talk');
    element.innerHTML = `
      <h5>${formatTime(startTime)} - ${formatTime(endTime)}</h5>
      <h3>${talk.title}</h3>
      <p><strong>Speakers:</strong> ${talk.speakers.join(', ')}</p>
      <p><strong>Category:</strong> ${talk.category.join(', ')}</p>
      <p>${talk.description}</p>
    `;
    return element;
  }

  function createBreakElement(title, startTime, duration) {
    const endTime = new Date(startTime.getTime() + duration * 60 * 1000);
    const element = document.createElement('div');
    element.classList.add('break');
    element.innerHTML = `
      <h5>${formatTime(startTime)} - ${formatTime(endTime)}</h5>
      <h4>${title}</h4>
    `;
    return element;
  }

  function populateTimeFilter(talks) {
    talks.forEach((talk, index) => {
      const talkTime = getTalkStartTime(index);
      const option = document.createElement('option');
      option.value = formatTime(talkTime, true);
      option.textContent = formatTime(talkTime);
      timeFilter.appendChild(option);
    });
  }

  function getTalkStartTime(index) {
    let time = new Date();
    time.setHours(10, 0, 0, 0);

    for (let i = 0; i < index; i++) {
      time.setMinutes(time.getMinutes() + 60); // Add talk duration
      if (i === 2) { // After 3rd talk
        time.setMinutes(time.getMinutes() + 60); // Lunch break
      } else {
        time.setMinutes(time.getMinutes() + 10); // Regular break
      }
    }
    return time;
  }

  function formatTime(date, machineReadable = false) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    if (machineReadable) {
      return `${hours}:${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
});
