import blob1 from "./assets/blob1.svg";
import blob2 from "./assets/blob2.svg";

export default function Blob() {
  const blobBlue = {
    position: "fixed",
    width: "600px",
    bottom: "-20%",
    left: "-10%",
    zIndex: -1,
    opacity: 0.6,
  };
  const blobYellow = {
    position: "fixed",
    width: "600px",
    top: "-20%",
    right: "-10%",
    zIndex: -1,
    opacity: 0.6,
  };
  return (
    <>
      <img src={blob1} alt="" style={blobBlue} />
      <img src={blob2} alt="" style={blobYellow} />
    </>
  );
}
