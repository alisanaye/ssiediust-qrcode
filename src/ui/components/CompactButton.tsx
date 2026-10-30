import React from "react";
import { AnchorOrButton } from "utils";
import type { LaunchpadItem } from "../../data/types/launchpad";
import "./launchpad.css";

export interface CompactButtonProps {
  item: LaunchpadItem;
}

const TelegramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <span style={{ fontSize: "1.45rem", fontWeight: 800, fontFamily: "sans-serif", lineHeight: 1 }}>
    in
  </span>
);

export const CompactButton: React.FC<CompactButtonProps> = ({ item }) => {
  const renderIcon = () => {
    switch (item.iconName) {
      case "telegram":
        return <TelegramIcon />;
      case "instagram":
        return <InstagramIcon />;
      case "linkedin":
        return <LinkedInIcon />;
      default:
        return null;
    }
  };

  return (
    <AnchorOrButton
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.ariaLabel}
      className={`launchpad-card compact-btn compact-theme-${item.theme}`}
    >
      <div className="compact-icon-wrapper" aria-hidden="true">
        {renderIcon()}
      </div>
      <span className="compact-title">{item.title}</span>
    </AnchorOrButton>
  );
};
