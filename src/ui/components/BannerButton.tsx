import React from "react";
import { AnchorOrButton } from "utils";
import type { LaunchpadItem } from "../../data/types/launchpad";
import "./launchpad.css";

export interface BannerButtonProps {
  item: LaunchpadItem;
}

const getAssetUrl = (src: string): string => {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }
  const cleanPath = src.replace(/^\.?\//, "");
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${cleanPath}`;
};

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
            src={getAssetUrl(item.imageSrc)}
            alt={item.title}
            className="banner-badge-img"
            loading="lazy"
          />
        </div>
      )}
    </AnchorOrButton>
  );
};
