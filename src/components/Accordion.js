function Accordion(props) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button"
          data-bs-toggle="collapse"
          data-bs-target={`#${props.id}`}>
          {props.header}
        </button>
      </h2>

      <div id={props.id}
        className="accordion-collapse collapse"
        data-bs-parent={props.parent}>
        <div className="accordion-body">
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default Accordion