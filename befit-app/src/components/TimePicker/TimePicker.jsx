const CustomTimeInput = ({ date, onChangeCustom}) => {
    const value = date instanceof Date && !isNaN(date)
    ? // Getting time from Date beacuse `value` comes here without seconds
      date.toLocaleTimeString('it-IT')
    : '';
  
    return (
      <input
        className="bp3-input bp3-fill"
        type="time"
        step="1"
        value={value}
        onChange={(event) => onChangeCustom(date, event.target.value)}
      />);
  };