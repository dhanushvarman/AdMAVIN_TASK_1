import React, { useState } from 'react'

function Design() {

  const element = ['element 1', 'element 2', 'element 3', 'element 4', 'element 5', 'element 6', 'element 7', 'element 8', 'element 9', 'element 10']

  const [bucket1, setBucket1] = useState(element);
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
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div class="card text-center">
                        <div class="card-header" style={{ fontWeight: "bolder" }}>
                            BUCKET 1
                        </div>
                        <div class="card-body" style={{height:"400px"}}>
                            {bucket1.map((element, index) => {
                                return (
                                    <div key={`element-bucket1-${index}`} style={{ marginTop: "10px" }}>
                                        <input type="checkbox" id={`element-bucket1-${index}`} style={{ marginRight: "10px" }} />
                                        <label htmlFor={`element-bucket1-${index}`}>{element}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class="card text-center">
                        <div class="card-body">
                            <button className='btn btn-success btn-sm' style={{width:"200px"}} onClick={handleAddToBucket2}>Add to Bucket 2</button><br/>
                            <button className='btn btn-success btn-sm mt-3' style={{width:"200px"}} onClick={handleAddAllToBucket2}>Add All to Bucket 2</button>
                            <button className='btn btn-danger btn-sm mt-3' style={{width:"200px"}} onClick={handleRemoveFromBucket2}>Remove from Bucket 2</button>
                            <button className='btn btn-danger btn-sm mt-3' style={{width:"200px"}} onClick={handleRemoveAllFromBucket2}>Remove All from Bucket 2</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class="card text-center">
                        <div class="card-header" style={{ fontWeight: "bolder" }}>
                            BUCKET 2
                        </div>
                        <div class="card-body" style={{height:"400px"}}>
                                {bucket2.map((element, index) => {
                                    return (
                                        <div key={`element-bucket2-${index}`} style={{ marginTop: "10px" }}>
                                            <input type="checkbox" id={`element-bucket2-${index}`} style={{ marginRight: "10px" }} />
                                            <label htmlFor={`element-bucket2-${index}`}>{element}</label>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Design