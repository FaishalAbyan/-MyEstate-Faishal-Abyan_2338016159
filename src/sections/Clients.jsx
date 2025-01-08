import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase"; // Import konfigurasi Firestore

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({
    name: "",
    text: "",
    feedback: "",
    image: "",
    rating: 5,
    isNew: true,
  });
  const [editingId, setEditingId] = useState(null); // Gunakan ID dari Firestore
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    fetchClients();
  }, []);

  // Fetch data dari Firestore
  const fetchClients = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "clients"));
      const clientsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClients(clientsData);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  // Submit form (add or update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        // Update mode
        const clientDoc = doc(db, "clients", editingId);
        await updateDoc(clientDoc, newClient);
      } else {
        // Add new testimonial
        await addDoc(collection(db, "clients"), newClient);
      }

      setNewClient({
        name: "",
        text: "",
        feedback: "",
        image: "",
        rating: 5,
        isNew: true,
      });
      setEditingId(null);
      fetchClients(); // Refresh data
    } catch (error) {
      console.error("Error saving client:", error);
    }
  };

  // Delete testimonial
  const handleDelete = async (id) => {
    try {
      const clientDoc = doc(db, "clients", id);
      await deleteDoc(clientDoc);
      fetchClients(); // Refresh data
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  // Edit testimonial
  const handleEdit = (client) => {
    setNewClient(client);
    setEditingId(client.id);
  };

  return (
    <div className={`${darkMode ? "dark:bg-black" : "bg-transparent"}`}>
      <section
        id="testimonials"
        className="lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            OUR CLIENTS
          </h1>
          <h1 className="text-black dark:text-white text-[40px] font-semibold leading-10">
            What our clients <br /> are saying about us
          </h1>
        </div>

        {/* Render data klien */}
        <div
          id="client-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full"
        >
          {clients.map((item) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={item.id}
              className="bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full"
            >
              <div className="flex justify-start items-center w-full gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[70px] transform hover:scale-110 transition-transform duration-300"
                />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-xl text-black font-semibold dark:text-white">
                    {item.name}
                  </h1>
                  <h1 className="text-slate-600 dark:text-white">
                    {item.text}
                  </h1>
                </div>
              </div>
              <p className="text-md text-justify text-slate-600 dark:text-white">
                {item.feedback}
              </p>
              <div className="flex justify-start items-start gap-2 w-full">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="size-4 text-yellow-400" />
                  ))}
              </div>
              <div className="flex justify-end gap-4 mt-4 w-full">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Formulir pengiriman testimoni */}
        <form onSubmit={handleSubmit} className="w-full mt-10">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            {editingId ? "Edit Testimonial" : "Submit Your Testimonial"}
          </h2>
          <input
            type="text"
            placeholder="Name"
            value={newClient.name}
            onChange={(e) =>
              setNewClient({ ...newClient, name: e.target.value })
            }
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Position"
            value={newClient.text}
            onChange={(e) =>
              setNewClient({ ...newClient, text: e.target.value })
            }
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Feedback"
            value={newClient.feedback}
            onChange={(e) =>
              setNewClient({ ...newClient, feedback: e.target.value })
            }
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newClient.image}
            onChange={(e) =>
              setNewClient({ ...newClient, image: e.target.value })
            }
            className="w-full p-2 mb-4 border rounded"
          />
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
            Rating:
          </label>
          <select
            value={newClient.rating}
            onChange={(e) =>
              setNewClient({ ...newClient, rating: parseInt(e.target.value) })
            }
            className="w-full p-2 mb-4 border rounded"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editingId ? "Update" : "Submit"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Clients;
