import "./Tags.style.scss";

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div className="tags__detail" key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
}
export default Tags;
