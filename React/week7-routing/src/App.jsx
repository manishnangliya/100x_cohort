import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}
function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Button />
  </div>
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count} <br/>
    <RenderEven/>
  </div>
}
function RenderEven(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven?"Its is even":null}
  </div>
}

function Button() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count=>count + 1);
    }}>
      Increase
    </button>
    <button onClick={() => {
      setCount(count=>count - 1);
    }}>
      Increase
    </button>
  </div>
}

export default App
