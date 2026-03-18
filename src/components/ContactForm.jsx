import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

/* MAIN SERVICES → SUBSERVICES */
const serviceOptions = {
  "Purchase a product": [
    "Luxury Wig",
    "Hair Extensions",
    "Hair Care Products",
  ],
  "Hair Installation": [
    "Installation",
    "Sew-In Installation",
    "Home Service Installation(Extra charges apply)",
  ],
  Makeup: ["Studio Walk-in", "Home Service"],
  "Wig Revamp": [
    "Styling and Customization",
    "Full Lace Ventilation",
    "Texture Revamp",
    "Wig Coloring",
  ],
  Consultation: [
    "General Inquiry",
    "Make-up Advice",
    "Product Guidance",
  ],
};

/* SUBSERVICE → SPECIFICATIONS */
const subServiceSpecs = {
  "Luxury Wig": ["12 inches", "16 inches", "20 inches"],
  "Hair Extensions": ["Brazilian", "Peruvian", "Indian"],

  Installation: [
    "Closure  - ₦15,000",
    "Frontal 13*4/13*6 - ₦20,000",
    "360 Lace frontal - ₦25,000",
  ],
  "Sew-In Installation": [
    "Closure - ₦35,000",
    "Frontal 13*4/13*6 - ₦40,000",
    "360 Lace frontal - ₦45,000",
  ],
  "Home Service Installation(Extra charges apply)": [
    "Closure - ₦55,000",
    "Frontal 13*4/13*6 - ₦60,000",
    "360 Lace frontal - ₦65,000",
  ],

  "Studio Walk-in": ["Studio Walk-in - ₦25,000"],
  "Home Service": [
    "Kaduna South - ₦35,000",
    "Kaduna North - ₦45,000",
    "Outside Kaduna city - ₦45,000 + extra charges",
    "Outside Kaduna State - ₦50,000 + extra charges",
  ],

  "Styling and Customization": [
    "Closure Wig(6'-14') - ₦7,500",
    "Closure Wig(16'-30') - ₦9,000",
    "Frontal Wig(6'-14') - ₦11,000",
    "Frontal Wig(16'-38') - ₦13,000",
  ],
  "Full Lace Ventilation": [
    "2-6 Lace Closure - ₦10,000",
    "4-4 Lace Closure - ₦15,000",
    "5-5 Lace Closure - ₦20,000",
    "13-4 Lace Frontal - ₦25,000",
  ],
  "Texture Revamp": [
    "Closure Wig(6'-14') - ₦9,000",
    "Closure Wig(16'-30') - ₦12,000",
    "Frontal Wig(6'-14') - ₦13,000",
    "Frontal Wig(16'-38') - ₦15,000",
  ],
  "Wig Coloring": [
    "Wig Highlights(6'-14') - ₦8,000",
    "Wig Highlights(16'-38') - ₦15,000",
    "Full Coverage(6'-14') - ₦25,000",
    "Full Coverage(16'-38') - ₦38,000",
  ],
};

const timeSlots = ["09:00", "12:00", "15:00"];

/* TIME HELPERS */
const isTimeSlotValid = (selectedDate, slot) => {
  if (!selectedDate) return true;

  const now = new Date();
  const today = now.toISOString().split("T")[0];
  if (selectedDate !== today) return true;

  const [h, m] = slot.split(":");
  const slotTime = new Date();
  slotTime.setHours(h, m, 0, 0);

  return slotTime > now;
};

const formatTime = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`;
};

// ================= CONTACT FORM COMPONENT =================
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subservice: "",
    subservice2: "",
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [dateError, setDateError] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);

  const today = new Date().toISOString().split("T")[0];

  /* FETCH BOOKED SLOTS */
  useEffect(() => {
    if (formData.date && formData.service === "Makeup") {
      fetch(`http://localhost:5000/api/bookings/${formData.date}`)
        .then(res => res.json())
        .then(data => setBookedSlots(data))
        .catch(() => setBookedSlots([]));
    }
  }, [formData.date, formData.service]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      const selected = new Date(value);
      if (selected.getDay() === 0) {
        setDateError("Bookings are not available on Sundays.");
        return;
      } else {
        setDateError("");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "service" && {
        subservice: "",
        subservice2: "",
        date: "",
        time: "",
      }),
      ...(name === "subservice" && { subservice2: "" }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dateError) return;

    setStatus("sending");

    try {
      /* SAVE TO BACKEND */
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        setStatus("");
        return;
      }

      /* SEND EMAIL */
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        subservice: "",
        subservice2: "",
        date: "",
        time: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="contact-form-title">Purchase / Book a Service</h2>

      <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />

      <input
        name="phone"
        type="number"
        placeholder="Your Whatsapp/Phone number"
        value={formData.phone}
        onChange={(e) => {
          if (e.target.value.length <= 11) handleChange(e);
        }}
        required
      />

      <select name="service" value={formData.service} onChange={handleChange} required>
        <option value="">Select a Service</option>
        {Object.keys(serviceOptions).map((service) => (
          <option key={service} value={service}>{service}</option>
        ))}
      </select>

      {formData.service && (
        <select name="subservice" value={formData.subservice} onChange={handleChange} required>
          <option value="">Select Sub-Service</option>
          {serviceOptions[formData.service].map((sub) => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>
      )}

      {subServiceSpecs[formData.subservice] && (
        <select name="subservice2" value={formData.subservice2} onChange={handleChange} required>
          <option value="">Select Specification</option>
          {subServiceSpecs[formData.subservice].map((spec) => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
      )}

      {formData.service === "Makeup" && (
        <>
          <input type="date" name="date" min={today} value={formData.date} onChange={handleChange} required />
          {dateError && <p className="error">{dateError}</p>}

          <select name="time" value={formData.time} onChange={handleChange} required>
            <option value="">Select Time</option>
            {timeSlots.map((time) => {
              const past = !isTimeSlotValid(formData.date, time);
              const booked = bookedSlots.includes(time);

              return (
                <option key={time} value={time} disabled={past || booked}>
                  {formatTime(time)} {booked ? "(Booked)" : past ? "(Unavailable)" : ""}
                </option>
              );
            })}
          </select>
        </>
      )}

      <textarea name="message" placeholder="Additional Details" value={formData.message} onChange={handleChange} />

      <button type="submit" disabled={!!dateError}>
        {status === "sending" ? "Sending..." : "Order"}
      </button>

      {status === "success" && <p className="success">✔ Booking successful</p>}
      {status === "error" && <p className="error">✖ Something went wrong</p>}
    </form>
  );
}