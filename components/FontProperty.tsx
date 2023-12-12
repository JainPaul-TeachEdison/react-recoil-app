import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const fontSizeState = atom({
    key: "fontSizeState",
    default: 14,
  });
  
  const fontSizeLabelState = selector({
    key: "fontSizeLabelState",
    get: ({ get }) => {
      const fontSize = get(fontSizeState);
      const unit = "px";
  
      return `${fontSize}${unit}`;
    },
  });

export function FontProperty() {
  return (
    <div>
      <FontButton />
      <Text />
    </div>
  );
}

function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontSizeLabel = useRecoilValue(fontSizeLabelState);
    return (
      <>
        <div>Current font size: {fontSizeLabel}</div>
        <button onClick={() => setFontSize(fontSize + 1)} style={{ fontSize }}>
          Click to Enlarge
        </button>
      </>
    );
  }
  
  function Text() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return <p style={{ fontSize }}>This text will increase in size too.</p>;
  }