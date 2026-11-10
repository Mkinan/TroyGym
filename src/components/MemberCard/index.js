import React from "react";
import { Link } from "react-router-dom";
import { Edit3, Eye, Trash2 } from "lucide-react";
import { formatDate } from "../../utils/memberUtils";
import "./MemberCard.css";

export default function MemberCard({ member, onDelete }) {
  return (
    <tr>
      <td className="id-cell">{member.id}</td>
      <td>{member.name}</td>
      <td>{formatDate(member.registrationDate)}</td>
      <td>{formatDate(member.endDate)}</td>
      <td>
        <div className="table-actions">
          <Link className="icon-action view-action" to={`/members/${member.id}`}><Eye size={16} /><span>View</span></Link>
          <Link className="icon-action" to={`/members/${member.id}/edit`}><Edit3 size={16} /><span>Edit</span></Link>
          <button className="icon-action delete-action" onClick={() => onDelete(member.id)}><Trash2 size={16} /><span>Delete</span></button>
        </div>
      </td>
    </tr>
  );
}