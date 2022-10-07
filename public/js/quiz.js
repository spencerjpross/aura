
let moodID = "";

async function moodSelect(clicked_id) {
    moodID = clicked_id;

    const response = await fetch(`/quiz/${clicked_id}`, {
        method: 'GET',
    })
    
    if (response.ok) {
        document.location.replace(`/quiz/${clicked_id}`);
    } else {
        alert('Please select a mood');
    }
};


