import React from 'react';

export const Box1 = ({ showOnly, created, assigned, onShowOnlyChange, onCreatedChange, onAssignedChange, onAdvancedFilters }) => {
  return (
    <div className="flex items-center space-x-4">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={showOnly}
          onChange={onShowOnlyChange}
          className="form-checkbox text-blue-600"
        />
        <span className="text-sm font-medium text-gray-700">Show only</span>
      </label>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={created}
          onChange={onCreatedChange}
          className="form-checkbox text-blue-600"
        />
        <span>Created by me</span>
      </label>
      
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={assigned}
          onChange={onAssignedChange}
          className="form-checkbox text-blue-600"
        />
        <span>Assigned to me</span>
      </label>

      <button
        onClick={onAdvancedFilters}
        className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Advanced Filters
      </button>
    </div>
  );
};

