import { useState } from 'react'
import { Box1 } from './components/Box1'
import './App.css'

function App() {
  const [showOnly, setShowOnly] = useState(false);
  const [createdByMe, setCreatedByMe] = useState(false);
  const [assignedToMe, setAssignedToMe] = useState(false);

  const handleShowOnlyChange = (e) => {
    setShowOnly(e.target.checked);
  };

  const handleCreatedChange = (e) => {
    setCreatedByMe(e.target.checked);
  };

  const handleAssignedChange = (e) => {
    setAssignedToMe(e.target.checked);
  };

  const handleAdvancedFilters = () => {
    console.log('Advanced filters clicked');
  };

  return (
    <div className="p-8">
      <Box1
        showOnly={showOnly}
        created={createdByMe}
        assigned={assignedToMe}
        onShowOnlyChange={handleShowOnlyChange}
        onCreatedChange={handleCreatedChange}
        onAssignedChange={handleAssignedChange}
        onAdvancedFilters={handleAdvancedFilters}
      />
    </div>
  );
}

export default App
