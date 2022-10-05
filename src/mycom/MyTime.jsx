function MyTime() {

  return (
  <div className="myt">
    {new Date().toLocaleTimeString()}
  </div>
  );
}

export default MyTime;