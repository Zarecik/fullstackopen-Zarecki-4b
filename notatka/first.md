```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Write note and click save
    Note right of browser: Browser captures the user input and preperes to send it to the server

    browser->>server:  https://studies.cs.helsinki.fi/exampleapp/notes

```