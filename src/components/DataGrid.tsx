import React, { memo } from 'react';

export const DataGrid = memo(() => {
  return (
    <div className="data-grid fixed inset-0 pointer-events-none opacity-30">
      <div className="grid-overlay" />
    </div>
  );
}, () => true); // Prevent unnecessary re-renders