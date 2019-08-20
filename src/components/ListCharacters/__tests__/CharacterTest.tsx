import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import CharacterCard from "../ui/CharacterCard";
import usePercentageVotes from "../../../uitls/usePercentageVotes";
import db from "../../../services/db";

jest.mock("../../../services/db", () => {
  return {
    table: jest.fn(() => {
      return {
        update: jest.fn(() => Promise.resolve()),
      };
    }),
  };
});

const defaultRuling = {
  id: 0,
  name: "Test",
  category: "",
  timeIn: "",
  description: "Description test",
  votesUp: "1",
  votesDown: "2",
  image: "",
  isMain: false,
};

test("Show modal card", async () => {
  const { getByText } = render(<CharacterCard ruling={defaultRuling} />);

  const name = getByText("Test");
  const description = getByText("Description test");

  expect(name).toBeDefined();
  expect(description).toBeDefined();
});

test("Show percentage up/down with hooks calc", async () => {
  const { getByTestId } = render(<CharacterCard ruling={defaultRuling} />);

  const _percentageUp = getByTestId("percentage-up");
  const _percentageDown = getByTestId("percentage-down");

  const { percentageDown, percentageUp } = usePercentageVotes({
    totalDown: defaultRuling.votesDown,
    totalUp: defaultRuling.votesUp,
  });

  expect(_percentageUp.style.width).toEqual(`${percentageUp}%`);
  expect(_percentageUp).toHaveClass("bg-like");

  expect(_percentageDown.style.width).toEqual(`${percentageDown}%`);
  expect(_percentageDown).toHaveClass("bg-unlike");
});

test("Show percentage up 100% hidden down div", async () => {
  const { getByTestId } = render(
    <CharacterCard
      ruling={{ ...defaultRuling, votesUp: "100", votesDown: "0" }}
    />
  );

  const percentageUp = getByTestId("percentage-up");

  expect(percentageUp.style.width).toEqual("100%");
  expect(percentageUp).toHaveClass("bg-like");
});

test('On click button up/down show focus class"', async () => {
  const { getAllByTestId } = render(<CharacterCard ruling={defaultRuling} />);

  const up = getAllByTestId("up-button").pop();
  const down = getAllByTestId("down-button").pop();

  if (up) {
    fireEvent.click(up);
  }

  expect(up).toHaveClass("border-2");
  expect(down).toHaveClass("no-focus");

  if (down) {
    fireEvent.click(down);
  }

  expect(up).toHaveClass("no-focus");
  expect(down).toHaveClass("border-2");
});

test('On click button up/down show vote now"', async () => {
  const { getAllByTestId, getByTestId } = render(
    <CharacterCard ruling={defaultRuling} />
  );

  const up = getAllByTestId("up-button").pop();

  if (up) {
    fireEvent.click(up);
  }

  const voteNow = await waitForElement(() => getByTestId("vote-now"));

  expect(voteNow).toBeDefined();
});

test("On click vote now update percentage", async () => {
  const { getAllByTestId, getByTestId } = render(
    <CharacterCard ruling={defaultRuling} />
  );

  const up = getAllByTestId("up-button").pop();
  if (up) {
    fireEvent.click(up);
  }

  const voteNow = await waitForElement(() => getByTestId("vote-now"));

  expect(voteNow).toBeDefined();
});

test("show buttom major than show button for majority of votes", async () => {
  const { getAllByTestId } = render(<CharacterCard ruling={defaultRuling} />);

  const down = getAllByTestId("down-button");

  expect(down.length).toEqual(2);
});

// on click vote now update percentage/index db
// show again on click
// on click again show buttons
