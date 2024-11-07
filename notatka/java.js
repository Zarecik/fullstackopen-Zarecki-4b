document.addEventListener("DOMContentLoaded", function() {
    // Testowe dane JSON
    const data = [
        { "content": "Pierwsza notatka" },
        { "content": "Druga notatka" }
    ];

    function loadNotes() {
        // Tworzenie elementu ul
        var ul = document.createElement('ul');
        ul.setAttribute('class', 'notes');
        
        // Dodawanie elementów li do ul
        data.forEach(function(note) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(note.content));
            ul.appendChild(li);
        });
        
        // Dodawanie ul do kontenera
        document.getElementById("notes").appendChild(ul);
    }

    function addNote() {
        const input = document.getElementById("note-input");
        const newNote = input.value.trim();
        
        if (newNote) {
            // Dodaj nową notatkę do danych
            data.push({ "content": newNote });

            // Odśwież listę notatek
            document.getElementById("notes").innerHTML = "";
            loadNotes();

            // Wyczyść pole tekstowe
            input.value = "";
        }
    }

    // Ładuj notatki na starcie
    loadNotes();

    // Obsługuje wysyłanie formularza
    document.getElementById("note-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Zapobiega przeładowaniu strony
        addNote();
    });
});
