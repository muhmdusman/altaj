async function extractDishNames() {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');

  const inputPath = path.join(__dirname, '../public/data/menu.json');
  const outputPath = path.join(__dirname, '../public/data/dish-names.txt');

  const raw = await fs.readFile(inputPath, 'utf8');
  const menu = JSON.parse(raw);

  if (!Array.isArray(menu)) {
    throw new Error('menu.json must contain an array of menu items.');
  }

  const dishNames = menu
    .map((item) => (typeof item?.name === 'string' ? item.name.trim() : ''))
    .filter(Boolean);

  await fs.writeFile(outputPath, `${dishNames.join('\n')}\n`, 'utf8');

  console.log(`Wrote ${dishNames.length} dish names to ${outputPath}`);
}

extractDishNames().catch((error) => {
  console.error('Failed to extract dish names:', error.message);
  process.exit(1);
});
