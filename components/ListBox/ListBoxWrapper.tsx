import React from "react";
export const ListBoxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="video_info_list border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 bg-transparent shadow-lg dark:bg-black/30 video_info_items">
    {children}
  </div>
);
