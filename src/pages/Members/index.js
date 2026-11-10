import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import MemberCard from "../../components/MemberCard";
import { PageHeading } from "../../components/PageHeading";
import "./Members.css";

export default function Members({ members, onDelete }) {
  const [search, setSearch] = useState("");
  const filteredMembers = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return members;
    return members.filter((member) =>
      member.id.toLowerCase().includes(term) || member.name.toLowerCase().includes(term)
    );
  }, [members, search]);

  const handleDelete = (id) => {
    if (window.confirm(`Delete member ${id}? This cannot be undone.`)) onDelete(id);
  };

  return (
    <section className="content-page">
      <PageHeading eyebrow="MEMBER MANAGEMENT" title="OUR" highlight="MEMBERS">
        <Link className="btn btn-primary" to="/members/add"><Plus size={17} /> Add Member</Link>
      </PageHeading>
      <div className="search-row">
        <div className="search-box">
          <Search size={18} />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by Gym ID or member name..." />
        </div>
        <span className="member-count">{filteredMembers.length} members</span>
      </div>
      <div className="table-wrap">
        <table className="members-table">
          <thead><tr><th>Gym ID</th><th>Member Name</th><th>Registration Date</th><th>End Date</th><th>Actions</th></tr></thead>
          <tbody>
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} onDelete={handleDelete} />
            ))}
            {filteredMembers.length === 0 && (
              <tr><td colSpan="5" className="empty-state">No members found. Try another search or add a member.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}