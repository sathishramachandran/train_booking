import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainShowcase.css";

export default function TrainShowcase({ trains }) {
  const navigate = useNavigate();

  const stations = useMemo(() => {
    const set = new Set();
    trains.forEach((t) => {
      if (t.from) set.add(t.from);
      if (t.to) set.add(t.to);
    });
    return Array.from(set);
  }, [trains]);

  const [selections, setSelections] = useState(() => {
    const init = {};
    trains.forEach((t) => {
      init[t.id] = {
        from: t.from || "",
        to: t.to || "",
        date: (t.availableDates && t.availableDates[0]) || "",
      };
    });
    return init;
  });

  const handleChange = (trainId, field, value) => {
    setSelections((s) => ({
      ...s,
      [trainId]: { ...s[trainId], [field]: value },
    }));
  };

  const handleProceed = (train) => {
    const sel = selections[train.id] || {};
    if (!sel.from || !sel.to || !sel.date) {
      alert("Please choose From, To and Date.");
      return;
    }

    navigate(`/train/${train.id}/seats`, { state: { date: sel.date } });
  };

  return (
    <section className="showcase-container">
      <h2 className="showcase-title">Our Trains</h2>

      <div className="train-card-grid">
        {trains.map((train) => {
          const sel = selections[train.id] || {};
          return (
            <article className="train-card" key={train.id}>
              <img
                className="train-img"
                src={train.image || "https://i.imgur.com/59YzPqb.jpeg"}
                alt={train.name}
              />

              <div className="train-card-body">
                <div className="train-headline">
                  <h3 className="train-name">{train.name}</h3>
                  <span className="train-number">#{train.number}</span>
                </div>

                <p className="train-route">
                  {train.from} → {train.to} • {train.time}
                </p>

                <p className="train-desc">
                  {train.shortDesc ||
                    `Experience a comfortable journey on ${train.name}. Enjoy punctual service, clean coaches, and safe travel.`}
                </p>

                <div className="card-dropdowns">
                  <div className="form-group small">
                    <label>From</label>
                    <select
                      value={sel.from || ""}
                      onChange={(e) =>
                        handleChange(train.id, "from", e.target.value)
                      }
                    >
                      <option value="">Select</option>
                      {stations.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group small">
                    <label>To</label>
                    <select
                      value={sel.to || ""}
                      onChange={(e) =>
                        handleChange(train.id, "to", e.target.value)
                      }
                    >
                      <option value="">Select</option>
                      {stations.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group small">
                    <label>Date</label>
                    <select
                      value={sel.date || ""}
                      onChange={(e) =>
                        handleChange(train.id, "date", e.target.value)
                      }
                    >
                      <option value="">Select Date</option>
                      {(train.availableDates || []).map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="card-btn"
                    onClick={() => handleProceed(train)}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
