import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    const newNotes = [...notes];

    newNotes.push({
      title: title,
      content: content
    });

    setNotes(newNotes);

    setTitle("");
    setContent("");
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);

    setNotes(newNotes);
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-gray-900 to-black text-white p-5">

      <div className="flex justify-center">

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-4">

          <h1 className="text-2xl font-bold text-center tracking-wide">
            QUICK NOTES
          </h1>

          <input
            type="text"
            placeholder="Enter your heading"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />

          <textarea
            placeholder="Enter your content"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />

          <button className="bg-red-500 p-3 rounded-md font-semibold hover:bg-red-600 transition">
            Add Note
          </button>

        </form>

      </div>

      <div className="mt-10 max-w-6xl mx-auto">

        <h1 className="text-xl font-semibold mb-6">Your Notes</h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {notes.map((note, index) => (
            <div key={index} className="bg-white text-black p-4 rounded-lg shadow-md hover:scale-105 transition duration-200 flex flex-col justify-between">

              <div>
                <h2 className="font-bold text-lg mb-2">
                  {note.title}
                </h2>
                <p className="text-sm text-gray-700">
                  {note.content}
                </p>
              </div>
              <button onClick={() => deleteNote(index)} className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600">
                Delete
              </button>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default App;