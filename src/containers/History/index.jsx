import React, { useCallback } from 'react';

function History({ data = [], handleSearch, handleRemove }) {
  const renderEmpty = useCallback(() => (data && data.length === 0) && (
    <div className="empty">
      <p>No Record</p>
    </div>
  ), [data]);
  const renderHistoryItem = useCallback((item, index) => {
    const {
      id, city, country, createdAt,
    } = item;
    return (
      <li key={id} className="history-item">
        <div>
          <span>{`${index + 1}.`}</span>
          <span>{`${city}, ${country}`}</span>
        </div>
        <div>
          <span>{createdAt}</span>
          <button onClick={() => handleSearch(city, country)}>
            <i className="fas fa-search" />
          </button>
          <button onClick={() => handleRemove(id)}>
            <i className="fas fa-trash" />
          </button>
        </div>
      </li>
    );
  }, [handleSearch, handleRemove]);

  return (
    <div className="history-section">
      <h2>Search History</h2>
      {renderEmpty()}
      <ol>
        {data.map((item, index) => renderHistoryItem(item, index))}
      </ol>
    </div>
  );
}

export default History;
