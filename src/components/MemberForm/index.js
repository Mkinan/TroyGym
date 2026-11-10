import React from "react";
import { Activity, Check } from "lucide-react";
import { getBMI } from "../../utils/memberUtils";
import "./MemberForm.css";

export default function MemberForm({
  form, onChange, onSubmit, onCancel, editing, notice
}) {
  const bmi = getBMI(form.weight, form.height);

  return (
    <form className="member-form" onSubmit={onSubmit}>
      <div className="form-fields">
        <div className="form-grid">
          <label>Gym ID *
            <input name="id" value={form.id} onChange={onChange} required placeholder="e.g. TG004" />
          </label>
          <label>Full Name *
            <input name="name" value={form.name} onChange={onChange} required placeholder="Member full name" />
          </label>
          <label>Registration Date *
            <input type="date" name="registrationDate" value={form.registrationDate} onChange={onChange} required />
          </label>
          <label>End Date *
            <input type="date" name="endDate" value={form.endDate} onChange={onChange} required />
          </label>
          <label>Height (cm) *
            <input type="number" name="height" min="1" value={form.height} onChange={onChange} required placeholder="e.g. 180" />
          </label>
          <label>Weight (kg) *
            <input type="number" name="weight" min="1" step="0.1" value={form.weight} onChange={onChange} required placeholder="e.g. 75" />
          </label>
          <label>Age *
            <input type="number" name="age" min="1" max="120" value={form.age} onChange={onChange} required placeholder="Age" />
          </label>
          <label>Gender
            <select name="gender" value={form.gender} onChange={onChange}>
              <option>Male</option><option>Female</option><option>Other</option>
            </select>
          </label>
          <label>Goal Weight (kg) *
            <input type="number" name="goalWeight" min="1" step="0.1" value={form.goalWeight} onChange={onChange} required placeholder="Target weight" />
          </label>
          <label>Body Fat (%)
            <input type="number" name="bodyFat" min="0" max="100" step="0.1" value={form.bodyFat} onChange={onChange} placeholder="Optional" />
          </label>
          <label>Muscle (%)
            <input type="number" name="muscle" min="0" max="100" step="0.1" value={form.muscle} onChange={onChange} placeholder="Optional" />
          </label>
        </div>

        {notice && <p className="form-notice">{notice}</p>}

        <div className="form-buttons">
          <button type="button" className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-primary" type="submit">
            <Check size={17} /> {editing ? "Save Changes" : "Add Member"}
          </button>
        </div>
      </div>

      <aside className="calculated-panel">
        <div className="panel-title"><Activity /><h3>Calculated Information</h3></div>
        <div className="metric"><span>Body Mass Index (BMI)</span><strong>{bmi || "—"}</strong></div>
        <div className="metric"><span>Current Weight</span><strong>{form.weight ? `${form.weight} kg` : "—"}</strong></div>
        <div className="metric"><span>Goal Weight</span><strong>{form.goalWeight ? `${form.goalWeight} kg` : "—"}</strong></div>
        <div className="metric"><span>Weight Difference</span><strong>{form.weight && form.goalWeight ? `${(Number(form.weight) - Number(form.goalWeight)).toFixed(1)} kg` : "—"}</strong></div>
        <p className="panel-hint">
          BMI updates automatically when height or weight changes. Body-fat and muscle percentages can be entered from a body-composition measurement.
        </p>
      </aside>
    </form>
  );
}