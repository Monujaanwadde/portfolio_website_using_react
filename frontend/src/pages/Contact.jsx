import { useState } from "react";
import api from "../api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/contact", form);
      setStatus(res.data.msg);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Error sending message");
    }
  };

  return (
    <section id="contact" className="section reveal contact">

      {/* NEW TITLE */}
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <div className="section-subtitle">_ get in touch _</div>
      </div>

      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Your Name"
          value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />
        <input 
          placeholder="Your Email"
          value={form.email}
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />
        <textarea 
          placeholder="Your Message"
          rows="6"
          value={form.message}
          onChange={(e)=>setForm({...form,message:e.target.value})}
        />
        <button>Send Message</button>
      </form>

      {status && <p style={{marginTop:"10px"}}>{status}</p>}
    </section>
  );
}
