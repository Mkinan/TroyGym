import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Members from "../../pages/Members";
import AddMember from "../../pages/AddMember";
import MemberDetails from "../../pages/MemberDetails";
import Contact from "../../pages/Contact";
import { initialMembers } from "../../data/initialMembers";
import "./Website.css";

export default function Website() {
  const [members, setMembers] = useState(() => {
    try {
      const savedMembers = localStorage.getItem("troyGymMembers");
      return savedMembers ? JSON.parse(savedMembers) : initialMembers;
    } catch {
      return initialMembers;
    }
  });

  useEffect(() => {
    localStorage.setItem("troyGymMembers", JSON.stringify(members));
  }, [members]);

  const memberActions = useMemo(() => ({
    addMember: (member) => {
      setMembers((current) => [...current, member]);
    },
    updateMember: (updatedMember) => {
      setMembers((current) =>
        current.map((member) =>
          member.id === updatedMember.id ? updatedMember : member
        )
      );
    },
    deleteMember: (id) => {
      setMembers((current) => current.filter((member) => member.id !== id));
    }
  }), []);

  return (
    <div className="website">
      <Navbar />
      <main className="website-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/members"
            element={<Members members={members} onDelete={memberActions.deleteMember} />}
          />
          <Route
            path="/members/add"
            element={<AddMember members={members} onAdd={memberActions.addMember} />}
          />
          <Route
            path="/members/:id/edit"
            element={<AddMember members={members} onUpdate={memberActions.updateMember} />}
          />
          <Route
            path="/members/:id"
            element={<MemberDetails members={members} onDelete={memberActions.deleteMember} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}