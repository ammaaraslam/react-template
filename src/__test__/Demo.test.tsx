import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("renders a demo div with 'Hello' button", () => {
  render(
    <div>
      <button>Hello</button>
    </div>
  );
  expect(screen.getByRole("button")).toHaveTextContent("Hello");
});
