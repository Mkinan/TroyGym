import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CalendarDays, ChevronLeft, Edit3, Trash2, UserRound } from "lucide-react";
import { formatDate, getBMI } from "../../utils/memberUtils";
import { PageHeading } from "../../components/PageHeading";
import "./MemberDetails.css";

export default function MemberDetails({ members, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = members.find((item) => item.id === id);

  if (!member) {
    return <section className="content-page"><p>Member not found.</p><Link className="btn btn-primary" to="/members">Back to Members</Link></section>;
  }

  const stats = [
    ["Height", `${member.height} cm`],
    ["Weight", `${member.weight} kg`],
    ["Goal Weight", `${member.goalWeight} kg`],
    ["BMI", getBMI(member.weight, member.height) || "—"],
    ["Age", `${member.age} years`],
    ["Gender", member.gender],
    ["Body Fat", member.bodyFat === "" ? "Not entered" : `${member.bodyFat}%`],
    ["Muscle", member.muscle === "" ? "Not entered" : `${member.muscle}%`]
  ];

  const handleDelete = () => {
    if (window.confirm(`Delete member ${member.id}? This cannot be undone.`)) {
      onDelete(member.id);
      navigate("/members");
    }
  };

  return (
    <section className="content-page">
      <PageHeading eyebrow={`MEMBER PROFILE / ${member.id}`} title="MEMBER" highlight="DETAILS">
        <div className="detail-actions">
          <Link className="btn btn-outline" to="/members"><ChevronLeft size={17} /> Back</Link>
          <Link className="btn btn-primary" to={`/members/${member.id}/edit`}><Edit3 size={16} /> Edit Member</Link>
        </div>
      </PageHeading>
      <div className="profile-card">
        <div className="profile-top">
          <div className="avatar"><UserRound size={42} /></div>
          <div><p className="eyebrow">TROY GYM MEMBER</p><h2>{member.name}</h2><span className="member-id">{member.id}</span></div>
        </div>
        <div className="registration-info">
          <div><CalendarDays /><span>Registration Date</span><strong>{formatDate(member.registrationDate)}</strong></div>
          <div><CalendarDays /><span>Membership End Date</span><strong>{formatDate(member.endDate)}</strong></div>
        </div>
        <h3 className="section-label">FITNESS INFORMATION</h3>
        <div className="stats-grid">
          {stats.map(([label, value]) => (
            <div className="stat-card" key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
        </div>
      </div>
      <div className="delete-row">
        <span>Need to remove this member?</span>
        <button className="text-delete" onClick={handleDelete}><Trash2 size={16} /> Delete Member</button>
      </div>
    </section>
  );
}