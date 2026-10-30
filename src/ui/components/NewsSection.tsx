import React from "react";
import { AnchorOrButton } from "utils";
import { associationNews } from "../../data/news";
import "./newsSection.css";

export const NewsSection: React.FC = () => {
  return (
    <section className="news-section" aria-labelledby="news-heading">
      <div className="news-inner">
        <h2 id="news-heading" className="news-heading">
          خبر های جدید:
        </h2>
        <ul className="news-list" role="list">
          {associationNews.map((item) => (
            <li key={item.id} className="news-item" role="listitem">
              <AnchorOrButton
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="news-link"
              >
                <span className="news-bullet" aria-hidden="true" />
                <span className="news-text">{item.title}</span>
              </AnchorOrButton>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
