import { History, Map } from "lucide-react";
import { MdCampaign, MdDiversity1 } from "react-icons/md";

const stats = [
  { icon: History, value: "8+", label: "Years of Service" },
  { icon: MdCampaign, value: "50+", label: "Campaigns Led" },
  { icon: MdDiversity1, value: "1k+", label: "Lives Impacted" },
  { icon: Map, value: "15", label: "Districts Covered" },
];

const StatsGrid = () => {
  return (
    <section className="flex justify-center px-4 md:px-10 py-16">
      <div className="layout-content-container flex flex-col max-w-7xl w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col gap-2 rounded-xl border border-border-dark bg-card-dark p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-8 h-8 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="text-white text-xs">→</span>
                </div>
              </div>
              <p className="text-white text-4xl font-bold tracking-tight">
                {stat.value.split("+")[0]}
                <span className="text-primary">
                  {stat.value.includes("+") ? "+" : ""}
                </span>
              </p>
              <p className="text-text-muted text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
