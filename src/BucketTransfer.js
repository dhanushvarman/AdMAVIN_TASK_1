import React, { useState } from 'react';

function BucketTransfer() {
  const [bucket1, setBucket1] = useState(['element 1', 'element 2', 'element 3', 'element 4', 'element 5']);
  const [bucket2, setBucket2] = useState([]);

  const handleAddToBucket2 = () => {
    const selectedElements = bucket1.filter((element, index) => {
      return document.getElementById(`element-bucket1-${index}`).checked;
    });
    setBucket1(bucket1.filter((element, index) => {
      return !document.getElementById(`element-bucket1-${index}`).checked;
    }));
    setBucket2([...bucket2, ...selectedElements]);
  };

  const handleAddAllToBucket2 = () => {
    setBucket2([...bucket2, ...bucket1]);
    setBucket1([]);
  };

  const handleRemoveFromBucket2 = () => {
    const selectedElements = bucket2.filter((element, index) => {
      return document.getElementById(`element-bucket2-${index}`).checked;
    });
    setBucket2(bucket2.filter((element, index) => {
      return !document.getElementById(`element-bucket2-${index}`).checked;
    }));
    setBucket1([...bucket1, ...selectedElements]);
  };

  const handleRemoveAllFromBucket2 = () => {
    setBucket1([...bucket1, ...bucket2]);
    setBucket2([]);
  };

  return (
    <div className="bucket-transfer">
      <div className="bucket">
        <h3>Bucket 1</h3>
        <ul>
          {bucket1.map((element, index) => {
            return (
              <li key={`element-bucket1-${index}`}>
                <input type="checkbox" id={`element-bucket1-${index}`} />
                <label htmlFor={`element-bucket1-${index}`}>{element}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="controls">
        <button onClick={handleAddToBucket2}>Add to Bucket 2</button>
        <button onClick={handleAddAllToBucket2}>Add All to Bucket 2</button>
        <button onClick={handleRemoveFromBucket2}>Remove from Bucket 2</button>
        <button onClick={handleRemoveAllFromBucket2}>Remove All from Bucket 2</button>
      </div>
      <div className="bucket">
        <h3>Bucket 2</h3>
        <ul>
          {bucket2.map((element, index) => {
            return (
              <li key={`element-bucket2-${index}`}>
                <input type="checkbox" id={`element-bucket2-${index}`} />
                <label htmlFor={`element-bucket2-${index}`}>{element}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BucketTransfer;
