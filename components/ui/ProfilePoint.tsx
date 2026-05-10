"use client";
import React from "react";
import Reveal from "./Reveal";

interface ProfilePointProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}

const ProfilePoint: React.FC<ProfilePointProps> = ({
  icon,
  title,
  desc,
  delay,
}) => (
  <Reveal delay={delay}>
    <div className="flex gap-6 items-start">
      <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center shrink-0 border border-black shadow-none">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
          {title}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md">{desc}</p>
      </div>
    </div>
  </Reveal>
);

export default ProfilePoint;
