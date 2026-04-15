const SnackList = () => {
  const snacks = [
    { name: 'Pretzels', rank: 3 },
    { name: 'Hot Fries', rank: 1 },
    { name: 'Popcorn', rank: 2 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ul>
      {sortedSnacks.map((snack, index) => (
        <li key={index}>
          #{snack.rank}: {snack.name}
        </li>
      ))}
    </ul>
  );
};

export default SnackList;
