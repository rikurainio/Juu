import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/example" as never)({
  component: Example,
});

function Example() {
  return <div>example route 1</div>;
}
