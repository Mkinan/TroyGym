import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PageHeading } from "../../components/PageHeading";
import MemberForm from "../../components/MemberForm";
import { emptyMemberForm } from "../../data/initialMembers";
import "./AddMember.css";

export default function AddMember({ members, onAdd, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const existingMember = useMemo(
    () => members.find((member) => member.id === id),
    [members, id]
  );
  const [form, setForm] = useState(() => {
    if (existingMember) return { ...existingMember };
    return {
      ...emptyMemberForm,
      id: `TG${String(Date.now()).slice(-4)}`,
      registrationDate: new Date().toISOString().slice(0, 10)
    };
  });
  const [notice, setNotice] = useState("");
  const editing = Boolean(id);

  if (editing && !existingMember) {
    return <section className="content-page"><p>Member not found.</p><Link className="btn btn-primary" to="/members">Back to Members</Link></section>;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanId = form.id.trim().toUpperCase();
    const duplicate = members.some((member) =>
      member.id.toLowerCase() === cleanId.toLowerCase() && member.id !== id
    );
    if (duplicate) {
      setNotice("This Gym ID already exists. Please use a different ID.");
      return;
    }
    const cleanMember = {
      ...form,
      id: cleanId,
      name: form.name.trim(),
      height: Number(form.height),
      weight: Number(form.weight),
      age: Number(form.age),
      goalWeight: Number(form.goalWeight),
      bodyFat: form.bodyFat === "" ? "" : Number(form.bodyFat),
      muscle: form.muscle === "" ? "" : Number(form.muscle)
    };
    if (editing) onUpdate(cleanMember);
    else onAdd(cleanMember);
    navigate(`/members/${cleanMember.id}`);
  };

  return (
    <section className="content-page">
      <PageHeading eyebrow="MEMBER MANAGEMENT" title={editing ? "EDIT" : "ADD"} highlight="MEMBER" />
      <MemberForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/members")}
        editing={editing}
        notice={notice}
      />
    </section>
  );
}