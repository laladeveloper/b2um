
import '../common/Header.css'
import { FaChevronLeft } from "react-icons/fa6";

export default function Header({title}) {
  let style = {
  fontSize: '20px',
  fontWeight: 700,
  color: 'rgba(0,0,0,0.7)',
  cursor:'pointer'
}
  return (
    <>
      <div
        className="header-container"
        style={{ justifyContent: "space-between", ...style }}
      >
        {/* <Logo /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => window.history.back()}
        >
          <FaChevronLeft />
          <span className="pl-2">{title}</span>
        </div>
      </div>
    </>
  );
}