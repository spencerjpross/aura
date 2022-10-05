async function postJournal(e) {
    e.preventDefault();

    const url = window.location.href;
    let mood_id = url.split('/')[4];

    console.log(mood_id);
  
    let topic = document.getElementById('journal-topic').value;
    let notes = document.getElementById('journal-notes').value;

    const response = await fetch(`/api/journals/new`, {
        method: 'POST',
        body: JSON.stringify({ notes, topic, mood_id }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        console.log('err');
        alert('Failed to submit Journal!');
    }
}

document.getElementById('Journal-Form').addEventListener('submit', postJournal);