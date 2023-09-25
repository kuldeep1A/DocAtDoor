import "./SCSS/slider.css";

export const Slider = (params) => {
  document.documentElement.style.setProperty("--my-color", params.Color);
  return (
    <>
      <label className="switch">
        <input type="checkbox" onClick={() => params.onClick()} />
        <span className="slider round"></span>
      </label>
    </>
  );
};
