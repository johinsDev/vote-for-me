export default function usePercentageVotes({
  totalDown,
  totalUp,
}: {
  totalDown: string;
  totalUp: string;
}): {
  percentageDown: string;
  percentageUp: string;
} {
  const down = parseInt(totalDown, 10);

  const up = parseInt(totalUp, 10);

  const total = down + up;

  let percentageDown = ((down * 100) / total).toFixed(0);

  let percentageUp = ((up * 100) / total).toFixed(0);

  if (isNaN(parseInt(percentageUp, 10))) {
    percentageUp = "0";
  }

  if (isNaN(parseInt(percentageDown, 10))) {
    percentageDown = "0";
  }

  return {
    percentageDown,
    percentageUp,
  };
}
