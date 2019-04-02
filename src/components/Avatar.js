import React from "react";

export default function Avatar({ profile, big = false }) {
  const colors = [
    "red lighten-1",
    "pink lighten-3",
    "purple lighten-3",
    "deep-purple lighten-3",
    "indigo lighten-2",
    "blue lighten-1",
    "cyan",
    "teal lighten-2",
    "green lighten-2",
    "amber lighten-1",
    "orange lighten-2"
  ];
  const initials = profile.isEmpty
    ? ""
    : profile.firstName[0] + profile.lastName[0];
  const index = initials
    ? (initials.charCodeAt(0) + initials.charCodeAt(1)) % (colors.length - 1)
    : 0;
  const large = big ? "btn-large z-depth-0" : null;
  return (
    <div className={`btn btn-floating ${large} ${colors[index]}`}>
      {initials}
    </div>
  );
}
