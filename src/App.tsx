import React, { useState } from 'react';
import { Competitor, ResearchProject } from './types';
import { generateResearchInsights } from './services/geminiService';

const App: React.FC = () => {
  const [project, setProject] = useState<ResearchProject>({
    id: '1', title: 'Research', businessProblem: '', 
    hypotheses: { problem: '', solution: '', value: '' }, 
    competitors: [], aiInsights: ''
  });

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Fox Scout - Strategy Analysis</h1>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-xl">Welcome to the Fox Scout competitive research tool.</p>
      </div>
    </div>
  );
};
export default App;
