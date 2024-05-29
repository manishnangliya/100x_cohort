import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input-box";

export default function Page(): JSX.Element {
  return (
    <div>
      <Button appName="app" children="Hi there">
      </Button>
      <InputBox/>
    </div>
  );
}
