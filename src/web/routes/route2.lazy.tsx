import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/example" as never)({
  component: Example,
});

function Example() {
  return (
    <div>Your story begins here</div>
  )
}
