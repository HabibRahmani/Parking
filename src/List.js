export default function List({ title, buttonNum, buttonColor }) {
  return (
    <div>
      <h1 className="button-title">{title}</h1>

      <div className="button-parent">
        <div className={buttonColor}>
          <h1 className="button-num">{buttonNum}</h1>
        </div>
      </div>
    </div>
  );
}
