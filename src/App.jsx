import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./component/Home";
import TrainList from "./component/TrainList";
import SeatSelection from "./component/SeatSelection";
import BookingForm from "./component/BookingForm";
import BookingHistory from "./component/BookingHistory";
import AboutUs from "./component/AboutUs";
import HelpSupport from "./component/HelpSupport";
import Contact from "./component/Contact";

const dummyTrains = [
  {
    id: 1,
    name: "Chennai Express",
    number: "12609",
    from: "Chennai",
    to: "Bangalore",
    time: "08:30 AM",
    image: "https://i.imgur.com/59YzPqb.jpeg",
    shortDesc: "A fast and comfortable train connecting Chennai and Bangalore.",
    availableSeats: [1, 2, 3, 4, 5],
    bookedSeats: [6, 7, 8, 9, 10],
    availableDates: ["2025-11-28", "2025-11-29", "2025-11-30"],
  },

  {
    id: 2,
    name: "Bangalore Mail",
    number: "12657",
    from: "Bangalore",
    to: "Chennai",
    time: "06:00 PM",
    image: "https://i.imgur.com/YPQF2Tz.jpeg",
    shortDesc: "Reliable night train offering smooth and safe travel.",
    availableSeats: [1, 2, 3, 4],
    bookedSeats: [5, 6, 7, 8, 9],
    availableDates: ["2025-11-29", "2025-11-30"],
  },

  {
    id: 3,
    name: "Hyderabad Special",
    number: "17021",
    from: "Hyderabad",
    to: "Chennai",
    time: "04:15 PM",
    image: "https://i.imgur.com/GJ0XzvB.jpeg",
    shortDesc: "Popular day train offering clean and comfortable travel.",
    availableSeats: [1, 2, 3, 4, 5, 6],
    bookedSeats: [7, 8, 9],
    availableDates: ["2025-11-28", "2025-11-30"],
  },

  {
    id: 4,
    name: "Chennai - Hyderabad SF",
    number: "12759",
    from: "Chennai",
    to: "Hyderabad",
    time: "09:45 AM",
    image: "https://i.imgur.com/1NuHQNap.jpeg",
    shortDesc:
      "Superfast train connecting Chennai and Hyderabad with punctual service.",
    availableSeats: [1, 2, 3, 4, 5],
    bookedSeats: [6, 7, 8],
    availableDates: ["2025-11-28", "2025-11-29"],
  },

  {
    id: 5,
    name: "Bangalore - Hyderabad Express",
    number: "17030",
    from: "Bangalore",
    to: "Hyderabad",
    time: "10:30 PM",
    image: "https://i.imgur.com/L5AShDY.jpeg",
    shortDesc:
      "Comfortable overnight express connecting Bangalore & Hyderabad.",
    availableSeats: [1, 2, 3, 4, 5, 6, 7],
    bookedSeats: [8, 9, 10],
    availableDates: ["2025-11-29", "2025-11-30"],
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home trains={dummyTrains} />} />

        <Route path="/trains" element={<TrainList trains={dummyTrains} />} />

        <Route path="/booking" element={<BookingHistory />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<HelpSupport />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/train/:id/seats"
          element={<SeatSelection trains={dummyTrains} />}
        />

        <Route path="/book" element={<BookingForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
