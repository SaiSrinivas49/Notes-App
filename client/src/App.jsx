import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        title,
        content
      });

      setNotes((prevNotes) => [response.data, ...prevNotes]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Student Notes</h1>
        <p>Create and manage your notes</p>
      </header>

      <main>
        <section className="form-section">
          <h2>Add a Note</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Write your note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="5"
            />

            <button type="submit">Add Note</button>
          </form>
        </section>

        <section className="notes-section">
          <h2>Your Notes</h2>

          {loading ? (
            <p className="status">Loading notes...</p>
          ) : notes.length === 0 ? (
            <p className="status">No notes yet — add one above!</p>
          ) : (
            <div className="notes-list">
              {notes.map((note) => (
                <article className="note-card" key={note._id}>
                  <div className="note-header">
                    <h3>{note.title}</h3>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(note._id)}
                    >
                      Delete
                    </button>
                  </div>

                  <p className="note-content">{note.content}</p>

                  <p className="note-date">
                    {new Date(note.createdAt).toLocaleString()}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;