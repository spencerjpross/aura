console.log('Script loaded successfully!');

async function journalPost(e){
    e.preventDefault();

    const response = await fetch(`/api/journsl/${journal_id}`, {
        method: 'GET'
    });

    if (response.ok) {
        document.location.replace(`/entries/${journal_id}`);
    } else {
        alert('Something went wrong!');
    }
};

async function backHome(e){
    e.preventDefault();

    const response = await fetch(`/`, {
        method: 'GET'
    });

    if (response.ok) {
        document.location.replace(`/homepage`);
    } else {
        alert('Something went wrong!');
    }
};

document.querySelector('#backHome').addEventListener('click', backHome);
