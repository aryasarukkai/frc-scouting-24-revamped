import React from 'react';

const EndgamePopup = ({ formData, handleInputChange, handleStageChange }) => {
  return (
    <div className="bg-blue-950 text-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Endgame</h2>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="onstage" className="mr-2">Onstage:</label>
          <select
            id="onstage"
            name="onstage"
            value={formData.onstage}
            onChange={handleInputChange}
            className="bg-black text-white px-2 py-1 rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="harmony" className="mr-2">Harmony:</label>
          <select
            id="harmony"
            name="harmony"
            value={formData.harmony}
            onChange={handleInputChange}
            className="bg-black text-white px-2 py-1 rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="trap" className="mr-2">Trap:</label>
          <select
            id="trap"
            name="trap"
            value={formData.trap}
            onChange={handleInputChange}
            className="bg-black text-white px-2 py-1 rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="spotlight" className="mr-2">Spotlight:</label>
          <select
            id="spotlight"
            name="spotlight"
            value={formData.spotlight}
            onChange={handleInputChange}
            className="bg-black text-white px-2 py-1 rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="defenseBot" className="mr-2">Defense Bot:</label>
          <select
            id="defenseBot"
            name="defenseBot"
            value={formData.defenseBot}
            onChange={handleInputChange}
            className="bg-black text-white px-2 py-1 rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="disabledDamagedBot" className="mr-2">Disabled/Damaged Bot:</label>
          <select
            id="disabledDamagedBot"
            name="disabledDamagedBot"
            value={formData.disabledDamagedBot}
            onChange={handleInputChange}
            className="bg-black text-white px-2 py-1 rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="nonFunctionalBot" className="mr-2">Non Functional Bot:</label>
          <select
            id="nonFunctionalBot"
            name="nonFunctionalBot"
            value={formData.nonFunctionalBot}
            onChange={handleInputChange}
            className="bg-black text-white px-2 py-1 rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EndgamePopup;