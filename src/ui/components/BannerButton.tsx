import React from "react";
import { AnchorOrButton } from "utils";
import type { LaunchpadItem } from "../../data/types/launchpad";
import "./launchpad.css";

export interface BannerButtonProps {
  item: LaunchpadItem;
}

export const BannerButton: React.FC<BannerButtonProps> = ({ item }) => {
  return (
    <AnchorOrButton
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.ariaLabel}
      className={`launchpad-card banner-card banner-theme-${item.theme}`}
    >
      <div className="banner-content">
        <h2 className="banner-title">{item.title}</h2>
      </div>
      {item.imageSrc && (
        <div className="banner-badge">
          <img
            src={item.imageSrc}
            alt={item.title}
            className="banner-badge-img"
            loading="lazy"
          />
        </div>
      )}
    </AnchorOrButton>
  );
};
