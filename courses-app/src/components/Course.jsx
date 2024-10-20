function Course({ id, content, title, price, removeOneCourse }) {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-price">{price}TL</h4>
      </div>
      <p>{content}</p>
      <button className="card-delete" onClick={() => removeOneCourse(id)}>
        Sil
      </button>
    </div>
  );
}

export default Course;
