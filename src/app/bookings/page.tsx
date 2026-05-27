"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data to populate the UI
const upcomingSessions = [
  {
    id: "bk-101",
    trainer: "MARCUS T.",
    type: "HYPERTROPHY X-1",
    date: "OCT 16, 2024",
    time: "08:00 AM - 09:00 AM",
    location: "London Hub / Floor 2",
    status: "CONFIRMED",
    isLiveSoon: false,
  },
  {
    id: "bk-102",
    trainer: "SARAH J.",
    type: "MOBILITY & RECOVERY",
    date: "OCT 18, 2024",
    time: "06:30 PM - 07:15 PM",
    location: "Remote / Digital Link",
    status: "PENDING",
    isLiveSoon: false,
  }
];

const pastSessions = [
  {
    id: "bk-099",
    trainer: "MARCUS T.",
    type: "STRENGTH PROTOCOL",
    date: "OCT 12, 2024",
    time: "08:00 AM - 09:00 AM",
    metrics: "Volume: +12%",
  },
  {
    id: "bk-098",
    trainer: "DAVID L.",
    type: "HIIT CONDITIONING",
    date: "OCT 09, 2024",
    time: "07:00 AM - 07:45 AM",
    metrics: "Avg HR: 168 BPM",
  }
];

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "history">("upcoming");

  return (
    <div className="pt-16 pb-32 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      
      {/* Header */}
      <header className="mb-12 mt-8 md:mt-12">
        <span className="font-label-md text-primary-container tracking-widest uppercase mb-4 block">
          Client Dashboard
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-4 leading-none uppercase tracking-tighter">
          Your Schedule
        </h1>
        <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-2xl">
          Manage your upcoming elite performance sessions, review past metrics, and maintain your training cadence.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        
        {/* Main Content Area (Left Column) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Custom Tabs */}
          <div className="flex gap-4 border-b border-outline-variant/50 pb-px">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`pb-4 font-label-md tracking-widest uppercase transition-all border-b-2 ${
                activeTab === "upcoming"
                  ? "text-primary border-primary-container"
                  : "text-on-surface-variant border-transparent hover:text-primary"
              }`}
            >
              Upcoming ({upcomingSessions.length})
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`pb-4 font-label-md tracking-widest uppercase transition-all border-b-2 ${
                activeTab === "history"
                  ? "text-primary border-primary-container"
                  : "text-on-surface-variant border-transparent hover:text-primary"
              }`}
            >
              History
            </button>
          </div>

          {/* Tab Content: Upcoming */}
          {activeTab === "upcoming" && (
            <div className="space-y-4 animate-in fade-in duration-500">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="glass-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row justify-between md:items-center gap-6 border-l-4 border-l-primary-fixed-dim hover:border-l-primary-container transition-colors">
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center gap-3">
                      <span className={`font-label-md text-[10px] px-2 py-1 rounded uppercase tracking-widest ${
                        session.status === 'CONFIRMED' ? 'bg-secondary-container/20 text-secondary-fixed-dim' : 'bg-surface-variant text-on-surface'
                      }`}>
                        {session.status}
                      </span>
                      <span className="font-label-md text-primary-fixed-dim text-[10px] tracking-widest uppercase">
                        {session.trainer}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="font-headline-md text-primary uppercase">{session.type}</h3>
                      <p className="font-body-md text-on-surface-variant mt-1">
                        {session.date} • {session.time}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px]">
                        {session.location.includes("Remote") ? "videocam" : "location_on"}
                      </span>
                      <span className="font-label-md text-xs tracking-widest uppercase">{session.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
                    <button className="w-full md:w-40 bg-surface-container-highest border border-outline-variant text-primary font-label-md py-3 rounded-lg hover:bg-surface-variant active:scale-95 transition-all text-xs tracking-widest uppercase">
                      Reschedule
                    </button>
                    {session.location.includes("Remote") && (
                      <button className="w-full md:w-40 bg-primary-container text-black font-label-md py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all text-xs tracking-widest uppercase font-bold">
                        Join Link
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content: History */}
          {activeTab === "history" && (
            <div className="space-y-4 animate-in fade-in duration-500">
              {pastSessions.map((session) => (
                <div key={session.id} className="bg-surface-container-lowest border border-outline-variant p-6 md:p-8 rounded-xl flex flex-col md:flex-row justify-between md:items-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
                  <div className="space-y-2">
                    <span className="font-label-md text-on-surface-variant text-[10px] tracking-widest uppercase">
                      {session.date} • {session.trainer}
                    </span>
                    <h3 className="font-headline-md text-primary uppercase">{session.type}</h3>
                    <div className="inline-flex items-center gap-2 mt-2 bg-surface-container-high px-3 py-1.5 rounded text-primary-fixed-dim font-label-md text-xs">
                      <span className="material-symbols-outlined text-[14px]">monitoring</span>
                      {session.metrics}
                    </div>
                  </div>
                  
                  <div className="shrink-0 w-full md:w-auto">
                    <button className="w-full md:w-40 border border-outline-variant text-primary font-label-md py-3 rounded-lg hover:bg-surface-variant active:scale-95 transition-all text-xs tracking-widest uppercase">
                      View Log
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="pt-8 text-center">
                <button className="text-primary-fixed-dim font-label-md hover:underline text-sm tracking-widest uppercase">
                  Load Older Sessions
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Sidebar / Widgets (Right Column) */}
        <div className="lg:col-span-4 space-y-6 mt-8 lg:mt-0">
          
          {/* Quick Book Widget */}
          <div className="glass-card p-6 md:p-8 rounded-xl border border-primary-container/20 relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary-container/10 rounded-full blur-2xl group-hover:bg-primary-container/20 transition-all"></div>
            <h3 className="font-headline-md text-primary uppercase mb-2">Need a Session?</h3>
            <p className="font-body-md text-on-surface-variant mb-6 text-sm">
              Your primary coach has 3 slots available this week. Keep the momentum going.
            </p>
            <Link href="/trainer" className="flex items-center justify-center gap-2 w-full bg-primary-container text-black font-label-md py-4 rounded-lg hover:brightness-110 active:scale-95 transition-all text-xs tracking-widest uppercase font-bold">
              Book Now
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          {/* Monthly Summary Bento Box */}
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6 md:p-8">
            <h3 className="font-label-md text-on-surface-variant tracking-widest uppercase mb-6 text-xs">
              October Overview
            </h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-display-lg text-primary leading-none">08</p>
                  <p className="font-label-md text-on-surface-variant text-[10px] uppercase tracking-widest mt-1">Sessions Completed</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
                </div>
              </div>
              
              <div className="h-px w-full bg-outline-variant/50"></div>
              
              <div className="flex justify-between items-end">
                <div>
                  <p className="font-display-lg text-secondary-container leading-none">12</p>
                  <p className="font-label-md text-on-surface-variant text-[10px] uppercase tracking-widest mt-1">Hours Logged</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-secondary-container">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}